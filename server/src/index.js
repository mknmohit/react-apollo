const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient({
  errorFormat: 'minimal'
});

const resolvers = {
  Query,
  Mutation,
  Post: {
    id: parent => parent.id,
    title: parent => parent.title,
    description: parent => parent.description
  },
  Blog: {
    results: parent => parent.results,
    total: parent => parent.total,
    currentPage: parent => parent.currentPage
  }
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
    };
  },
});

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
