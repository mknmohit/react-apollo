async function addNewPost(parent, args, context, info) {
  return context.prisma.post.create({
    data: {
      title: args.title,
      description: args.description
    }
  })
}

module.exports = {
  addNewPost
};
