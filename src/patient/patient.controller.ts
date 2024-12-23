import { Controller,Get, Post, Body } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/createpatient.dto';

@Controller('patient')
export class PatientController {
    constructor(
        private readonly patientService: PatientService
    ) {}
    @Get('/')
    getPatient() {
        return this.patientService.getPatient();
    }

    @Post('/')
    addPatient(@Body()CreatePatientDto: CreatePatientDto) {
        return this.patientService.addPatient(CreatePatientDto);

    }
}
