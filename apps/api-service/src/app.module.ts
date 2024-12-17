import { Logger, Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApiConfigModule } from "./config/config.module";

@Module({
  imports: [ApiConfigModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
