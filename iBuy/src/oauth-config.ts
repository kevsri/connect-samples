import { OAuthConfigDefinition } from "@shipengine/connect";

const oauthConfig: OAuthConfigDefinition = {
  authorizationProcess: {
    loginRequest: {
      method: "GET",
      url: "https://www.google.com",
      queryParameters: [
        {
          name: "foo",
          value: "Bar"
        }
      ]
    },
    redirectRequest: {

    }
  }
};

export default oauthConfig;
