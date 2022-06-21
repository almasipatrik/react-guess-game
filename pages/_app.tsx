import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import createEmotionCache from "../styles/createEmotionCache";
import lightThemeOptions from "../styles/theme";
import "../styles/globals.scss";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const App: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <div className={`container`}>
          <main className={`main`}>
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
