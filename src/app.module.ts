import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { PatientModule } from './patient/patient.module';
import { PatientVisitModule } from './patient-visit/patient-visit.module';
import { PatientVisitController } from './no-spec/patient-visit/patient-visit.controller';


@Module({
  imports: [    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),DrizzleModule, PatientModule, PatientVisitModule],
  controllers: [AppController, PatientVisitController],
  providers: [AppService],
})
export class AppModule {}


