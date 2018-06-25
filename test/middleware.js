module.exports = function (express, http, bodyParser) {
  const port = parseInt(process.env.PORT, 10) || 8000;
  const app = express();
  app.set('port', port);
  const server = http.createServer(app);
  server
    .listen(port, () => {
      console.log(`The server is running at http://localhost:${port}`);
    })
    .on('error', (err) => {
      console.error(err);
    });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  afterAll(() => setTimeout(() => {
    server.close();
    process.exit();
  }, 0));

  return app;
};
