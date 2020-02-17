module.exports = {
  validateApplicationSql: function () {
    const applicantion = `SELECT a."Id", a."ApplicationNumber", a."AcademicYearId", a."CollegeId", a."ReceiptNumber", 
        a."FirstName",  a."MiddleName", a."LastName", a."DateOfBirth", ay."LastDateofApplication", ay."IsRankListPubllshed",
        ap."Id" as "ApplicantId",
        ap."SecurityQuestionId1", ap."SecurityQuestionId2", ap."SecurityQuestionId3", 
        ap."SecurityAnswer1", ap."SecurityAnswer2", ap."SecurityAnswer3"
      FROM "Ref"."Application" a
      JOIN "Ref"."AcademicYear" ay ON ay."Id" = a."AcademicYearId" AND ay."Active" = True
      LEFT JOIN "Ref"."Applicant" ap ON ap."ApplicationId" = a."Id"
      WHERE 
      a."CollegeId" = $1
      AND a."ApplicationNumber" = $2
      AND a."FirstName" = $3
      AND a."MiddleName" = $4
      AND a."LastName" = $5
      AND a."DateOfBirth" = $6
    `;
    return applicantion;
  },

  validateApplicantSql: function () {
    const applicant = `SELECT at."Id", at."ApplicationId",  
      at."FirstName", at."MiddleName", at."LastName", at."DateofBirth", at."SecurityQuestionId1", 
      at."SecurityQuestionId2", at."SecurityQuestionId3", at."SecurityAnswer1", at."SecurityAnswer2", at."SecurityAnswer3"
    FROM "Ref"."Applicant" at
    JOIN "Ref"."Application" ap ON at."ApplicationId" = ap. "Id"
    WHERE 
       at."ApplicationId" = $1
      AND at."SecurityQuestionId1" = $2
      AND at."SecurityAnswer1" = $3
      AND at."SecurityQuestionId2" = $4
      AND at."SecurityAnswer2" = $5
      AND at."SecurityQuestionId3" = $6
      AND at."SecurityAnswer3" = $7
    `;
    return applicant;
  },

  insertApplicantBasicSql: function () {
    const insertApplicant = `INSERT INTO "Ref"."Applicant"(
      "ApplicationId", "FirstName", "MiddleName", "LastName", "DateofBirth", 
      "SecurityQuestionId1", "SecurityAnswer1", "SecurityQuestionId2", "SecurityAnswer2", "SecurityQuestionId3", "SecurityAnswer3"
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING "Id"
    `;
    return insertApplicant;
  },

  updateApplicantSql: function () {
    const updateApplicant = `UPDATE "Ref"."Applicant"
      SET 
      "FirstName"=$2, "MiddleName"=$3, "LastName"=$4, "DateofBirth"=$5, "AddressId"=$6, 
      "TotalMark"=$7, "Percentage"=$8,  "PreviousCourse"=$9, "PreviousCollegeAddress"=$10
      WHERE "Id"=$1;
    `;
    return updateApplicant;
  },


  registrationInfoSql: function () {
    const registration = `SELECT 
      ap."Id",   at."ApplicationNumber",
      ap."ApplicationId",  ap."FirstName",  ap."MiddleName",  ap."LastName", ap."DateofBirth",  ap."AddressId",
      ad."Address1", ad."Address2", ad."CityId", ad."StateId", ad."CountryId",  ad."POBOX",
      ap."PreviousCollegeAddress",  ap."PreviousCourseId", ap."PreviousCourseTotalMark", ap."PreviousCourseTotalMarkPercentage",
      ar."Id" as "ApplicantReservationId",
      ar."QuotaId", qt."ReservationProofs", qt."ReservationPercentage",
      ap."IsRegistrationCompleted", ap."RegistrationCompletionDate"
    FROM "Ref"."Applicant" ap
    JOIN "Ref"."Application" at ON at."Id" = ap."ApplicationId"
    LEFT JOIN "Ref"."Address" ad ON ad."Id" = ap."AddressId"
    LEFT JOIN "Ref"."ApplicantReservation" ar on ar."ApplicantId" = ap."Id"
    LEFT JOIN "Ref"."Quota" qt ON ar."QuotaId" = qt."Id"
    WHERE ap."Id" = $1
    `;
    return registration;
  },

  updateRegistrationSql: function () {
    const updateRegistration = `UPDATE "Ref"."Applicant"
      SET  "FirstName"=$2, "MiddleName"=$3, "LastName"=$4, "DateofBirth"=$5, "AddressId"=$6, "PreviousCollegeAddress"=$7
      , "PreviousCourseId"=$8
      , "PreviousCourseTotalMark"=$9
      , "PreviousCourseTotalMarkPercentage"=$10
      WHERE "Id"=$1;
    `;
    return updateRegistration;
  },


  insertAddressSql: function () {
    const insertAddress = `INSERT INTO "Ref"."Address"(
      "Address1", "Address2", "CityId", "StateId", "CountryId", "POBOX")
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING "Id"
    `;
    return insertAddress;
  },

  updateAddressSql: function () {
    const updateAddress = `UPDATE "Ref"."Address"
      SET  "Address1"=$2, "Address2"=$3, "CityId"=$4, "StateId"=$5, "CountryId"=$6, "POBOX"=$7
      WHERE "Id"=$1;
    `;
    return updateAddress;
  },

  insertApplicantQuotaSql: function () {
    const insertApplicantQuota = `INSERT INTO "Ref"."ApplicantReservation"(
      "ApplicantId", "QuotaId")
      VALUES ($1, $2) RETURNING "Id"
    `;
    return insertApplicantQuota;
  },

  updateApplicantQuotaSql: function () {
    const updateApplicantQuota = `UPDATE "Ref"."ApplicantReservation"
      SET  "QuotaId"=$2
      WHERE "Id"=$1;
    `;
    return updateApplicantQuota;
  },

  insertCoursePreferenceSql: function () {
    const insertCoursePreference = `INSERT INTO "Ref"."ApplicantPreference"(
      "ApplicantId", "CourseId", "PreferenceRank")
      VALUES ($1, $2, $3) RETURNING "Id"
    `;
    return insertCoursePreference;
  },

  deleteApplicantCoursePreferenceSql: function () {
    const insertCoursePreference = `DELETE FROM "Ref"."ApplicantPreference" 
      WHERE "ApplicantId"=$1;
    `;
    return insertCoursePreference;
  },

  staffLoginSql: function () {
    const staffLogin = `SELECT "Id", "FirstName", "MiddleName", "LastName",  "IsAdmin"
    FROM "Ref"."Staff"
    WHERE "UserName" = $1 AND "Password" = $2
     
    `;
    return staffLogin;
  },

  setRegistrationCompletionSql: function () {
    const setRegistrationCompletion = `UPDATE "Ref"."Applicant"
      SET  "IsRegistrationCompleted" = true, "RegistrationCompletionDate" = NOW()
      WHERE "Id"=$1;
    `;
    return setRegistrationCompletion;
  },

  processRankListSP: function () {
    const processRankList = `CALL "Ref"."ProcessRankList" ($1);
    `;
    return processRankList;
  },

  securityQuestionListSql: function () {
    const securityQuestion = `SELECT s."Id", s."Question" 
    FROM "Ref"."SecurityQuestionBank"  s
    Order by s."Id"
    `;
    return securityQuestion;
  },

  reservationQuotaListSql: function () {
    const securityQuestion = `SELECT s."Id", s."Name", s."IsReservation", s."ReservationProofs" , s."ReservationPercentage"
    FROM "Ref"."Quota"  s
    
    `;
    return securityQuestion;
  },

  subjectListSql: function () {
    const subjects = `SELECT s."Id", s."Name" "Subject"
    FROM "Ref"."Subject"  s
    Order by s."Name"
    `;
    return subjects;
  },

  courseListSql: function () {
    const courses = `SELECT bc."Id", bc."Name" "Course", bc."Active"
    FROM "Ref"."Course" bc
    Order by bc."Name"
    `;
    return courses;
  },

  collegeCourseListSql: function () {
    const courses = `SELECT Distinct bc."Id", bc."Name" "Course" , bc."Duration"
    FROM "Ref"."Course" bc
    INNER JOIN "Ref"."Branch" b  ON b."Id" = bc."BranchId"  
    INNER JOIN "Ref"."College" c   ON c."Id" = b."CollegeId"
    WHERE c."Id" = $1 AND bc."Active" = True
    Order by bc."Name"
    `;
    return courses;
  },

  applicantCourseListSql: function () {
    const courses = `SELECT Distinct bc."Id", bc."Name" "Course", ap."PreferenceRank", ap."Id" as "CoursePreferenceId"
    FROM "Ref"."Course" bc
    INNER JOIN "Ref"."ApplicantPreference" ap on ap."CourseId" = bc."Id"
    WHERE ap."ApplicantId" = $1
    ORDER BY ap."PreferenceRank"
    `;
    return courses;
  },

  applicantMarkListSql: function () {
    const courses = `SELECT s."Id", s."Name" "Subject", am."Percentage", am."MaximumMark"
    FROM "Ref"."Subject"  s
    INNER JOIN "Ref"."ApplicantMark" am on am."SubjectId" = s."Id"
    WHERE am."ApplicantId" = $1
    `;
    return courses;
  },

  cityListSql: function () {
    const city = `SELECT s."Id", s."Name" 
    FROM "Ref"."City"  s
     
    `;
    return city;
  },

  stateListSql: function () {
    const state = `SELECT s."Id", s."Name" 
    FROM "Ref"."State"  s
    
    `;
    return state;
  },

  countryListSql: function () {
    const country = `SELECT s."Id", s."Name" 
    FROM "Ref"."Country"  s
     
    `;
    return country;
  },

  academicYearListSql: function () {
    const country = `SELECT "Id", "Year", "StartDate", "CompletionDate", "TotalOccupancy", "CollegeId", "Active", "LastDateofApplication", "IsRankListPubllshed"
    FROM "Ref"."AcademicYear" ay
    WHERE ay."CollegeId" = $1
     
    `;
    return country;
  },

  ranklistOfApplicantSql: function () {
    const ranklist = `SELECT rl."Id" as "RankId",
    c."Name" as "CollegeName",
    ay."Year", 
    ap."FirstName", ap."MiddleName", ap."LastName",
    q."Name" as "Quota",
    rl."Status", rl."QuotaRankNumber"
    ,cr."Name" as "CourseName"
    ,row_number() OVER () as "SlNo" 
    FROM "Ref"."RankList" rl
    JOIN "Ref"."Quota" q on rl."QuotaId" = q."Id"
    JOIN "Ref"."Applicant" ap on ap."Id" = rl."ApplicantId"
    JOIN "Ref"."AcademicYear" ay on ay."Id" = rl."AcademicYearId"
    JOIN "Ref"."College" c on c."Id" = ay."CollegeId"
    JOIN "Ref"."Course" cr on cr."Id" = rl."CourseId"
    WHERE rl."ApplicantId" = $1
    `;
    return ranklist;
  },

  ranklistByCollegeSql: function () {
    const ranklist = `SELECT  rl."Id" as "RankId",
    c."Name" as "CollegeName",
    ay."Year", 
    ap."FirstName", ap."MiddleName", ap."LastName",
    q."Name" as "Quota",
    rl."Status", rl."QuotaRankNumber"
    ,cr."Name" as "CourseName"
    ,row_number() OVER () as "SlNo" 
    FROM "Ref"."RankList" rl
    JOIN "Ref"."Quota" q on rl."QuotaId" = q."Id"
    JOIN "Ref"."Applicant" ap on ap."Id" = rl."ApplicantId"
    JOIN "Ref"."AcademicYear" ay on ay."Id" = rl."AcademicYearId"
    JOIN "Ref"."College" c on c."Id" = ay."CollegeId"
    JOIN "Ref"."Course" cr on cr."Id" = rl."CourseId"
    WHERE ay."CollegeId" = $1 AND rl."AcademicYearId" = $2
    Order by rl."QuotaId", rl."RowNumber"
    `;
    return ranklist;
  },

  applicantlistByCollegeSql: function () {
    const applicantlist = `SELECT 
    ap."Id",   at."ApplicationNumber",
    ap."ApplicationId",  ap."FirstName",  ap."MiddleName",  ap."LastName",   
    ap."PreviousCourseTotalMark", ap."PreviousCourseTotalMarkPercentage",
    qt."Name" as "Quota",  qt."ReservationPercentage",
    cr."Name" as "CourseName",
    ap."IsRegistrationCompleted", ap."RegistrationCompletionDate"
  FROM "Ref"."Applicant" ap
  JOIN "Ref"."Application" at ON at."Id" = ap."ApplicationId"
  JOIN "Ref"."AcademicYear" ay on ay."Id" = at."AcademicYearId"
  JOIN "Ref"."ApplicantReservation" ar on ar."ApplicantId" = ap."Id"
  JOIN "Ref"."Quota" qt ON ar."QuotaId" = qt."Id"
  JOIN "Ref"."ApplicantPreference" apf ON apf."ApplicantId" = ap."Id" AND "PreferenceRank" = 1
  JOIN "Ref"."Course" cr on cr."Id" = apf."CourseId"
  WHERE ay."CollegeId" = $1 AND at."AcademicYearId" = $2
  ORDER BY at."Id"
    `;
    return applicantlist;
  },
}