-- Database: Registration

-- DROP DATABASE "Registration";

CREATE DATABASE "Registration"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE "Registration"
    IS 'database for SNHU project';


-- SCHEMA: Ref

-- DROP SCHEMA "Ref" ;

CREATE SCHEMA "Ref"
    AUTHORIZATION postgres;

COMMENT ON SCHEMA "Ref"
    IS 'This schema contains all reference data';


-- SEQUENCE: "Ref"."AcademicYear_Id_seq"

-- DROP SEQUENCE "Ref"."AcademicYear_Id_seq";

CREATE SEQUENCE "Ref"."AcademicYear_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."AcademicYear_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."Address_Id_seq"

-- DROP SEQUENCE "Ref"."Address_Id_seq";

CREATE SEQUENCE "Ref"."Address_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."Address_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."ApplicantMark_Id_seq"

-- DROP SEQUENCE "Ref"."ApplicantMark_Id_seq";

CREATE SEQUENCE "Ref"."ApplicantMark_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."ApplicantMark_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."ApplicantPreference_Id_seq"

-- DROP SEQUENCE "Ref"."ApplicantPreference_Id_seq";

CREATE SEQUENCE "Ref"."ApplicantPreference_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."ApplicantPreference_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."ApplicantReservation_Id_seq"

-- DROP SEQUENCE "Ref"."ApplicantReservation_Id_seq";

CREATE SEQUENCE "Ref"."ApplicantReservation_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."ApplicantReservation_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."Applicant_Id_seq"

-- DROP SEQUENCE "Ref"."Applicant_Id_seq";

CREATE SEQUENCE "Ref"."Applicant_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."Applicant_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."Application_Id_seq"

-- DROP SEQUENCE "Ref"."Application_Id_seq";

CREATE SEQUENCE "Ref"."Application_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."Application_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."BranchStaff_Id_seq"

-- DROP SEQUENCE "Ref"."BranchStaff_Id_seq";

CREATE SEQUENCE "Ref"."BranchStaff_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."BranchStaff_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."BranchSubject_Id_seq"

-- DROP SEQUENCE "Ref"."BranchSubject_Id_seq";

CREATE SEQUENCE "Ref"."BranchSubject_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."BranchSubject_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."Branch_Id_seq"

-- DROP SEQUENCE "Ref"."Branch_Id_seq";

CREATE SEQUENCE "Ref"."Branch_Id_seq"
    INCREMENT 1
    START 12
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."Branch_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."City_Id_seq"

-- DROP SEQUENCE "Ref"."City_Id_seq";

CREATE SEQUENCE "Ref"."City_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."City_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."College_Id_seq"

-- DROP SEQUENCE "Ref"."College_Id_seq";

CREATE SEQUENCE "Ref"."College_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."College_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."Country_Id_seq"

-- DROP SEQUENCE "Ref"."Country_Id_seq";

CREATE SEQUENCE "Ref"."Country_Id_seq"
    INCREMENT 1
    START 2
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."Country_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."Quota_Id_seq"

-- DROP SEQUENCE "Ref"."Quota_Id_seq";

CREATE SEQUENCE "Ref"."Quota_Id_seq"
    INCREMENT 1
    START 9
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."Quota_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."RankList_Id_seq"

-- DROP SEQUENCE "Ref"."RankList_Id_seq";

CREATE SEQUENCE "Ref"."RankList_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."RankList_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."SecurityQuestionBank_Id_seq"

-- DROP SEQUENCE "Ref"."SecurityQuestionBank_Id_seq";

CREATE SEQUENCE "Ref"."SecurityQuestionBank_Id_seq"
    INCREMENT 1
    START 13
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."SecurityQuestionBank_Id_seq"
    OWNER TO postgres;
-- SEQUENCE: "Ref"."Staff_Id_seq"

-- DROP SEQUENCE "Ref"."Staff_Id_seq";

CREATE SEQUENCE "Ref"."Staff_Id_seq"
    INCREMENT 1
    START 6
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."Staff_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."State_Id_seq"

-- DROP SEQUENCE "Ref"."State_Id_seq";

CREATE SEQUENCE "Ref"."State_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."State_Id_seq"
    OWNER TO postgres;
-- SEQUENCE: "Ref"."SubjectMarkCutOff_Id_seq"

-- DROP SEQUENCE "Ref"."SubjectMarkCutOff_Id_seq";

CREATE SEQUENCE "Ref"."SubjectMarkCutOff_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."SubjectMarkCutOff_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."Subject_Id_seq"

-- DROP SEQUENCE "Ref"."Subject_Id_seq";

CREATE SEQUENCE "Ref"."Subject_Id_seq"
    INCREMENT 1
    START 12
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."Subject_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."TotalMarkCutOff_Id_seq"

-- DROP SEQUENCE "Ref"."TotalMarkCutOff_Id_seq";

CREATE SEQUENCE "Ref"."TotalMarkCutOff_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."TotalMarkCutOff_Id_seq"
    OWNER TO postgres;

-- SEQUENCE: "Ref"."Course_Id_seq"

-- DROP SEQUENCE "Ref"."Course_Id_seq";

CREATE SEQUENCE "Ref"."Course_Id_seq"
    INCREMENT 1
    START 25
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "Ref"."Course_Id_seq"
    OWNER TO postgres;

-- Table: "Ref"."Country"

-- DROP TABLE "Ref"."Country";

CREATE TABLE "Ref"."Country"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."Country_Id_seq"'::regclass),
    "Name" character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Country_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."Country"
    OWNER to postgres;

-- Table: "Ref"."State"

-- DROP TABLE "Ref"."State";

CREATE TABLE "Ref"."State"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."State_Id_seq"'::regclass),
    "Name" character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "State_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."State"
    OWNER to postgres;

-- Table: "Ref"."City"

-- DROP TABLE "Ref"."City";

CREATE TABLE "Ref"."City"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."City_Id_seq"'::regclass),
    "Name" character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "City_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."City"
    OWNER to postgres;

-- Table: "Ref"."Address"

-- DROP TABLE "Ref"."Address";

CREATE TABLE "Ref"."Address"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."Address_Id_seq"'::regclass),
    "Address1" character varying COLLATE pg_catalog."default",
    "Address2" character varying COLLATE pg_catalog."default",
    "CityId" integer,
    "StateId" integer,
    "CountryId" integer,
    "POBOX" character varying COLLATE pg_catalog."default",
    CONSTRAINT "Address_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "City" FOREIGN KEY ("CityId")
        REFERENCES "Ref"."City" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Country" FOREIGN KEY ("CountryId")
        REFERENCES "Ref"."Country" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "State" FOREIGN KEY ("StateId")
        REFERENCES "Ref"."State" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."Address"
    OWNER to postgres;


-- Table: "Ref"."College"

-- DROP TABLE "Ref"."College";

CREATE TABLE "Ref"."College"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."College_Id_seq"'::regclass),
    "Name" character varying COLLATE pg_catalog."default" NOT NULL,
    "AddressId" integer,
    "University" character varying COLLATE pg_catalog."default",
    "PhoneNumbers" character varying COLLATE pg_catalog."default",
    "Website" character varying COLLATE pg_catalog."default",
    "Email" character varying COLLATE pg_catalog."default",
    CONSTRAINT "College_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Address" FOREIGN KEY ("AddressId")
        REFERENCES "Ref"."Address" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."College"
    OWNER to postgres;

-- Table: "Ref"."AcademicYear"

-- DROP TABLE "Ref"."AcademicYear";

CREATE TABLE "Ref"."AcademicYear"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."AcademicYear_Id_seq"'::regclass),
    "Year" character varying COLLATE pg_catalog."default" NOT NULL,
    "StartDate" date,
    "CompletionDate" date,
    "TotalOccupancy" integer NOT NULL,
    "CollegeId" integer NOT NULL,
    "Active" boolean NOT NULL,
    "LastDateofApplication" date NOT NULL,
    "IsRankListPubllshed" boolean NOT NULL,
    CONSTRAINT "AcademicYear_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "College" FOREIGN KEY ("CollegeId")
        REFERENCES "Ref"."College" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."AcademicYear"
    OWNER to postgres;

-- Table: "Ref"."Subject"

-- DROP TABLE "Ref"."Subject";

CREATE TABLE "Ref"."Subject"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."Subject_Id_seq"'::regclass),
    "Name" character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Subject_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."Subject"
    OWNER to postgres;

-- Table: "Ref"."Branch"

-- DROP TABLE "Ref"."Branch";

CREATE TABLE "Ref"."Branch"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."Branch_Id_seq"'::regclass),
    "Name" character varying COLLATE pg_catalog."default" NOT NULL,
    "MajorSubjectId" integer,
    "CommenceDate" date,
    "TotalOccupancy" integer,
    "DepartmentId" integer NOT NULL,
    CONSTRAINT "Branch_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "College" FOREIGN KEY ("CollegeId")
        REFERENCES "Ref"."College" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "MajorSubject" FOREIGN KEY ("MajorSubjectId")
        REFERENCES "Ref"."Subject" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."Branch"
    OWNER to postgres;

-- Table: "Ref"."BranchSubject"

-- DROP TABLE "Ref"."BranchSubject";

CREATE TABLE "Ref"."BranchSubject"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."BranchSubject_Id_seq"'::regclass),
    "BranchId" integer NOT NULL,
    "SubjectId" integer NOT NULL,
    CONSTRAINT "BranchSubject_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Branch" FOREIGN KEY ("BranchId")
        REFERENCES "Ref"."Branch" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Subject" FOREIGN KEY ("SubjectId")
        REFERENCES "Ref"."Subject" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."BranchSubject"
    OWNER to postgres;

-- Table: "Ref"."Course"

-- DROP TABLE "Ref"."Course";

CREATE TABLE "Ref"."Course"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."Course_Id_seq"'::regclass),
    "Name" character varying COLLATE pg_catalog."default" NOT NULL,
    "MajorSubjectId" integer,
    "TotalOccupancy" integer,
    "BranchId" integer NOT NULL,
    "Duration" integer,
    "Active" boolean NOT NULL DEFAULT true,
    CONSTRAINT "Course_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Branch" FOREIGN KEY ("BranchId")
        REFERENCES "Ref"."Branch" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "MajorSubject" FOREIGN KEY ("MajorSubjectId")
        REFERENCES "Ref"."Subject" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."Course"
    OWNER to postgres;

COMMENT ON COLUMN "Ref"."Course"."Duration"
    IS 'in months';

-- Table: "Ref"."Staff"

-- DROP TABLE "Ref"."Staff";

CREATE TABLE "Ref"."Staff"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."Staff_Id_seq"'::regclass),
    "FirstName" character varying COLLATE pg_catalog."default" NOT NULL,
    "MiddleName" character varying COLLATE pg_catalog."default",
    "LastName" character varying COLLATE pg_catalog."default",
    "DateOfBirth" date,
    "UserName" character varying COLLATE pg_catalog."default",
    "Password" character varying COLLATE pg_catalog."default",
    "AddressId" integer,
    "CollegeId" integer NOT NULL,
    "IsAdmin" boolean ,
    CONSTRAINT "Staff_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Address" FOREIGN KEY ("AddressId")
        REFERENCES "Ref"."Address" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "College" FOREIGN KEY ("CollegeId")
        REFERENCES "Ref"."College" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."Staff"
    OWNER to postgres;


-- Table: "Ref"."BranchStaff"

-- DROP TABLE "Ref"."BranchStaff";

CREATE TABLE "Ref"."BranchStaff"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."BranchStaff_Id_seq"'::regclass),
    "BranchId" integer NOT NULL,
    "StaffId" integer NOT NULL,
    "AcademicYearId" integer NOT NULL,
    "IsHeadOfDepartment" boolean NOT NULL,
    CONSTRAINT "BranchStaff_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "AcademicYear" FOREIGN KEY ("AcademicYearId")
        REFERENCES "Ref"."AcademicYear" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Branch" FOREIGN KEY ("BranchId")
        REFERENCES "Ref"."Branch" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Staff" FOREIGN KEY ("StaffId")
        REFERENCES "Ref"."Staff" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."BranchStaff"
    OWNER to postgres;


-- Table: "Ref"."SecurityQuestionBank"

-- DROP TABLE "Ref"."SecurityQuestionBank";

CREATE TABLE "Ref"."SecurityQuestionBank"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."SecurityQuestionBank_Id_seq"'::regclass),
    "Question" character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "SecurityQuestionBank_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."SecurityQuestionBank"
    OWNER to postgres;

-- Table: "Ref"."Quota"

-- DROP TABLE "Ref"."Quota";

CREATE TABLE "Ref"."Quota"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."Quota_Id_seq"'::regclass),
    "Name" character varying COLLATE pg_catalog."default" NOT NULL,
    "IsReservation" boolean NOT NULL,
    "ReservationProofs" character varying COLLATE pg_catalog."default",
    "ReservationPercentage" integer,
    CONSTRAINT "Quota_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."Quota"
    OWNER to postgres;

-- Table: "Ref"."CutOffMark"

-- DROP TABLE "Ref"."CutOffMark";

CREATE TABLE "Ref"."CutOffMark"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."TotalMarkCutOff_Id_seq"'::regclass),
    "QuotaId" integer NOT NULL,
    "TotalCutOffMark" numeric NOT NULL,
    "AcademicYearId" integer NOT NULL,
    CONSTRAINT "TotalMarkCutOff_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "AcademicYear" FOREIGN KEY ("AcademicYearId")
        REFERENCES "Ref"."AcademicYear" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Quota" FOREIGN KEY ("QuotaId")
        REFERENCES "Ref"."Quota" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."CutOffMark"
    OWNER to postgres;

-- Table: "Ref"."SubjectCutOffMark"

-- DROP TABLE "Ref"."SubjectCutOffMark";

CREATE TABLE "Ref"."SubjectCutOffMark"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."SubjectMarkCutOff_Id_seq"'::regclass),
    "CutOffMark" numeric NOT NULL,
    "SubjectId" integer NOT NULL,
    "CutOffMarkId" integer NOT NULL,
    CONSTRAINT "SubjectMarkCutOff_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "CutOffMark" FOREIGN KEY ("CutOffMarkId")
        REFERENCES "Ref"."CutOffMark" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Subject" FOREIGN KEY ("SubjectId")
        REFERENCES "Ref"."Subject" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."SubjectCutOffMark"
    OWNER to postgres;

-- Table: "Ref"."Application"

-- DROP TABLE "Ref"."Application";

CREATE TABLE "Ref"."Application"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."Application_Id_seq"'::regclass),
    "ApplicationNumber" character varying COLLATE pg_catalog."default" NOT NULL,
    "AcademicYearId" integer NOT NULL,
    "CollegeId" integer NOT NULL,
    "ReceiptNumber" character varying COLLATE pg_catalog."default",
    "FirstName" character varying COLLATE pg_catalog."default" NOT NULL,
    "MiddleName" character varying COLLATE pg_catalog."default",
    "LastName" character varying COLLATE pg_catalog."default" NOT NULL,
    "DateOfBirth" date NOT NULL,
    CONSTRAINT "Application_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "ApplicationNumber" UNIQUE ("ApplicationNumber")
,
    CONSTRAINT "AcademicYear" FOREIGN KEY ("AcademicYearId")
        REFERENCES "Ref"."AcademicYear" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "College" FOREIGN KEY ("CollegeId")
        REFERENCES "Ref"."College" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."Application"
    OWNER to postgres;

-- Table: "Ref"."Applicant"

-- DROP TABLE "Ref"."Applicant";

CREATE TABLE "Ref"."Applicant"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."Applicant_Id_seq"'::regclass),
    "ApplicationId" integer NOT NULL,
    "FirstName" character varying COLLATE pg_catalog."default" NOT NULL,
    "MiddleName" character varying COLLATE pg_catalog."default",
    "LastName" character varying COLLATE pg_catalog."default" NOT NULL,
    "DateofBirth" date NOT NULL,
    "AddressId" integer,
    "SecurityQuestionId1" integer,
    "SecurityQuestionId2" integer,
    "SecurityQuestionId3" integer,
    "SecurityAnswer1" character varying COLLATE pg_catalog."default",
    "SecurityAnswer2" character varying COLLATE pg_catalog."default",
    "SecurityAnswer3" character varying COLLATE pg_catalog."default",
    "PreviousCourseTotalMark" numeric,
    "PreviousCourseOther" character varying COLLATE pg_catalog."default",
    "PreviousCourseId" integer,
    "PreviousCollegeAddress" character varying COLLATE pg_catalog."default",    
    "PreviousCourseTotalMarkPercentage" numeric,
    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Address" FOREIGN KEY ("AddressId")
        REFERENCES "Ref"."Address" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Application" FOREIGN KEY ("ApplicationId")
        REFERENCES "Ref"."Application" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "SecurityQuestion1" FOREIGN KEY ("SecurityQuestionId1")
        REFERENCES "Ref"."SecurityQuestionBank" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "SecurityQuestion2" FOREIGN KEY ("SecurityQuestionId2")
        REFERENCES "Ref"."SecurityQuestionBank" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "SecurityQuestion3" FOREIGN KEY ("SecurityQuestionId3")
        REFERENCES "Ref"."SecurityQuestionBank" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."Applicant"
    OWNER to postgres;

-- Table: "Ref"."ApplicantMark"

-- DROP TABLE "Ref"."ApplicantMark";

CREATE TABLE "Ref"."ApplicantMark"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."ApplicantMark_Id_seq"'::regclass),
    "ApplicantId" integer NOT NULL,
    "SubjectId" integer NOT NULL,
    "Mark" numeric NOT NULL,
    "MaximumMark" numeric,
    "Percentage" numeric,
    CONSTRAINT "ApplicantMark_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Applicant" FOREIGN KEY ("ApplicantId")
        REFERENCES "Ref"."Applicant" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Subject" FOREIGN KEY ("SubjectId")
        REFERENCES "Ref"."Subject" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."ApplicantMark"
    OWNER to postgres;

-- Table: "Ref"."ApplicantPreference"

-- DROP TABLE "Ref"."ApplicantPreference";

CREATE TABLE "Ref"."ApplicantPreference"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."ApplicantPreference_Id_seq"'::regclass),
    "ApplicantId" integer NOT NULL,
    "PreferenceRank" integer NOT NULL,
    "CourseId" integer NOT NULL,
    CONSTRAINT "ApplicantPreference_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Applicant" FOREIGN KEY ("ApplicantId")
        REFERENCES "Ref"."Applicant" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Course" FOREIGN KEY ("CourseId")
        REFERENCES "Ref"."Course" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."ApplicantPreference"
    OWNER to postgres;

-- Table: "Ref"."ApplicantReservation"

-- DROP TABLE "Ref"."ApplicantReservation";

CREATE TABLE "Ref"."ApplicantReservation"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."ApplicantReservation_Id_seq"'::regclass),
    "ApplicantId" integer NOT NULL,
    "QuotaId" integer NOT NULL,
    CONSTRAINT "ApplicantReservation_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Applicant" FOREIGN KEY ("ApplicantId")
        REFERENCES "Ref"."Applicant" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Quota" FOREIGN KEY ("QuotaId")
        REFERENCES "Ref"."Quota" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."ApplicantReservation"
    OWNER to postgres;


-- Table: "Ref"."RankList"

-- DROP TABLE "Ref"."RankList";

CREATE TABLE "Ref"."RankList"
(
    "Id" integer NOT NULL DEFAULT nextval('"Ref"."RankList_Id_seq"'::regclass),
    "ApplicantId" integer NOT NULL,
    "QuotaId" integer NOT NULL,
    "AcademicYearId" integer NOT NULL,
    CONSTRAINT "RankList_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "AcademicYear" FOREIGN KEY ("AcademicYearId")
        REFERENCES "Ref"."AcademicYear" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Applicant" FOREIGN KEY ("ApplicantId")
        REFERENCES "Ref"."Applicant" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Quota" FOREIGN KEY ("QuotaId")
        REFERENCES "Ref"."Quota" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "Ref"."RankList"
    OWNER to postgres;

 