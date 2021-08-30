const getAllPosts = async (parent, args, context, info) => {
  const totalPost = context.prisma.post.count();
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
  if (!singlePost) {
    throw new Error(`Post with id: ${args.id} not found!`);
  }
  return singlePost;
};

module.exports = {
  getAllPosts,
  getSinglePost,
};
