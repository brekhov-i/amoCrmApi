import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Request, Response } from 'express';

@Controller('/create')
export class CreateController {
  constructor(private readonly appService: AppService) {}

  @Post('/leads')
  async createDeal(@Req() req: Request, @Res() res: Response) {
    try {
      const id: number = await this.appService.createLead({
        base_domain: req.cookies.base_domain,
        access_token: req.cookies.token,
      });

      res.status(HttpStatus.CREATED).send(id.toString());
    } catch (e) {
      throw e;
    }
  }

  @Post('/contacts')
  async createContact(@Req() req: Request, @Res() res: Response) {
    try {
      const id: number = await this.appService.createContact({
        base_domain: req.cookies.base_domain,
        access_token: req.cookies.token,
      });

      res.status(HttpStatus.CREATED).send(id.toString());
    } catch (e) {
      throw e;
    }
  }

  @Post('/companies')
  async createCompany(@Req() req: Request, @Res() res: Response) {
    try {
      const id: number = await this.appService.createCompany({
        base_domain: req.cookies.base_domain,
        access_token: req.cookies.token,
      });

      res.status(HttpStatus.CREATED).send(id.toString());
    } catch (e) {
      throw e;
    }
  }
}
