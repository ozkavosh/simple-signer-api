const openPopup = (url: string, title: string) => {
  const width = 360;
  const height = 480;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  window.open(
    url,
    title,
    `width=${width},height=${height},left=${left},top=${top}`,
  );
};

export default openPopup;
