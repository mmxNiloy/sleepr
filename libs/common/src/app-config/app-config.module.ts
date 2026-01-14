import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: joi.object({
        MONGO_DB_URI: joi.string().uri().required(),
      }),
    }),
  ],
  exports: [ConfigService],
  providers: [ConfigService],
})
export class AppConfigModule {}
