import PerPageLayout from "layout/perpage";
import { useRouter } from 'next/router';
import { useEffect } from "react";

const ErrorPaage = () => {
  const router = useRouter();
  useEffect(() => {
      router.push('/');
  }, []);
  return (
    <>
<div className="container">
  <div style={{margin:"0 auto", textAlign:"center", padding:"40px"}}>  
  <h1 style={{fontSize:"70px", color:"grey"}}><strong style={{color:"#000"}}>404</strong> Page</h1>
  <p style={{color:"#222178", textAlign:"center", padding:"40px", fontWeight:"600", fontSize:"40px"}}>Redirecting To HomePage</p>
  </div>

</div>
    </>
  );
};

export default ErrorPaage;

ErrorPaage.getLayout = PerPageLayout;