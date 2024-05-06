export const proxyUrl = (url) => {
  return `https://corsproxy.io/?${encodeURIComponent(url)}`;
};
