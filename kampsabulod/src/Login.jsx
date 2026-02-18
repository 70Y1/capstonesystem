import React, { useEffect } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";

export default function Login() {
  // Optional: check if running on HTTPS
  useEffect(() => {
    if (window.location.protocol !== "https:") {
      console.warn(
        "FB.login requires HTTPS. Running on HTTP may block login."
      );
    }
  }, []);

  const handleSuccess = (res) => {
    console.log("Facebook User:", res);

    // Save user temporarily in localStorage
    localStorage.setItem("user", JSON.stringify(res));

    alert("Login Success!");
    // Redirect to home or dashboard
    window.location.href = "/";
  };

  const handleFail = (err) => {
    console.error("Facebook login failed:", err);
    alert("Facebook login failed. Make sure you are on HTTPS.");
  };

  // Only render the button if HTTPS or on localhost with HTTPS
  const canRenderLogin =
    window.location.protocol === "https:" ||
    window.location.hostname === "localhost";

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login or Create Account</h2>

      {canRenderLogin ? (
        <FacebookLogin
          appId="2005621856722544"
          onSuccess={handleSuccess}
          onFail={handleFail}
          render={({ onClick }) => (
            <button
              onClick={onClick}
              style={{
                padding: "12px 30px",
                background: "#1877f2",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Continue with Facebook
            </button>
          )}
        />
      ) : (
        <p style={{ color: "red" }}>
          Facebook login requires HTTPS. Use GitHub Pages or local HTTPS server.
        </p>
      )}
    </div>
  );
}
