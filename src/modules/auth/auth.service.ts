import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private User: Repository<UserEntity>,
  ) {}

  async register({ name, email, password, mobilePhone }: RegisterUserDto) {
    const user = await this.User.findOneBy({email: email});
    if(user) {
        
    }
  }
}
