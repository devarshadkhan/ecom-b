import { useRouter } from "next/router";
import React from "react";

/**
 * For Hide Double Scrollbar
 * @param deps
 */

const useHideScrollBar = (deps: any) => {
  const router = useRouter();

  React.useEffect(() => {
    function overFlowHide() {
      document.body.classList.add("body-scroll-hidden");
    }
    function overFlowShow() {
      document.body.classList.remove("body-scroll-hidden");
    }
    if (deps) {
      overFlowHide();
    } else {
      overFlowShow();
    }
    // RESTORE OVERFLOW WHEN ROUTE CHANGE
    router.events.on("routeChangeComplete", overFlowShow);
    return () => {
      router.events.off("routeChangeComplete", overFlowShow);
    };
  }, [deps, router.events]);
};

export default useHideScrollBar;
