import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { TResponce, TTokens } from '../types';
import {
  LeadsDataDTO,
  ContactsDataDTO,
  CompaniesDataDTO,
} from '@/units/data.dto';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async createLead({
    base_domain,
    access_token,
  }: {
    base_domain: string;
    access_token: string;
  }): Promise<number> {
    const { data }: { data: TResponce } = await firstValueFrom(
      this.httpService
        .post(
          `https://${base_domain}/api/v4/leads`,
          {
            name: ['2'],
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            throw new HttpException(
              error.message,
              HttpStatus[error.code.split('ERR_')[1]],
            );
          }),
        ),
    );
    return new LeadsDataDTO(data).id;
  }
  async createContact({
    base_domain,
    access_token,
  }: {
    base_domain: string;
    access_token: string;
  }): Promise<number> {
    const { data }: { data: TResponce } = await firstValueFrom(
      this.httpService
        .post(
          `https://${base_domain}/api/v4/contacts`,
          {
            name: ['a'],
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            throw error;
          }),
        ),
    );
    return new ContactsDataDTO(data).id;
  }
  async createCompany({
    base_domain,
    access_token,
  }: {
    base_domain: string;
    access_token: string;
  }): Promise<number> {
    const { data }: { data: TResponce } = await firstValueFrom(
      this.httpService
        .post(
          `https://${base_domain}/api/v4/companies`,
          {
            name: ['a'],
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            throw error;
          }),
        ),
    );
    return new CompaniesDataDTO(data).id;
  }

  async getTokens(clientId: string): Promise<TTokens> {
    const { data } = await firstValueFrom(
      this.httpService
        .get('https://test.gnzs.ru/oauth/get-token.php', {
          headers: {
            'X-Client-Id': clientId,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw error;
          }),
        ),
    );
    return data;
  }
}
