import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entities';
import { Repository } from 'typeorm';
import { PostDto, Translate } from './dto/post.dto';
import { translate } from '@vitalets/google-translate-api';
import { resolve } from 'path';
import { rejects } from 'assert';
import { error } from 'console';
@Injectable()
export class PostService {

    constructor(@InjectRepository(Post) private readonly postRepository: Repository<Post>) { }

    async insertPost(postDto: PostDto): Promise<any> {
        const tag = { tag: postDto.tag.toString() }
        Object.assign(postDto, tag);


        const a = await this.postRepository.createQueryBuilder()
            .insert()
            .into(Post)
            .values(postDto)
            .execute();
        console.log(a);

    }


    async getPost(data): Promise<any> {
        const take = data.take || 10
        const page = data.page || 1;
        const skip = (page - 1) * take;

        const [result, total] = await this.postRepository.findAndCount({
            where: { isGlobal: true }, order: { createdAt: "DESC" },
            take: take,
            skip: skip
        })
        return {
            data: result,
            count: total
        }

    }


    async getYourPost(data): Promise<any> {
        const take = data.take || 10
        const page = data.page || 1;
        const skip = (page - 1) * take;

        const [result, total] = await this.postRepository.findAndCount({
            where: { userId: data.userId }, order: { createdAt: "DESC" },
            take: take,
            skip: skip
        })
        return {
            data: result,
            count: total
        }

    }

    getPostTranslate(data: Translate): Promise<any> {

        return new Promise(async (resolve, reject) => {
            let result: Translate;
            let text = data.title + ' $ ' + data.body
            let datas
            try{
                datas = await translate(text, { to: data.lang });
            }
            catch(err) {
                console.log(err)
                resolve ({'error': err.name})
            }
            
            result.title, result.body =  datas['data'].split('$')
            // result.title, result.body, tags =  translated_datas['data'].split('!@#$')

            // let translated_text =  tags.split('!@#$')
            // for (let t of translated_text){
            //     result.tag.push(t)
            // }
            resolve(result)
        })
        
    }

}
