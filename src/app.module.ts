import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
require('dotenv').config();
require('dotenv').config({ path: `./.env.${process.env.DB_CONFIG}` })
@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({ type: 'mysql',
  port: 3306,
  host: 'localhost',
  database : 'feedback',
  username: 'root',
  password: 'root',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
   synchronize: false, autoLoadEntities: true}), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
