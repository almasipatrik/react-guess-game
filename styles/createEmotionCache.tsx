import createCache from "@emotion/cache";

const createEmotionCache = () => {
  return createCache({ key: "scss", prepend: true });
};

export default createEmotionCache;
