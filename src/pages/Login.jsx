import { useEffect } from "react";
import { InitGoogleAuth , RenderGoogleButton } from "../Auth/googleAuth";

export default function Login() {
  useEffect(() => {
    InitGoogleAuth(handleGoogleResponse);
    RenderGoogleButton();
  }, []);

  const handleGoogleResponse = async (response) => {
    const idToken = response.credential;
    console.log("id",idToken)
   const formData = new FormData();
    formData.append("idToken",idToken) 
    formData.append("clientId","725063270255-d6na17gr1t3j5c08k7b12hgun2i73tke.apps.googleusercontent.com")// Google ID Token

    // Send token to Golang backend
    const res = await fetch("http://localhost:9081/v1/api/oauth/driver/google/auth", {
      method: "POST",
    //   headers: { "Content-Type": "application/json" },
      body: formData,
    });

    const data = await res.json();
    console.log("Backend response:", data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login with Google</h2>
      <div id="googleBtn"></div>
    </div>
  );
}
