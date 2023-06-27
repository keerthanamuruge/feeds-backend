import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PageDto, PostDto, YourFeedDto } from './dto/post.dto';
import { PostService } from './post.service';
import { AuthGuard } from '../authorization/auth.guard';

export interface ICreateResponse {
    status: number;
    message: string;
    data: null;
    errors: { [key: string]: any };
}

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {

    }

    @ApiTags('insertFeed')
    @Post('')
    async insertFeed(@Body() PostDto: PostDto) {
        const res: ICreateResponse = await this.postService.insertPost(PostDto)
        return res;
    }

    @ApiTags('getGlobalFeed')
    @Post('/all')
    async getFeed(@Body() pagination : PageDto) {
        const res: ICreateResponse = await this.postService.getPost(pagination)
        return res;
    }

    @ApiTags('getYourFeed')
    @Post('/yours')
    async getYourFeed(@Body() pagination : YourFeedDto) {
        const res: ICreateResponse = await this.postService.getYourPost(pagination)
        return res;
    }
}
