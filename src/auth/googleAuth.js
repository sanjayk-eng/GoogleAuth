// Google OAuth helper functions

export function InitGoogleAuth(onSuccess) {
  window.google.accounts.id.initialize({
    client_id: "725063270255-d6na17gr1t3j5c08k7b12hgun2i73tke.apps.googleusercontent.com", // replace with your Google client ID
    callback: onSuccess,
  });
}

export function RenderGoogleButton() {
  window.google.accounts.id.renderButton(
    document.getElementById("googleBtn"),
    {
      theme: "outline",
      size: "large",
    }
  );
}
