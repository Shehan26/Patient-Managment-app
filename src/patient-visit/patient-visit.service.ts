import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import * as schema from 'src/drizzle/schemas';
import { CreatePatientVisitDto } from './dto/create-patientVisit.dto';
import { eq } from 'drizzle-orm';


@Injectable()
export class PatientVisitService {
        constructor(
            @Inject(DrizzleAsyncProvider)
            private readonly db: NodePgDatabase<typeof schema>
        ) {}

        async addPatientVisit(createPatientVisitDto: CreatePatientVisitDto) {
            return await this.db.insert(schema.patientVisit).values(createPatientVisitDto).returning();
        }

        async deletePatientVisit(id: number) {
            return await this.db.delete(schema.patientVisit).where(eq(schema.patientVisit.id, id)).returning();
        }

        async updatePatientVisit(id:number, createPatientVisitDto:CreatePatientVisitDto) {
            return await this.db.update(schema.patientVisit).set(createPatientVisitDto).where(eq(schema.patientVisit.id, id)).returning();

        }

        async getPatientVisit() {
            const data = await this.db.select().from(schema.patientVisit)
            .innerJoin(schema.patient, eq(schema.patientVisit.patientId, schema.patient.id));

            return data.map(patientVisit => ({
                ...patientVisit.patient_visit,
                patient: patientVisit.patient
            }))
        }
}

