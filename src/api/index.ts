const api = {
  constructor() {
    this.baseUrl = "https://jsonplaceholder.typicode.com";
  },

  getUser() {
    return fetch(`${this.baseUrl}/users`).then((res) => res.json());
  },
};
