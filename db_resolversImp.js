import conn from './db_connection.js';

export default  async function getStudents(){
    const result = await conn.select().from('student');
    return result;
}
