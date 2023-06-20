import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from './Entites/user.entites';
import { RegisterDto } from './dto/auth.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {


    constructor(private readonly jwtservice : JwtService,  @InjectRepository(User) private readonly userRepository: Repository<User>){

    }






    async createUser(user: RegisterDto): Promise<any> {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const password = {password: hashedPassword}
        Object.assign(user, password);
        const userData =await this.userRepository.save(user)
        return userData

      }


      async findByEmail(email: string): Promise<any> {
        return this.userRepository.findOne({ where: { email } });
      }


      async validateUser(email: string, password: string): Promise<any> {
        const user = await this.findByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
          return user;
        }
        return undefined;
      }
    
      async generateToken(user: User): Promise<string> {
        const payload = { email: user.email, sub: user.userId };
        return this.jwtservice.signAsync(payload);
      }
}
