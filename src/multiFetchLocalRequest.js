const {
  get,
} = require('http');

module.exports = async function (req, res, next) {
  const { query, headers } = req;
  const entities = Object.keys(query);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write('{');

  for (const entityKey of entities) {
    res.write(`"${entityKey}":`);
    await new Promise((resolve, reject) => {
      const [hostname, port] = headers.host.split(':');
      const path = `/${query[entityKey]}`;
      get({
          hostname,
          port,
          path,
        }, (_res) => {
          _res
            .on('error', e => reject(e))
            .on('data', itemChunk => res.write(itemChunk))
            .on('end', () => {
              if (entityKey !== entities[entities.length - 1]) {
                res.write(',');
              } else {
                res.write('}');
                res.end();
              }

              return resolve();
            });
        },
      );
    })
      .catch((e) => {
        throw new Error(e);
      });
  }

  return next();
};
