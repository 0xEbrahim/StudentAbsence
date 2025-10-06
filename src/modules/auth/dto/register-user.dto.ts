import {
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { USER_ROLE } from 'src/modules/user/entities/user.entity';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5, { message: 'Name must be more than 4 charcters' })
  @MaxLength(50, { message: 'Name muist be less than 51 charcters' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'Password cannot be less than 8 characters' })
  password: string;

  @IsOptional()
  role?: USER_ROLE | null;

  @IsOptional()
  @IsMobilePhone(
    'ar-EG',
    {},
    { message: 'Please provide a valid EG mobile phone' },
  )
  mobilePhone?: string | null;
}
