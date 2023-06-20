import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';


export interface ICreateResponse {
    status: number;
    message: string;
    data: null;
    errors: { [key: string]: any };
}
@Controller('comment')
export class CommentController {

    constructor(private readonly commentService: CommentService) { }



    @ApiTags('insertComment')
    @Post('insert')
    async insertComment(@Body() commentDto: CommentDto) {
        const res: ICreateResponse = await this.commentService.comment(commentDto)
        return res;
    }

    @ApiTags('getComment')
    @Get('get')
    @ApiQuery({ name: 'id', required: true })
    async getComment(@Query() params) {
        const res = await this.commentService.getComment(params)
        return res;
    }



}
