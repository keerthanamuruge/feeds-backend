import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class LoginDto{

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;

    

}


export class RegisterDto{

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    userName: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    createdAt: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    updatedAt: Date;

}
export class AuthResposeDto{
    
    @Expose()
    userId:any;
    @Expose()
    userName:string;
    @Expose()
    email:string;
    @Exclude()
    createdAt:number;
    @Exclude()
    updatedAt:number;
    @Expose()
    password:string;

}
