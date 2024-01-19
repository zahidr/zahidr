import getStudents from './db_resolversImp.js';

export const resolvers = {
    Query: {
        students: async() =>  await getStudents(),
    },
  };

export default resolvers;
