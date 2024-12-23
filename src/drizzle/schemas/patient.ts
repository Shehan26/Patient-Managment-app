import { pgTable } from "drizzle-orm/pg-core";
import { serial, varchar, date } from "drizzle-orm/pg-core";
import { patientVisit } from "./patientVisits";
import { relations } from 'drizzle-orm';


export const patient = pgTable('patient', {
    id:serial('id').primaryKey(),
    firstName: varchar('first_name').notNull(),
    lastName: varchar('last_name').notNull(),
    dob: date('date_of_birth').notNull(),
    contactNo: varchar('contact_no').notNull(),

});

export const patientRelation = relations(patient, ({many})=>({
  patientVisit: many(patientVisit)  
}))