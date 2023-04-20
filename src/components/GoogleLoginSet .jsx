import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";

export const GoogleLoginSet = () => {
  const clientId =
    "1078994058615-k9it7m4mmopukijf0o6rif1ko3jfh7s3.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin

        />
      </GoogleOAuthProvider>
    </>
  );
};