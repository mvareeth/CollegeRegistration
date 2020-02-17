const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://127.0.0.1:5432/postgres';

const {
  Pool,
  Client
} = require('pg');
// const pool = new Pool({
//   user: process.env.DATABASE_USER,
//   host: process.env.DATABASE_HOST,
//   database: process.env.DATABASE,
//   password: process.env.DATABASE_PASSWORD,
//   port: process.env.DATABASE_PORT
// })

const config = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'Registration',
  password: 'passw0rd',
  port: 5432,
  max: 10, // max number of connection can be open to database
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);
const registrationModel = require('../models/model.registration'); //not using now
const registrationSql = require('./sql.registration');

class RegistrationService {

  static validateApplication(collegeId, applicationNumber, firstName, middleName, lastName, dateofBirth) {
    return pool
      .query(registrationSql.validateApplicationSql(), [collegeId, applicationNumber, firstName, middleName, lastName, dateofBirth])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static validateApplicant(applicationId,
    securityQuestionId1, securityQstAnswer1, securityQuestionId2, securityQstAnswer2, securityQuestionId3, securityQstAnswer3) {
    return pool
      .query(registrationSql.validateApplicantSql(), [applicationId,
        securityQuestionId1, securityQstAnswer1, securityQuestionId2, securityQstAnswer2, securityQuestionId3, securityQstAnswer3
      ])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static insertApplicantBasic(applicationId, firstName, middleName, lastName, dateofBirth,
    securityQuestionId1, securityQstAnswer1, securityQuestionId2, securityQstAnswer2, securityQuestionId3, securityQstAnswer3) {

    return pool
      .query(registrationSql.insertApplicantBasicSql(), [applicationId, firstName, middleName, lastName, dateofBirth,
        securityQuestionId1, securityQstAnswer1, securityQuestionId2, securityQstAnswer2, securityQuestionId3, securityQstAnswer3
      ])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static updateRegistration(applicantId, firstName, middleName, lastName, dateofBirth,
    addressId, previousCollegeAddress, previousCourseId,
    previousCourseTotalMark, previousCourseTotalMarkPercentage) {

    return pool
      .query(registrationSql.updateRegistrationSql(), [applicantId, firstName, middleName, lastName, dateofBirth,
        addressId, previousCollegeAddress, previousCourseId,
        previousCourseTotalMark, previousCourseTotalMarkPercentage
      ])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static insertAddress(address1, address2, cityId, stateId, countryId, pobox) {
    return pool
      .query(registrationSql.insertAddressSql(), [address1, address2, cityId, stateId, countryId, pobox])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static updateAddress(id, address1, address2, cityId, stateId, countryId, pobox) {
    return pool
      .query(registrationSql.updateAddressSql(), [id, address1, address2, cityId, stateId, countryId, pobox])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static insertApplicantQuota(applicantId, quotaId) {
    return pool
      .query(registrationSql.insertApplicantQuotaSql(), [applicantId, quotaId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static updateApplicantQuota(applicantReservationId, quotaId) {
    return pool
      .query(registrationSql.updateApplicantQuotaSql(), [applicantReservationId, quotaId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static insertCoursePreference(applicantId, courseId, preferenceRank) {
    return pool
      .query(registrationSql.insertCoursePreferenceSql(), [applicantId, courseId, preferenceRank])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static deleteApplicantCoursePreference(applicantId) {
    return pool
      .query(registrationSql.deleteApplicantCoursePreferenceSql(), [applicantId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static staffLogin(userName, password) {
    return pool
      .query(registrationSql.staffLoginSql(), [userName, password])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getRegistrationInfo(applicantId) {
    return pool
      .query(registrationSql.registrationInfoSql(), [applicantId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static setRegistrationCompletion(applicantId) {
    return pool
      .query(registrationSql.setRegistrationCompletionSql(), [applicantId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static processRankList(academicYearId) {
    return pool
      .query(registrationSql.processRankListSP(), [academicYearId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getSecurityQuestions() {
    return pool
      .query(registrationSql.securityQuestionListSql())
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getReservationQuotas() {
    return pool
      .query(registrationSql.reservationQuotaListSql())
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getCourses() {
    return pool
      .query(registrationSql.courseListSql())
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getCoursesByCollege(collegeId) {
    return pool
      .query(registrationSql.collegeCourseListSql(), [collegeId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getCoursesByApplicant(applicantId) {
    return pool
      .query(registrationSql.applicantCourseListSql(), [applicantId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getMarksByApplicant(applicantId) {
    return pool
      .query(registrationSql.applicantMarkListSql(), [applicantId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getApplicantlistByCollege(collegeId, academicYearId) {
    return pool
      .query(registrationSql.applicantlistByCollegeSql(), [collegeId, academicYearId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getRanklist(collegeId, academicYearId) {
    return pool
      .query(registrationSql.ranklistByCollegeSql(), [collegeId, academicYearId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }
  static getRanklistOfApplicant(applicantId) {
    return pool
      .query(registrationSql.ranklistOfApplicantSql(), [applicantId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getAcademicYears(collegeId) {
    return pool
      .query(registrationSql.academicYearListSql(), [collegeId])
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getCity() {
    return pool
      .query(registrationSql.cityListSql())
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getState() {
    return pool
      .query(registrationSql.stateListSql())
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

  static getCountry() {
    return pool
      .query(registrationSql.countryListSql())
      .then(results => {
        return results.rows;
      })
      .catch(err => {
        throw err;
      })
  }

}

module.exports = RegistrationService;