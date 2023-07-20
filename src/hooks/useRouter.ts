import { NavigateOptions, useNavigate } from "react-router-dom";

declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

const isApp = () => {
  let _isApp = false;

  if (window.ReactNativeWebView) {
    _isApp = true;
  }

  return _isApp;
};

const sendRouterEvent = (type: string): void => {
  window.ReactNativeWebView.postMessage(
    JSON.stringify({ type: "ROUTER_EVENT", data: type })
  );
};

export const useRouter = () => {
  const nav = useNavigate();

  const back = () => {
    if (isApp()) {
      sendRouterEvent("back");
    }
    nav(-1);
  };

  const push = ({
    url,
    options,
  }: {
    url: string;
    options?: NavigateOptions;
  }) => {
    if (isApp()) {
      sendRouterEvent("push");
    }
    nav(url, options);
  };

  return {
    back,
    push,
  };
};
