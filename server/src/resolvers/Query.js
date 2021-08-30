// async function feed(parent, args, context, info) {
//   const where = args.filter
//     ? {
//         OR: [
//           { description: { contains: args.filter } },
//           { url: { contains: args.filter } }
//         ]
//       }
//     : {};

//   const links = await context.prisma.link.findMany({
//     where,
//     skip: args.skip,
//     take: args.take,
//     orderBy: args.orderBy
//   });

//   const count = await context.prisma.link.count({ where });

//   return {
//     id: 'main-feed',
//     links,
//     count
//   };
// }

// let dummyPosts = [
//   {
//     id: "post-0",
//     title: "sample dummy title 0",
//     description: "sample dummy description 0",
//   },
//   {
//     id: "post-1",
//     title: "sample dummy title 1",
//     description: "sample dummy description 1",
//   },
//   {
//     id: "post-2",
//     title: "sample dummy title 2",
//     description: "sample dummy description 2",
//   },
// ];

const getAllPosts = async (parent, args, context, info) => {
  // console.log("info: ", info);
  // console.log("context: ", context);
  // console.log("args: ", args);
  // console.log("parent: ", parent);
  // console.log("context.prisma: ", context.prisma);
  console.log("args: ", args);
  const totalPost = context.prisma.post.count();
  console.log("totalPost: ", totalPost);
  const skip = args.itemsPerPage * (args.currentPage - 1);
  const posts = context.prisma.post.findMany({
    skip,
    take: args.itemsPerPage
  })
  return {
    results: posts,
    total: totalPost,
    currentPage: args.currentPage,
  }
};

const getSinglePost = async (parent, args, context, info) => {
  const singlePost = await context.prisma.post.findUnique({
    where: {
      id: Number(args.id),
    },
  });
  console.log("singlePost: ", singlePost);
  if (!singlePost) {
    throw new Error(`Post with id: ${args.id} not found!`);
  }
  return singlePost;
};

module.exports = {
  getAllPosts,
  getSinglePost,
};
