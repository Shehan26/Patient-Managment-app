import { Injectable, Inject, createParamDecorator } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import * as schema from 'src/drizzle/schemas';
import { CreatePatientDto } from './dto/createpatient.dto';

@Injectable()
export class PatientService {
    constructor(
        @Inject(DrizzleAsyncProvider)
        private readonly db: NodePgDatabase<typeof schema>
    ) {}

    async addPatient(createPatientDto:CreatePatientDto){
        return await this.db.insert(schema.patient).values(createPatientDto).returning();
    }

    async getPatient() {
        return await this.db.select().from(schema.patient);
    }

}
