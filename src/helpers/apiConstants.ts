const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';
const BASE_URL = 'https://gorest.co.in/public/v1/';

const apiConst = {
  getUser: `${BASE_URL}users`,
  getPost: `${BASE_URL}posts`,
};

export {GET, POST, PUT, DELETE, apiConst};
