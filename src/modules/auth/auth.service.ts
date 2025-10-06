import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { Repository } from 'typeorm';
import { USER_ROLE, UserEntity } from '../user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BcryptService } from './bcrypt.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private User: Repository<UserEntity>,
    private bcryptService: BcryptService,
  ) {}

  async register({
    name,
    email,
    password,
    mobilePhone,
    role,
  }: RegisterUserDto) {
    let user = await this.User.findOneBy({ email: email });
    if (user) {
      throw new ConflictException('Email already exists');
    }
    password = await this.bcryptService.hashPassword(password);
    let userOptions: any = { name, email, password };

    if (role && (role == USER_ROLE.TEACHER || role != USER_ROLE.RECIPIENT)) {
      userOptions.role = role;
    }
    if (mobilePhone) {
      userOptions.mobilePhone = mobilePhone;
    }
    user = this.User.create({
      name: userOptions.name,
      email: userOptions.email,
      password: userOptions.password,
      role: userOptions.role,
      mobilePhone: userOptions.mobilePhone,
    });
    user = await this.User.save(user);
    return { data: user, message: 'User registred successfully' };
  }
}
