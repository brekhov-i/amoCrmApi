import { Controller, Get, Header, Req, Res } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Request, Response } from 'express';
import { TTokens } from '@/types';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getToken')
  @Header('content-type', 'application/json')
  async getToken(@Req() req: Request, @Res() res: Response) {
    try {
      const tokens: TTokens = await this.appService.getTokens(
        req.header('x-client-id'),
      );

      res.cookie('token', tokens.access_token);
      res.cookie('base_domain', tokens.base_domain);

      res.send();
    } catch (e) {
      throw e;
    }
  }
}
