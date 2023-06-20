import { PostDto } from "../dto/post.dto";



export const POST_SERVICE = 'POST_SERVICE';

export interface IAuthService {
    insertPost(postDto:PostDto):Promise<any>,
}