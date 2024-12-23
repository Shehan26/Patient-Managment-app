CREATE TABLE "patient" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"date_of_birth" date NOT NULL,
	"contact_no" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "patient_visit" (
	"id" serial PRIMARY KEY NOT NULL,
	"patient_id" integer NOT NULL,
	"reason" text NOT NULL,
	"visit_date" date NOT NULL,
	"diagnosis" text NOT NULL,
	"prescribed_medication" text NOT NULL,
	"note" text NOT NULL
);
