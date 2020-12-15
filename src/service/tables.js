import request from './request';
import { TABLE_URL } from './api_constants';

function getTables(id = null, headers = null) {
  let params = {};
  if (id != null) {
    params = {
      id,
    };
  }
  return request({
    url: TABLE_URL, method: 'GET', params, headers,
  });
}



export default {
  getTables,
};
