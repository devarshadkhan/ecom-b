import { useVerifyToken } from "network-requests/mutations";
import { useRouter } from "next/router";
import React from "react";

function VerifyToken() {
  const router = useRouter();
  const { mutate } = useVerifyToken();

  React.useEffect(() => {
    const { token } = router.query;
    if (token) {
      mutate(token as string, {
        onSuccess: () => router.push("/"),
        onError: () => router.push("/auth/register"),
      });
    }
  }, [router, mutate]);

  return (
    <div>
      {/* add loading spinner component here */}
      <p>Loading...</p>
      <p>Please Wait while we are logging you in</p>
    </div>
  );
}

export default VerifyToken;
