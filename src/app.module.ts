import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),DrizzleModule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


