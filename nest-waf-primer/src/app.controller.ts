import { Controller, Render,Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home.html')
  getHome(): {message: string} {
    return this.appService.getHome();
  }

  @Get('about-us')
  @Render('about-us.html')
  getAbout(): {message: string}{
    return this.appService.getAbout();
  }

}
