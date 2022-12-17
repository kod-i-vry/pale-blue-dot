import { sync } from './database';

sync()
  .then(() => {
    console.log('data successfully synchronized');
  })
  .catch((err) => {
    console.log(err);
    console.log('synchronize failed');
  });
