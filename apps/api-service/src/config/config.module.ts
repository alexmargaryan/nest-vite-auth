import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { ApiConfigService } from "./config.service";
import { config } from "./environment";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: config,
      isGlobal: true,
    }),
  ],
  providers: [ApiConfigService],
  exports: [ApiConfigService],
})
export class ApiConfigModule {}
