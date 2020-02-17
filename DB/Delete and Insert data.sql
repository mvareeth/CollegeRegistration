DELETE FROM "Ref"."RankList";
DELETE FROM "Ref"."ApplicantReservation";
DELETE FROM "Ref"."ApplicantPreference";
DELETE FROM "Ref"."ApplicantMark";
DELETE FROM "Ref"."Applicant";

DELETE FROM "Ref"."Application";
DELETE FROM "Ref"."CutOffMark";
DELETE FROM "Ref"."SecurityQuestionBank";
DELETE FROM "Ref"."Quota";
DELETE FROM "Ref"."Staff";

DELETE FROM "Ref"."Course";
DELETE FROM "Ref"."Branch";
/*DELETE FROM "Ref"."Department";*/
DELETE FROM "Ref"."Subject";
DELETE FROM "Ref"."AcademicYear";
DELETE FROM "Ref"."College";
DELETE FROM "Ref"."Address";
DELETE FROM "Ref"."Country";
DELETE FROM "Ref"."State";
DELETE FROM "Ref"."City";



ALTER SEQUENCE "Ref"."TotalMarkCutOff_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."Subject_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."SubjectMarkCutOff_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."State_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."Staff_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."SecurityQuestionBank_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."RankList_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."Quota_Id_seq" RESTART WITH 1;
/*ALTER SEQUENCE "Ref"."Department_Id_seq" RESTART WITH 1;*/
ALTER SEQUENCE "Ref"."Country_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."College_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."City_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."Course_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."Branch_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."BranchSubject_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."BranchStaff_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."Application_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."Applicant_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."ApplicantReservation_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."ApplicantPreference_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."ApplicantMark_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."Address_Id_seq" RESTART WITH 1;
ALTER SEQUENCE "Ref"."AcademicYear_Id_seq" RESTART WITH 1;



INSERT INTO "Ref"."Country"(
	"Name")
	VALUES ('India');
INSERT INTO "Ref"."Country"(
	"Name")
	VALUES ('US');

INSERT INTO "Ref"."State"(
	"Name")
	VALUES ('Kerala');
INSERT INTO "Ref"."State"(
	"Name")
	VALUES ('Karnataka');

INSERT INTO "Ref"."City"(
	"Name")
	VALUES ('Aluva');
INSERT INTO "Ref"."City"(
	"Name")
	VALUES ('Cochi');	
INSERT INTO "Ref"."City"(
	"Name")
	VALUES ('Bangalore');	

INSERT INTO "Ref"."Address"(
	"Address1", "Address2", "CityId", "StateId", "CountryId", "POBOX")
	VALUES ('Aluva', null, 1, 1, 1, '683102');

INSERT INTO "Ref"."College"(
	"Name", "AddressId", "University", "PhoneNumbers")
	VALUES ('Union Christian College', null, 'Mahatma Gandhi University', null);


INSERT INTO "Ref"."AcademicYear"(
	"Year", "StartDate", "CompletionDate", "TotalOccupancy", "CollegeId", "Active", "LastDateofApplication", "IsRankListPubllshed")
	VALUES ('2020', '2019-08-01', '2020-05-31', 2900, 1, True, '2019-10-20', False);
/*
INSERT INTO "Ref"."Department"(
	"Name", "CollegeId")
	VALUES ('Language', 1);

INSERT INTO "Ref"."Department"(
	"Name", "CollegeId")
	VALUES ('Science', 1);

INSERT INTO "Ref"."Department"(
	"Name", "CollegeId")
	VALUES ('Social Science', 1);
*/

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('English', null, '1995-01-01', 150, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('Malayalam', null, '1995-01-01', 120, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('Hindi', null, '1995-01-01', 100, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('Physics', null, '1995-01-01', 150, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('Chemistry', null, '1995-01-01', 300, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('Mathematics', null, '1995-01-01', 150, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('Botony', null, '1995-01-01', 80, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('Zoology', null, '1995-01-01', 80, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('Psychology', null, '1995-01-01', 70, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('Computer Science', null, '1995-01-01', 80, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('History', null, '1995-01-01', 150, 1);

INSERT INTO "Ref"."Branch"(
	"Name", "MajorSubjectId", "CommenceDate", "TotalOccupancy", "CollegeId")
	VALUES ('Economics', null, '1995-01-01', 150, 1);


INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('English');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('Malayalam');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('Hindi');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('Physics');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('Chemistry');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('Mathematics');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('Botony');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('Zoology');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('Psychology');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('Computer Science');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('History');
INSERT INTO "Ref"."Subject"(
	"Name")
	VALUES ('Economics');

INSERT INTO "Ref"."Course"(
	"Name", "MajorSubjectId", "TotalOccupancy", "BranchId", "Duration")
	VALUES ('M.Sc Chemistry', null, 150, 5, 24);
INSERT INTO "Ref"."Course"(
	"Name", "MajorSubjectId", "TotalOccupancy", "BranchId", "Duration")
	VALUES ('B.Sc Chemistry', null, 150, 5, 36);

INSERT INTO "Ref"."Course"(
	"Name", "MajorSubjectId", "TotalOccupancy", "BranchId", "Duration")
	VALUES ('M.Sc Physics', null, 150, 4, 24);
INSERT INTO "Ref"."Course"(
	"Name", "MajorSubjectId", "TotalOccupancy", "BranchId", "Duration")
	VALUES ('B.Sc Physics', null, 40, 4, 36);
INSERT INTO "Ref"."Course"(
	"Name", "MajorSubjectId", "TotalOccupancy", "BranchId", "Duration")
	VALUES ('Ph.D Physics', null, 20, 4, null);

INSERT INTO "Ref"."Course"(
	"Name", "MajorSubjectId", "TotalOccupancy", "BranchId", "Duration")
	VALUES ('M.Sc. Mathematics', null, 150, 6, 24);
INSERT INTO "Ref"."Course"(
	"Name", "MajorSubjectId", "TotalOccupancy", "BranchId", "Duration")
	VALUES ('B.Sc Mathematics', null, 150, 6, 36);
INSERT INTO "Ref"."Course"(
	"Name", "MajorSubjectId", "TotalOccupancy", "BranchId", "Duration")
	VALUES ('Ph.D Mathematics', null, 20, 6, null);
INSERT INTO "Ref"."Course"(
	"Name", "MajorSubjectId", "TotalOccupancy", "BranchId", "Duration")
	VALUES ('10+2', null, 0, null, null);	

UPDATE "Ref"."Course" set "Active" = True;


INSERT INTO "Ref"."Quota"(
	"Name", "IsReservation", "ReservationProofs")
	VALUES ('General/Merit', False, null);
INSERT INTO "Ref"."Quota"(
	"Name", "IsReservation", "ReservationProofs", "ReservationPercentage")
	VALUES ('Scheduled Caste', True, 'Caste Certificate', 10);
INSERT INTO "Ref"."Quota"(
	"Name", "IsReservation", "ReservationProofs", "ReservationPercentage")
	VALUES ('Scheduled Tribe', True, 'Caste Certificate', 8);
INSERT INTO "Ref"."Quota"(
	"Name", "IsReservation", "ReservationProofs", "ReservationPercentage")
	VALUES ('Other Eligible Communities', True, 'Caste Certificate', 5);
INSERT INTO "Ref"."Quota"(
	"Name", "IsReservation", "ReservationProofs", "ReservationPercentage")
	VALUES ('Other Backward Class', True, 'Caste Certificate', 3);
INSERT INTO "Ref"."Quota"(
	"Name", "IsReservation", "ReservationProofs", "ReservationPercentage")
	VALUES ('Physically Disabled', True, 'BLIND/DEAF/ORTHOPEDIC', 3);
INSERT INTO "Ref"."Quota"(
	"Name", "IsReservation", "ReservationProofs", "ReservationPercentage")
	VALUES ('EX-SERVICEMEN', True, 'EX-SERVICEMEN CERTIFICATE (FROM JILLA SAINIK OFFICER)', 3);
INSERT INTO "Ref"."Quota"(
	"Name", "IsReservation", "ReservationProofs", "ReservationPercentage")
	VALUES ('Sports', True, 'Certificate of Achievements', 3);	
INSERT INTO "Ref"."Quota"(
	"Name", "IsReservation", "ReservationProofs", "ReservationPercentage")
	VALUES ('Management', True, 'Check the fee detail and speak to management about the capital fee', 3);	


INSERT INTO "Ref"."CutOffMark"("AcademicYearId", "QuotaId", "TotalCutOffMarkPercentage")
	VALUES (1, 1 , 75);
INSERT INTO "Ref"."CutOffMark"("AcademicYearId", "QuotaId", "TotalCutOffMarkPercentage")
	VALUES (1, 2 , 60);	
INSERT INTO "Ref"."CutOffMark"("AcademicYearId", "QuotaId", "TotalCutOffMarkPercentage")
	VALUES (1, 3 , 65);
INSERT INTO "Ref"."CutOffMark"("AcademicYearId", "QuotaId", "TotalCutOffMarkPercentage")
	VALUES (1, 4 , 70);
INSERT INTO "Ref"."CutOffMark"("AcademicYearId", "QuotaId", "TotalCutOffMarkPercentage")
	VALUES (1, 5 , 70);
INSERT INTO "Ref"."CutOffMark"("AcademicYearId", "QuotaId", "TotalCutOffMarkPercentage")
	VALUES (1, 6 , 70);
INSERT INTO "Ref"."CutOffMark"("AcademicYearId", "QuotaId", "TotalCutOffMarkPercentage")
	VALUES (1, 7 , 70);
INSERT INTO "Ref"."CutOffMark"("AcademicYearId", "QuotaId", "TotalCutOffMarkPercentage")
	VALUES (1, 8 , 70);
INSERT INTO "Ref"."CutOffMark"("AcademicYearId", "QuotaId", "TotalCutOffMarkPercentage")
	VALUES (1, 9 , 60);			

INSERT INTO "Ref"."Staff"(
	"FirstName", "LastName", "DateOfBirth", "UserName", "Password", "AddressId", "CollegeId")
	VALUES ('Jackson', 'Paul', '1976-05-25', 'pjackson', 'jack100', null, 1);
INSERT INTO "Ref"."Staff"(
	"FirstName", "LastName", "DateOfBirth", "UserName", "Password", "AddressId", "CollegeId")
	VALUES ('Alvin', 'Joseph', '1980-10-12', 'jalvin', 'alvi100', null, 1);
INSERT INTO "Ref"."Staff"(
	"FirstName", "LastName", "DateOfBirth", "UserName", "Password", "AddressId", "CollegeId")
	VALUES ('Treesa', 'Jacob', '1980-05-14', 'jtreesa', 'tres100', null, 1);
INSERT INTO "Ref"."Staff"(
	"FirstName", "LastName", "DateOfBirth", "UserName", "Password", "AddressId", "CollegeId")
	VALUES ('Thomas', 'Varghese', '1977-08-10', 'vthomas', 'thom100', null, 1);
INSERT INTO "Ref"."Staff"(
	"FirstName", "LastName", "DateOfBirth", "UserName", "Password", "AddressId", "CollegeId")
	VALUES ('Nelson', 'Raphel', '1979-04-21', 'rnelson', 'nels100', null, 1);
INSERT INTO "Ref"."Staff"(
	"FirstName", "LastName", "DateOfBirth", "UserName", "Password", "AddressId", "CollegeId")
	VALUES ('Mariya', 'Roy', '1981-07-24', 'rmariya', 'mari100', null, 1);

INSERT INTO "Ref"."Staff"(
	"FirstName", "LastName", "DateOfBirth", "UserName", "Password", "AddressId", "CollegeId", "IsAdmin")
	VALUES ('Martin', 'Mani', '1976-06-20', 'mmartin', 'mart100', null, 1, True);


INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('What was your childhood nickname?');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('In what city did you meet your spouse other?');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('What is the name of your favorite childhood friend?');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('What street did you live on in third grade?');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('What is your oldest sibling’s birthday month and year? (e.g., January 1900)');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('What is the middle name of your youngest child?');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('What school did you attend for sixth grade?');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('What was your childhood phone number including area code? (e.g., 000-000-0000)');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('What was the name of your first stuffed animal?');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('In what city or town did your mother and father meet?');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('In what city does your nearest sibling live?');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('In what city or town was your first job?');
INSERT INTO "Ref"."SecurityQuestionBank"("Question") VALUES ('What is the name of the place your wedding reception was held?');


INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900101', 1, 1, 'R201900101', 'Issac', '', 'Mathew', '1999-01-05');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900102', 1, 1, 'R201900102', 'Alias', '', 'John', '1999-05-15');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900103', 1, 1, 'R201900103', 'Thomas', '', 'Varghese', '1999-11-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900104', 1, 1, 'R201900104', 'Sabu', '', 'Varghese', '1999-12-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900105', 1, 1, 'R201900105', 'Thomas', '', 'Babu', '1999-09-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900106', 1, 1, 'R201900106', 'Joby', '', 'Varghese', '1999-08-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900107', 1, 1, 'R201900107', 'July', '', 'Varghese', '1999-03-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900108', 1, 1, 'R201900108', 'Leela', '', 'Tom', '1999-05-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900109', 1, 1, 'R201900109', 'Sreejith', '', 'Babu', '1999-04-10');

 INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900110', 1, 1, 'R201900110', 'Binu', '', 'Thomas', '1999-03-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900111', 1, 1, 'R201900111', 'Issac', '', 'Samauel', '1999-01-03');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900112', 1, 1, 'R201900112', 'Alias', '', 'Joseph', '1999-05-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900113', 1, 1, 'R201900113', 'Thomas', '', 'Joseph', '1999-11-12');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900114', 1, 1, 'R201900114', 'Sabu', '', 'Zachria', '1999-12-04');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900115', 1, 1, 'R201900115', 'Thomas', '', 'Paul', '1999-09-08');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900116', 1, 1, 'R201900116', 'Joby', '', 'Thomas', '1999-08-04');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900117', 1, 1, 'R201900117', 'Juby', '', 'Cyril', '1999-03-02');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900118', 1, 1, 'R201900118', 'Reesa', '', 'Joshi', '1999-05-08');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900119', 1, 1, 'R201900119', 'Naveen', '', 'Bos', '1999-04-05');

 INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900120', 1, 1, 'R201900120', 'Jeevan', '', 'Thomas', '1999-03-05');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900121', 1, 1, 'R201900121', 'Ranu', '', 'Mathew', '2000-01-05');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900122', 1, 1, 'R201900122', 'Vikas', '', 'John', '2000-05-15');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900123', 1, 1, 'R201900123', 'William', '', 'Varghese', '2000-11-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900124', 1, 1, 'R201900124', 'Sheena', '', 'Varghese', '2000-12-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900125', 1, 1, 'R201900125', 'Litty', '', 'Babu', '2000-09-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900126', 1, 1, 'R201900126', 'Rosa', '', 'Varghese', '2000-08-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900127', 1, 1, 'R201900127', 'Peter', '', 'Varghese', '2000-03-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900128', 1, 1, 'R201900128', 'Lisa', '', 'Tom', '2000-05-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900129', 1, 1, 'R201900129', 'Sreeni', '', 'Babu', '2000-04-10');

 INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900130', 1, 1, 'R201900130', 'Bhama', '', 'Thomas', '2000-03-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900131', 1, 1, 'R201900131', 'Poulose', '', 'Samauel', '2000-01-03');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900132', 1, 1, 'R201900132', 'David', '', 'Joseph', '2000-05-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900133', 1, 1, 'R201900133', 'Reeja', '', 'Joseph', '2000-11-12');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900134', 1, 1, 'R201900134', 'Renu', '', 'Zachria', '2000-12-04');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900135', 1, 1, 'R201900135', 'Jeenu', '', 'Paul', '2000-09-08');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900136', 1, 1, 'R201900136', 'Reena', '', 'Thomas', '2000-08-04');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900137', 1, 1, 'R201900137', 'Jerin', '', 'Cyril', '2000-03-02');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900138', 1, 1, 'R201900138', 'Martin', '', 'Joshi', '2000-05-08');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900139', 1, 1, 'R201900139', 'Neerja', '', 'Bos', '2000-04-05');

 INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900140', 1, 1, 'R201900140', 'Bala', '', 'Thomas', '2000-03-05');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900141', 1, 1, 'R201900141', 'Linu', '', 'Samauel', '2000-05-03');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900142', 1, 1, 'R201900142', 'Droov', '', 'Joseph', '2000-04-10');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900143', 1, 1, 'R201900143', 'Treesa', '', 'Joseph', '2000-12-12');

INSERT INTO "Ref"."Application"(
 "ApplicationNumber", "AcademicYearId", "CollegeId", "ReceiptNumber", "FirstName", "MiddleName", "LastName", "DateOfBirth")
	VALUES ('A201900144', 1, 1, 'R201900144', 'Angel', '', 'Zachria', '2000-11-04');