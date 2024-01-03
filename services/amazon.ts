import { useEffect, useState } from "react";

interface AmazonProps {
  bindChangeAction?: any;
  bindUpgradeAction?: any;
  initCheckout?: any;
  renderButton?: any;
  signout?: any;
}

/**
 * Get Amazon pay
 * @returns
 */
export default function useAmazonPay(): { amazonPay: AmazonProps } {
  const [amazonPay, setAmazonPay] = useState<any>(null);

  useEffect(() => {
    const _window = window as any;
    const amazonApi = _window?.amazon?.Pay;
    if (amazonApi) {
      // set only if amazon pay is not set
      if (!amazonPay) {
        setAmazonPay({ ...amazonApi });
      }
    }
  }, [amazonPay]);

  return { amazonPay: { ...amazonPay } };
}
