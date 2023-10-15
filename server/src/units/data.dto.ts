import { TResponce } from '@/types';

export class LeadsDataDTO {
  id: number;
  request_id: string;

  constructor(data: TResponce) {
    this.id = data._embedded.leads[0].id;
    this.request_id = data._embedded.leads[0].request_id;
  }
}

export class ContactsDataDTO {
  id: number;
  request_id: string;

  constructor(data: TResponce) {
    this.id = data._embedded.contacts[0].id;
    this.request_id = data._embedded.contacts[0].request_id;
  }
}

export class CompaniesDataDTO {
  id: number;
  request_id: string;

  constructor(data: TResponce) {
    this.id = data._embedded.companies[0].id;
    this.request_id = data._embedded.companies[0].request_id;
  }
}
