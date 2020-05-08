import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log("init constructor");
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('api')
  getApi(): any {
    return 12*5;
  }
}
