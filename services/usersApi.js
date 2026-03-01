class UsersApi {
  constructor(request) {
    this.request = request;
  }

  async listUsers(page = 1) {
    return await this.request.get(`/api/users?page=${page}`);
  }

  async createUser(userData) {
    return await this.request.post('/api/users', {
      data: userData
    });
  }
}

module.exports = { UsersApi };
