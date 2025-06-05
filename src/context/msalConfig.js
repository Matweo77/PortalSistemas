import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "5861c9ce-5431-4878-9ed4-b6f740dba845",
    authority: "https://login.microsoftonline.com/df4534ac-d804-41fa-bfa2-578dc8a69d31",
    redirectUri: "http://localhost:5173",
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
