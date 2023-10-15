export type TTokens = {
  access_token: string;
  base_domain: string;
};

export type TResponce = {
  _links: {
    self: {
      href: string;
    };
  };
  _embedded: {
    leads?: [
      {
        id: number;
        request_id: string;
        _links: {
          self: {
            href: string;
          };
        };
      },
    ];
    contacts?: [
      {
        id: number;
        request_id: string;
        _links: {
          self: {
            href: string;
          };
        };
      },
    ];
    companies?: [
      {
        id: number;
        request_id: string;
        _links: {
          self: {
            href: string;
          };
        };
      },
    ];
  };
};

declare module 'express-session' {
  interface SessionData {
    token: string; // Добавьте свойство token
    base_domain: string;
  }
}
