import { NextPage } from "next";
import ContentLoader from "react-content-loader";
import styles from "../styles/components/GuessLoader.module.scss";

interface GuessLoaderProps {
  className?: string;
}

const GuessLoader: NextPage<GuessLoaderProps> = ({ className }) => {
  return (
    <ContentLoader
      className={styles.loader}
      viewBox="0 0 160 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="523" y="237" rx="3" ry="3" width="88" height="6" />
      <rect x="540" y="227" rx="3" ry="3" width="52" height="6" />
      <rect x="385" y="230" rx="3" ry="3" width="410" height="6" />
      <rect x="300" y="223" rx="3" ry="3" width="445" height="25" />
      <rect x="530" y="235" rx="3" ry="3" width="178" height="6" />
      <circle cx="586" cy="234" r="20" />
      <rect x="12" y="16" rx="13" ry="13" width="122" height="126" />
    </ContentLoader>
  );
};

export default GuessLoader;
