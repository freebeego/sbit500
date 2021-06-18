import { BASE_API_URL } from '../constants/constants';

class Api {
  #url = `${BASE_API_URL}/`;

  #fetch(path, queryParams = {}) {
    const config = {};
    if (queryParams.method) config.method = queryParams.method;
    if (queryParams.headers) config.headers = {...config.headers, ...queryParams.headers};
    if (queryParams.body) config.body = JSON.stringify(queryParams.body);

    return fetch(this.#url + path, config)
      .then(res => {
        if (res.ok) return res.json();

        return res.json().then(res => Promise.reject(res.message));
      });
  }

  getUserData(userId) {
    return this.#fetch(`testjob?id_user=${userId}`);
  }
}

const api = new Api();

export default api;
