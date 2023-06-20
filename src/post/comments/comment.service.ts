import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entities';
import { Repository } from 'typeorm';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {

    constructor(@InjectRepository(Comment) private readonly commentRepository: Repository<Comment>) { }


    async comment(comment: CommentDto): Promise<any> {

        return this.commentRepository.save(comment)

    }


    async getComment(id): Promise<Comment[]> {
        console.log(id);

        return this.commentRepository.find({ where: { postId: id.id } })
    }

    // async editComment (editD)

}
