import * as Fastify from 'fastify';
import * as path from 'path';
import * as fastifyStatic from 'fastify-static';

const app = Fastify.fastify();

app.register(require('fastify-static'), {
  root: path.join(__dirname, '../../src/public/'),
});

app.get('/', (req, res) => {
  res.sendFile('index.html');
});
app.get('/study', (req, res) => {
  res.sendFile('/pages/study.html');
});
app.get('/rating', (req, res) => {
  res.sendFile('/pages/rating.html');
});
app.get('/cabinet', (req, res) => {
  res.sendFile('/pages/cabinet.html');
});

app.listen(3000, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })

