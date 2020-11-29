let timer = require('./timer').default;

if (module.hot) {
  module.hot.accept('./timer', async function() {
    console.log('🔁  HMR Reloading `./timer`...');
    try {
      timer = require('./timer').default;
      await timer();
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  HMR Enabled!');
}

(async function() {
  await timer();

  process.exit();
})()
