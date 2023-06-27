import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from './Entites/user.entites';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({
    secret: 'feeds143', // Replace with your own secret key
    signOptions: { expiresIn: '5h' }, // Set the token expiration time
  }),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
