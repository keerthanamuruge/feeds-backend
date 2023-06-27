import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
require('dotenv').config();
require('dotenv').config({ path: `./.env.${process.env.DB_CONFIG}` })
require('dotenv').config({ path: `./.env.${process.env.SECERT_KEY}` })
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [AuthModule, ConfigModule.forRoot({isGlobal: true, envFilePath: '.env'}),TypeOrmModule.forRoot({ type: 'mysql',
  port: 3306,
  host: 'localhost',
  database : 'feedback',
  username: 'root',
  password: '123',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
   synchronize: false, autoLoadEntities: true}), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
