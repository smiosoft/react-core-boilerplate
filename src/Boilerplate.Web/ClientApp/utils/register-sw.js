/* eslint-disable no-console */
const register = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.info('SW registered:', registration);
        })
        .catch((error) => {
          console.error('SW registration failed:', error);
        });
    });
  }
};

export default register;
