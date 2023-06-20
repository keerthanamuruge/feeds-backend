import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsString, isNotEmpty, isString } from "class-validator";



export class PostDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    tag: string;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    body: string;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    isGlobal: boolean;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    isComment: boolean;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    createdAt: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    updatedAt: Date;


}

export class PageDto {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    take: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    page: number;

}

export class YourFeedDto {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    take: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    page: number;

}