import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './db/db.module'

@Module({
  imports: [ApiModule, DatabaseModule],
  // controllers: [ApiController],
  // providers: [AppService],
})
export class AppModule {}
