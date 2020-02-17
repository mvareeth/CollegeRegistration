
SELECT c."Name", a."Year", a."StartDate", a."CompletionDate", a."TotalOccupancy", a."LastDateofApplication",
b."Name" as Branch, bc."Name" Course , bc."Duration"
FROM "Ref"."College" c
INNER JOIN "Ref"."AcademicYear" a ON a."CollegeId" = c."Id"
INNER JOIN "Ref"."Branch" b  ON a."CollegeId" = b."CollegeId"
INNER JOIN "Ref"."Course" bc   ON b."Id" = bc."BranchId"  


SELECT c."Id", c."Name", a."Year", a."StartDate", a."CompletionDate", a."TotalOccupancy", a."LastDateofApplication",
b."Name" as Branch, s."FirstName" , s."LastName"
FROM "Ref"."College" c
INNER JOIN "Ref"."AcademicYear" a ON a."CollegeId" = c."Id"
INNER JOIN "Ref"."Branch" b  ON a."CollegeId" = b."CollegeId"
INNER JOIN "Ref"."BranchStaff" bs   ON b."Id" = bs."BranchId" and bs."AcademicYearId" = a."Id"
INNER JOIN "Ref"."Staff" s ON bs."StaffId" = s."Id"

	SELECT 
		  at."ApplicationNumber", ap."FirstName", ap."LastName", qt."Name" as Quata, ap."PreviousCourseTotalMarkPercentage", cm."TotalCutOffMarkPercentage"
		FROM "Ref"."Applicant" ap
		JOIN "Ref"."Application" at ON at."Id" = ap."ApplicationId"
		JOIN "Ref"."Course" c ON c."Name" = 'B.Sc Physics'
		JOIN "Ref"."ApplicantPreference" apr ON apr."ApplicantId" = ap."Id" AND apr."PreferenceRank" = 1 AND apr."CourseId" = 4
		JOIN "Ref"."CutOffMark" cm on cm."AcademicYearId" = at."AcademicYearId" --AND  ap."PreviousCourseTotalMarkPercentage" <  cm."TotalCutOffMarkPercentage"
		JOIN "Ref"."Quota" qt ON qt."Id" = cm."QuotaId" AND qt."IsReservation" = False		
		JOIN "Ref"."ApplicantReservation" ar on ar."ApplicantId" = ap."Id" and ar."QuotaId" = qt."Id"
		WHERE at."AcademicYearId" = 1 AND "IsRegistrationCompleted" = True  
		Order by 1;
		
/* Script insert records to Applicant table from Application*/
/* One set at a time. */
INSERT INTO "Ref"."Applicant" ("FirstName", "MiddleName", "LastName", "DateofBirth", "ApplicationId",
"AddressId", "PreviousCourseTotalMark", "PreviousCourseOther", "PreviousCollegeAddress",
	"SecurityQuestionId1", "SecurityQuestionId2", "SecurityQuestionId3", "SecurityAnswer1", "SecurityAnswer2", "SecurityAnswer3", 
	"PreviousCourseTotalMarkPercentage", "PreviousCourseId", "IsRegistrationCompleted", "RegistrationCompletionDate"
)
SELECT 
	an."FirstName", an."MiddleName", an."LastName", an."DateOfBirth",
	an."Id" "ApplicationId" ,  
	ap."AddressId", (ap."PreviousCourseTotalMark"  - ( 4 * an."Id" ) ) "PreviousCourseTotalMark" , ap."PreviousCourseOther", ap."PreviousCollegeAddress",
	ap."SecurityQuestionId1", ap."SecurityQuestionId2", ap."SecurityQuestionId3", ap."SecurityAnswer1", ap."SecurityAnswer2", ap."SecurityAnswer3", 
	ap."PreviousCourseTotalMarkPercentage", ap."PreviousCourseId", ap."IsRegistrationCompleted", ap."RegistrationCompletionDate"
FROM "Ref"."Application" an
LEFT JOIN LATERAL ( SELECT * FROM "Ref"."Applicant" WHERE "Id" = 1 ) ap ON true
WHERE an."Id" <> 1;

UPDATE "Ref"."Applicant" SET  "PreviousCourseTotalMarkPercentage" = 91  - ( 0.5 * "Id"), "PreviousCourseTotalMark" = (91  - ( 0.5 * "Id")) * 10 
WHERE "Id" <= 25 AND "Id" > 1;

UPDATE "Ref"."Applicant" SET  "PreviousCourseTotalMarkPercentage" = (91  - ( 0.5 * ("Id" - 20))), "PreviousCourseTotalMark" = (91  - ( 0.5 * ("Id" - 20))) * 10  
WHERE "Id" <= 43 AND "Id" > 40;

UPDATE "Ref"."Applicant" SET  "PreviousCourseTotalMarkPercentage" = (77  - ( 0.5 * ("Id" - 20))), "PreviousCourseTotalMark" = (77  - ( 0.5 * ("Id" - 20))) * 10  
WHERE "Id" <= 34 AND "Id" > 25;

UPDATE "Ref"."Applicant" SET  "PreviousCourseTotalMarkPercentage" = (67  - ( 0.5 * ("Id" - 30))), "PreviousCourseTotalMark" = (67  - ( 0.5 * ("Id" - 30))) * 10  
WHERE "Id" <= 38 AND "Id" > 34;

UPDATE "Ref"."Applicant" SET  "PreviousCourseTotalMarkPercentage" = (67  - ( 0.5 * ("Id" - 30))), "PreviousCourseTotalMark" = (67  - ( 0.5 * ("Id" - 30))) * 10  
WHERE "Id" <= 39 AND "Id" > 38;

UPDATE "Ref"."Applicant" SET  "PreviousCourseTotalMarkPercentage" = (67  - ( 0.5 * ("Id" - 30))), "PreviousCourseTotalMark" = (67  - ( 0.5 * ("Id" - 30))) * 10  
WHERE "Id" <= 40 AND "Id" > 39;


INSERT INTO "Ref"."ApplicantPreference" ("ApplicantId", "PreferenceRank", "CourseId")
SELECT ap."Id" "ApplicantId", "PreferenceRank", "CourseId" 
FROM "Ref"."Applicant" ap
LEFT JOIN LATERAL ( SELECT * FROM "Ref"."ApplicantPreference" WHERE "ApplicantId" = 1 ) apf ON true 
WHERE ap."Id" <> 1;


INSERT INTO "Ref"."ApplicantReservation" ("ApplicantId", "QuotaId")
SELECT ap."Id" "ApplicantId", "QuotaId"
FROM "Ref"."Applicant" ap
LEFT JOIN LATERAL ( SELECT * FROM "Ref"."ApplicantReservation" WHERE "ApplicantId" = 1 ) apf ON true 
WHERE ap."Id" <> 1;

UPDATE "Ref"."Applicant" SET "IsRegistrationCompleted" = False, "RegistrationCompletionDate" = null WHERE "Id" = 44;



UPDATE "Ref"."ApplicantReservation" SET "QuotaId" = 4 WHERE "ApplicantId" >= 26 AND "ApplicantId" < 28;
UPDATE "Ref"."ApplicantReservation" SET "QuotaId" = 5 WHERE "ApplicantId" >= 28 AND "ApplicantId" < 29;
UPDATE "Ref"."ApplicantReservation" SET "QuotaId" = 6 WHERE "ApplicantId" >= 29 AND "ApplicantId" < 30;
UPDATE "Ref"."ApplicantReservation" SET "QuotaId" = 7 WHERE "ApplicantId" >= 30 AND "ApplicantId" < 31;
UPDATE "Ref"."ApplicantReservation" SET "QuotaId" = 8 WHERE "ApplicantId" >= 31 AND "ApplicantId" < 32;

UPDATE "Ref"."ApplicantReservation" SET "QuotaId" = 3 WHERE "ApplicantId" >= 32 AND "ApplicantId" < 35;
UPDATE "Ref"."ApplicantReservation" SET "QuotaId" = 2 WHERE "ApplicantId" >= 35 AND "ApplicantId" < 39;
UPDATE "Ref"."ApplicantReservation" SET "QuotaId" = 9 WHERE "ApplicantId">= 39 AND "ApplicantId" < 40;

-- PROCEDURE: "Ref"."ProcessRankList"(integer)

-- DROP PROCEDURE "Ref"."ProcessRankList"(integer);

CREATE OR REPLACE PROCEDURE "Ref"."ProcessRankList"(
	integer)
LANGUAGE 'plpgsql'

AS $BODY$

 DECLARE 
	
    rec_course   RECORD;
    cur_course CURSOR(AcademicYearId INTEGER) 
       FOR 
	   	SELECT Distinct bc."Id" "CourseId", bc."Name" "CourseName" , bc."Duration", bc."TotalOccupancy"
		FROM "Ref"."Course" bc
		INNER JOIN "Ref"."Branch" b  ON b."Id" = bc."BranchId"  
		INNER JOIN "Ref"."College" c   ON c."Id" = b."CollegeId"
		INNER JOIN "Ref"."AcademicYear" ay ON ay."CollegeId" = c."Id"
		WHERE ay."Id" = AcademicYearId AND bc."Active" = True;
	   
BEGIN
 	   
	DELETE FROM "Ref"."RankList" WHERE "AcademicYearId" = $1;
	
	/*
	1. Create cursor for active course in this academic year
	2. 
	*/
	
	CREATE TEMPORARY TABLE temp_Quota
	(
	  "QuotaId" integer,
	  "CourseId" integer,
	  "MaxOccupancy" integer
	) ;	
	 -- Open the cursor
    OPEN cur_course($1);

	LOOP
		-- fetch row into the film
		FETCH cur_course INTO rec_course;
		-- exit when no more row to fetch
		EXIT WHEN NOT FOUND;
		-- Insert into temp_Quota table
		INSERT INTO temp_Quota ("QuotaId", "CourseId", "MaxOccupancy" )
		SELECT "Id" as "QuotaId", rec_course."CourseId", round(("ReservationPercentage"/100.0) * rec_course."TotalOccupancy")
		FROM "Ref"."Quota";
		
		-- Insert into Rank List table
		INSERT INTO "Ref"."RankList" ("ApplicantId", "QuotaId", "AcademicYearId", "Status", "CourseId", "QuotaRankNumber","RowNumber" )

		SELECT 
		  ap."ApplicationId",  
		  cm."QuotaId", at."AcademicYearId", 'Confirmed' "Status", apr."CourseId",
		  DENSE_RANK () OVER ( 
			ORDER BY ap."PreviousCourseTotalMark" DESC
		  ) "QuotaRankNumber" ,
		  row_number() OVER (PARTITION BY cm."QuotaId" ORDER BY cm."QuotaId") as "RowNumber" 
		  
		FROM "Ref"."Applicant" ap
		JOIN "Ref"."Application" at ON at."Id" = ap."ApplicationId"	
		JOIN "Ref"."ApplicantPreference" apr ON apr."ApplicantId" = ap."Id" AND apr."PreferenceRank" = 1
			AND apr."CourseId" = rec_course."CourseId"
			
		JOIN "Ref"."CutOffMark" cm on cm."AcademicYearId" = at."AcademicYearId"
			AND  ap."PreviousCourseTotalMarkPercentage" >=  cm."TotalCutOffMarkPercentage"
		JOIN "Ref"."Quota" qt ON qt."Id" = cm."QuotaId" AND qt."IsReservation" = False		
		WHERE at."AcademicYearId" = $1 AND "IsRegistrationCompleted" = True;
		
		
		INSERT INTO "Ref"."RankList" ("ApplicantId", "QuotaId", "AcademicYearId", "Status", "CourseId", "QuotaRankNumber","RowNumber" )
		
		SELECT 
		  ap."ApplicationId",  
		  ar."QuotaId", at."AcademicYearId", 'Confirmed' "Status", apr."CourseId",
		  DENSE_RANK () OVER ( 
			PARTITION BY ar."QuotaId"
			ORDER BY ap."PreviousCourseTotalMark" DESC, ar."QuotaId" ASC
		  ) "QuotaRankNumber" ,
		  row_number() OVER (PARTITION BY ar."QuotaId" ORDER BY ar."QuotaId") as "RowNumber" 
		  
		FROM "Ref"."Applicant" ap
		JOIN "Ref"."Application" at ON at."Id" = ap."ApplicationId"
		JOIN "Ref"."ApplicantReservation" ar on ar."ApplicantId" = ap."Id"
		JOIN "Ref"."Quota" qt ON ar."QuotaId" = qt."Id" AND qt."IsReservation" = True
		JOIN "Ref"."ApplicantPreference" apr ON apr."ApplicantId" = ap."Id" AND apr."PreferenceRank" = 1
			AND apr."CourseId" = rec_course."CourseId"
		JOIN "Ref"."CutOffMark" cm on cm."QuotaId" = qt."Id" AND cm."AcademicYearId" = at."AcademicYearId"
			AND  ap."PreviousCourseTotalMarkPercentage" >=  cm."TotalCutOffMarkPercentage"
		WHERE at."AcademicYearId" = $1 AND "IsRegistrationCompleted" = True
			AND ap."ApplicationId" NOT IN (SELECT "ApplicantId" FROM "Ref"."RankList")
		;
		
		UPDATE temp_Quota
		SET "MaxOccupancy" = rec_course."TotalOccupancy" - 
			(SELECT Sum("MaxOccupancy") FROM temp_Quota t WHERE t."CourseId" = temp_Quota."CourseId"  )
		WHERE "MaxOccupancy" IS NULL;
	
 	END LOOP;
    -- Close the cursor
    CLOSE cur_course;
   
		
	UPDATE "Ref"."RankList"  
	SET "Status" = 'Waiting list'
	FROM temp_Quota  t
	WHERE
		t."QuotaId" = "Ref"."RankList"."QuotaId" AND t."CourseId" = "Ref"."RankList"."CourseId" AND
		"Ref"."RankList"."RowNumber" > t."MaxOccupancy" ;		
		
	--PERFORM * FROM temp_Quota;
	
   	DROP TABLE temp_Quota;
	
    UPDATE "Ref"."AcademicYear"
    SET "IsRankListPubllshed" = True
    WHERE "Id" = $1;	
	
    COMMIT;
END;
$BODY$;
