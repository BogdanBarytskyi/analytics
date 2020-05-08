import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SitesModule } from './sites/sites.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    SitesModule,
    MongooseModule.forRoot('mongodb://localhost/analytics') ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
