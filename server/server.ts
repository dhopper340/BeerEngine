import { App } from './app';

const PORT = 8000;

new App().app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
