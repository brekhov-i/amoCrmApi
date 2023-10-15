import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app.controller';
import { AppService } from '@/services/app.service';
import { HttpModule } from '@nestjs/axios';
import { CreateController } from '@/controllers/create.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CreateController],
  providers: [AppService],
})
export class AppModule {}
