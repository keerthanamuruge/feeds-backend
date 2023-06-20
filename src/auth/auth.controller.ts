import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { AuthService } from './auth.service';



export interface ICreateResponse {
    status: number;
    message: string;
    data: null;
    errors: { [key: string]: any };
}
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {

    }



    @ApiTags('register')
    @Post('register')
    async create(@Body() UserDto: RegisterDto) {
        // const existingUser:ICreateResponse  = await this.authService.createUser(UserDto)
        const existingUser: ICreateResponse = await this.authService.findByEmail(UserDto.email);
        if (existingUser) {
            return{ message : 'Email already registered'};
        }
        await this.authService.createUser(UserDto);
        return {message :'Registration successful'};
        // return res;
    }

    @ApiTags('login')
    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<any> {
        const validatedUser = await this.authService.validateUser(loginDto.email, loginDto.password);
        if (!validatedUser) {
            return { message :'Invalid email or password'};
        }
        const token = await this.authService.generateToken(validatedUser);
        return {access_token : token,
        user: validatedUser} ;
    }
}
