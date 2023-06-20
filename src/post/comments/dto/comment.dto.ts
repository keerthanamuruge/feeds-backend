import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString, isNotEmpty, isString } from "class-validator";



export class CommentDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    content: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    postUserId: number;

      @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    commentUserId: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    postId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    createdAt: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    updatedAt: Date;


}