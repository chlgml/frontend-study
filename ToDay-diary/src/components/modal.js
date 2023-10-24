export const modalFixed = () => {
  document.body.style.cssText = `
  position: fixed; 
  top: -100vh;
  overflow-y: scroll;
  width: 100%;`;
};
