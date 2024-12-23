import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  controllers: [PatientController],
  providers: [PatientService, ...drizzleProvider]
})
export class PatientModule {}
