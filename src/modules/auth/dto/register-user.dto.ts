import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

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
  @IsMobilePhone(
    'ar-EG',
    {},
    { message: 'Please provide a valid EG mobile phone' },
  )
  mobilePhone?: string;
}
