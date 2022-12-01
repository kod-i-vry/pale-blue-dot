import app from './index';
import { PORT } from './common/environment';
import { dataSourceInit } from './database';

const main = async () => {
  await dataSourceInit({});

  app.listen(PORT, () => {
    console.log(`port ${PORT} server opened.`);
  });
};

main().catch(() => {
  process.exit(1);
});
