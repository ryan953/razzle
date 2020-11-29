export default function timer(delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Waited ' + delay + 'ms');
      resolve();
    }, delay);
  });
}
