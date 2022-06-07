import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHome(): {message: string} {
    return {message: `Home Page`};
  }

  getAbout(): {message: string}{
    return {message: `About Page`};
  }
}
