import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://aabdeltawab440:Aihf20082002@regrestration.b5bxm.mongodb.net/auth-movies-db?retryWrites=true&w=majority&appName=Regrestration',
    ),
    UsersModule,
    AuthModule,
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
