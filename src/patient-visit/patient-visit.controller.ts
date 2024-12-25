import { Controller, Post, Body, Delete, Param, Put, Get } from '@nestjs/common';
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
    deletepatientVist(@Param('id') id: number){
        return this.patientVisitService.deletePatientVisit(id);
    }
    @Put('/:id')
    updatepatientVisit(@Param('id') id:number, @Body() CreatePatientVisitDto: CreatePatientVisitDto) {
        return this.patientVisitService.updatePatientVisit(id, CreatePatientVisitDto);
    }

    @Get('/')
    getPatientVisit() {
        return this.patientVisitService.getPatientVisit();
    }
}
