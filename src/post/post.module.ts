import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { POST_SERVICE } from './interface/post.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entities';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { ConfigModule } from '@nestjs/config';
import { CommentController } from './comments/comment.controller';
import { CommentService } from './comments/comment.service';
import { Comment } from './comments/entities/comment.entities';
import { User } from 'src/auth/Entites/user.entites';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Comment]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env'
    }),
    
  ],
  providers: [{ useClass: PostService, provide: POST_SERVICE }, PostService, CommentService],
  controllers: [PostController, CommentController]
})
export class PostModule { }
