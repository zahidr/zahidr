import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import{typeDefs} from './typeDef.js';
import {resolvers} from './resolver.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
console.log(`🚀  Server ready at: ${url}`);

// test mysql with knex
// (async() => {
//     const students = await getStudents();
//     console.log(students);

// })();
