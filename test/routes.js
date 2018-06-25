module.exports = function (handleLocalRequest, app) {
  app.get(
    '/api/*',
    handleLocalRequest,
    () => {},
  );
  app.get(
    '/todos',
    (req, res, next) => {
      res.json([
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        }]);
      next();
    },
  );
  app.get(
    '/users',
    (req, res, next) => {
      res.json([
        {
          id: 1,
          name: 'Leanne Graham',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        }]);
      next();
    },
  );
};
