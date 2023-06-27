import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { POST_SERVICE } from './interface/post.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entities';
// import { EasyconfigModule } from 'nestjs-easyconfig';
import { ConfigModule } from '@nestjs/config';
import { CommentController } from './comments/comment.controller';
import { CommentService } from './comments/comment.service';
import { Comment } from './comments/entities/comment.entities';
import { User } from '../auth/Entites/user.entites';
import { AuthGuard } from '../authorization/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Comment, User]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env'
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
     PostService, 
     CommentService, 
     AuthGuard,
     AuthService,
    JwtService

  ],
  controllers: [PostController, CommentController]
})
export class PostModule { }
