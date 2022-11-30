let authenticatedUser = { username: "admin", password: "admin" };

const authModel = {
  getUser: () => {
    return authenticatedUser;
  },
};

module.exports = authModel;
