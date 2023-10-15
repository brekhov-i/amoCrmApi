import { AxiosHeaders } from "axios";

export type TTokenResponse = {
  access_token: string;
  base_domain: string;
};

export type TTokenResponseConfig = AxiosHeaders & {
  "X-Client-Id": string;
};
