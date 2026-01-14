import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from '../app-config/app-config.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB_URI', { infer: true }),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
