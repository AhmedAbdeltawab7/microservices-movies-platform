import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Headers,
} from '@nestjs/common';
import { GatewayService } from './gateway.service';

@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  // -------- AUTH (عبر الجيتواي) --------
  @Post('auth/signup')
  signup(@Body() body: any) {
    return this.gatewayService.forwardToAuth('signup', body);
  }

  @Post('auth/login')
  login(@Body() body: any) {
    return this.gatewayService.forwardToAuth('login', body);
  }

  // -------- MOVIES (تحتاج JWT) --------
  @Post('movies')
  createMovie(
    @Body() body: any,
    @Headers('authorization') auth: string,
  ) {
    return this.gatewayService.forwardToMovies(
      'movies',
      'POST',
      body,
      auth,
    );
  }

  @Get('movies')
  getMovies(@Headers('authorization') auth: string) {
    return this.gatewayService.forwardToMovies(
      'movies',
      'GET',
      undefined,
      auth,
    );
  }

  @Get('movies/:id')
  getMovie(
    @Param('id') id: string,
    @Headers('authorization') auth: string,
  ) {
    return this.gatewayService.forwardToMovies(
      `movies/${id}`,
      'GET',
      undefined,
      auth,
    );
  }

  @Patch('movies/:id')
  updateMovie(
    @Param('id') id: string,
    @Body() body: any,
    @Headers('authorization') auth: string,
  ) {
    return this.gatewayService.forwardToMovies(
      `movies/${id}`,
      'PATCH',
      body,
      auth,
    );
  }

  @Delete('movies/:id')
  deleteMovie(
    @Param('id') id: string,
    @Headers('authorization') auth: string,
  ) {
    return this.gatewayService.forwardToMovies(
      `movies/${id}`,
      'DELETE',
      undefined,
      auth,
    );
  }
}
