import { Module } from '@nestjs/common';
import { PatientVisitService } from './patient-visit.service';
import { PatientVisitController } from './patient-visit.controller';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';


@Module({
  
  controllers: [PatientVisitController],
  providers: [PatientVisitService, ...drizzleProvider]
})
export class PatientVisitModule {}
