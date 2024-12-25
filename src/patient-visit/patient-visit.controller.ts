import { Controller, Post, Body, Delete, Query } from '@nestjs/common';
import { CreatePatientVisitDto } from './dto/create-patientVisit.dto';
import { PatientVisitService } from './patient-visit.service';

@Controller('patient-visit')
export class PatientVisitController {
    constructor(
        private readonly patientVisitService: PatientVisitService
    ) {}
    @Post('/')
    addPatientVisit(@Body() createPatientVisitDto: CreatePatientVisitDto) {
        return this.patientVisitService.addPatientVisit(createPatientVisitDto);
    }
    @Delete('/:id')
    deletepatientVist(@Query('id') id: number){
        return this.patientVisitService.deletePatientVisit(id);
    }
}
