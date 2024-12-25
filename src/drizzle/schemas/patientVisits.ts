import { pgTable, PgTable } from "drizzle-orm/pg-core";
import { serial, integer, varchar, date, text } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm';
import { patient } from "./patient";

export const patientVisit = pgTable('patient_visit', {

    id:serial('id').primaryKey(),
    patientId: integer ('patient_id').notNull(),
    reason: text ('reason').notNull(),
    visitDate: date('visit_date').notNull(),
    diagnosis: text('diagnosis').notNull(),
    prescribedMedication: text('prescribed_medication').notNull(),
    note: text('note').notNull(),

});

export const patientVisitRelation = relations(patientVisit, ({one})=>({
    patient:one(patient, {
        fields:[patientVisit.patientId],
        references:[patient.id]
    })
}))