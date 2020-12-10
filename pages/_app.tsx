import { AppProps } from "next/dist/next-server/lib/router/router";
import { wrapper } from "../store/store";
import "../styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
