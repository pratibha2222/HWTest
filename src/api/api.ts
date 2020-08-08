import axios from 'axios';

export function getApi(url: string) {
  console.log('url => ' + url )
  return axios({
    method: 'GET',
    url,
    timeout: 20000,
    headers: {
      
    },
    validateStatus: (status) => {
      return true
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log('error ' + error);
      throw new Error(error);
    });
}

export function postApi(
  url: string,
  body: any,
) {
  console.log(
    'url => ' + url + JSON.stringify(body),
  );
 
  return axios({
    method: 'POST',
    url,
    timeout: 20000,
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    data: JSON.stringify(body),
    validateStatus: (status) => {
      return true
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log('error ' + error);
      throw new Error(error);
    });
}
