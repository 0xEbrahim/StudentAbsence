import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        username: cfg.get<string>('DB_USER'),
        password: cfg.get<string>('DB_PASS'),
        host: cfg.get<string>('DB_HOST'),
        port: cfg.get<number>('DB_PORT'),
        database: cfg.get<string>('DB_NAME'),
        type: 'postgres',
        entities: [],
        synchronize: cfg.get<boolean>('DB_SYNC'),
      }),
    }),
    UserModule,
  ],
})
export class AppModule {}
