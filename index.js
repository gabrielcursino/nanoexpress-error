import nanoexpress from 'nanoexpress';

const app = nanoexpress();

app

.get('/test', async (_, res) => {
  await new Promise(resolve => setTimeout(() => resolve(), 5000));

  return res.send('success');
});

app.listen(3000);
