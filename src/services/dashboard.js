import request from '../utils/request';
import { BASE_URL } from '../constants'

export async function query(params) {
  return request(`${BASE_URL}/api/dashboard`);
}
