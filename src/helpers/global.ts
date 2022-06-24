import axios from 'axios';

const makeAPIRequest = async (
  method: string,
  url: string,
  data: unknown,
  headers: unknown,
  params: unknown,
) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method,
      url,
      data,
      headers,
      params,
    };

    axios(options as never)
      .then(async response => {
        if (response?.status === 200 || response?.status === 201) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(async (error: unknown) => {
        reject(error);
      });
    return null;
  });

export default makeAPIRequest;
