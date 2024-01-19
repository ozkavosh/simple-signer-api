/**
 * Opens a popup window with the specified URL and title.
 *
 * @param {string} url - The URL of the webpage to open in the popup window.
 * @param {string} title - The title of the popup window.
 * @return {Window} The newly opened popup window.
 */
const openPopup = (url: string, title: string): Window => {
  const width = 360;
  const height = 480;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  return window.open(
    url,
    title,
    `width=${width},height=${height},left=${left},top=${top}`,
  );
};

export default openPopup;
