var express = require('express');
var router = express.Router();
var registrationService = require('../services/service.registration');

/* validate application */
router.post('/validateApplication', async (req, res, next) => {
	try {
		// console.log(req.body.applicationNumber);
		// console.log(req.body.dateofBirth);
		const validApplication = await registrationService.
		validateApplication(req.body.collegeId, req.body.applicationNumber, req.body.firstName,
			req.body.middleName, req.body.lastName, req.body.dateofBirth);

		return res.json({
			validateApplication: validApplication
		});
	} catch (err) {
		// unexpected error
		console.log('error in validateApplication' + err);
		return next(err);
	}
});

/* validate applicant */
router.post('/validateApplicant', async (req, res, next) => {
	try {
		// console.log(req.body.applicationId);
		// console.log(req.body.securityQstAnswer3);
		const validateApplicant = await registrationService.
		validateApplicant(req.body.applicationId,
			req.body.securityQuestionId1, req.body.securityQstAnswer1, req.body.securityQuestionId2,
			req.body.securityQstAnswer2, req.body.securityQuestionId3, req.body.securityQstAnswer3);

		return res.json({
			validateApplicant: validateApplicant
		});
	} catch (err) {
		// unexpected error
		console.log('error in validateApplicant ' + err);
		return next(err);
	}
});

/* insert basic details of applicant record */
router.post('/insertApplicantBasic', async (req, res, next) => {
	try {
		// console.log(req.body.applicationId);
		// console.log(req.body.securityQstAnswer3);
		const insertApplicantBasic = await registrationService.
		insertApplicantBasic(req.body.applicationId, req.body.firstName, req.body.middleName, req.body.lastName, req.body.dateofBirth,
			req.body.securityQuestionId1, req.body.securityQstAnswer1, req.body.securityQuestionId2,
			req.body.securityQstAnswer2, req.body.securityQuestionId3, req.body.securityQstAnswer3);

		return res.json({
			insertApplicantBasic: insertApplicantBasic
		});
	} catch (err) {
		// unexpected error
		console.log('error in insertApplicantBasic ' + err);
		return next(err);
	}
});

/* update registration record */
router.post('/updateRegistration', async (req, res, next) => {
	try {
		if (req.body.applicantReservationId && req.body.applicantReservationId > 0) {
			console.log('Update Reservation Quota');
			const updateApplicantQuota = await registrationService.
			updateApplicantQuota(req.body.applicantReservationId, req.body.quotaId);
		} else {
			console.log('Insert Reservation Quota');
			const insertApplicantQuota = await registrationService.
			insertApplicantQuota(req.body.applicantId, req.body.quotaId);
		}

		const updateRegistration = await registrationService.
		updateRegistration(req.body.applicantId, req.body.firstName, req.body.middleName, req.body.lastName, req.body.dateofBirth,
			req.body.addressId, req.body.previousCollegeAddress, req.body.previousCourseId,
			req.body.previousCourseTotalMark, req.body.previousCourseTotalMarkPercentage
		);

		return res.json({
			updateRegistration: updateRegistration
		});
	} catch (err) {
		// unexpected error
		console.log('error in updateRegistration ' + err);
		return next(err);
	}
});

/* insert address record */
router.post('/insertAddress', async (req, res, next) => {
	try {
		const insertAddress = await registrationService.
		insertAddress(req.body.address1, req.body.address2, req.body.cityId, req.body.stateId, req.body.countryId, req.body.pobox);

		return res.json({
			saveAddress: insertAddress
		});
	} catch (err) {
		// unexpected error
		console.log('error in insertAddress' + err);
		return next(err);
	}
});

/* update address record */
router.post('/updateAddress', async (req, res, next) => {
	try {
		const updateAddress = await registrationService.
		updateAddress(req.body.addressId, req.body.address1, req.body.address2, req.body.cityId, req.body.stateId, req.body.countryId, req.body.pobox);

		return res.json({
			saveAddress: updateAddress
		});
	} catch (err) {
		// unexpected error
		console.log('error in updateAddress' + err);
		return next(err);
	}
});

/* delete applicant course preference record */
router.post('/deleteApplicantCoursePreference', async (req, res, next) => {
	try {
		const deleteApplicantCoursePreference = await registrationService.
		deleteApplicantCoursePreference(req.body.applicantId);

		return res.json({
			deleteApplicantCoursePreference: deleteApplicantCoursePreference
		});
	} catch (err) {
		// unexpected error
		console.log('error in deleteApplicantCoursePreference' + err);
		return next(err);
	}
});

/* save course preference record */
router.post('/saveCoursePreference', async (req, res, next) => {
	try {
		//console.log('saveCoursePreference');
		// console.log(req.body[0]);
		// console.log(req.body[0].applicantId);
		// console.log(req.body[0].courseId);
		// console.log(req.body[0].preferenceRank);
		// console.log(req.body.length);

		for (i = 0; i < req.body.length; i++) {
			const saveCoursePreference = await registrationService.
			insertCoursePreference(req.body[i].applicantId, req.body[i].courseId, req.body[i].preferenceRank);
		}

		return res.json({
			saveCoursePreference: req.body.length
		});
	} catch (err) {
		// unexpected error
		console.log('error in saveCoursePreference' + err);
		return next(err);
	}
});

/* set applicant course as completed */
router.post('/setRegistrationCompletion', async (req, res, next) => {
	try {
		const setRegistrationCompletion = await registrationService.
		setRegistrationCompletion(req.body.applicantId);

		return res.json({
			setRegistrationCompletion: setRegistrationCompletion
		});
	} catch (err) {
		// unexpected error
		console.log('error in setRegistrationCompletion' + err);
		return next(err);
	}
});

/* valid staff credential */
router.post('/staffLogin', async (req, res, next) => {
	try {
		const staffLogin = await registrationService.
		staffLogin(req.body.userName, req.body.password);

		return res.json({
			staffLogin: staffLogin
		});
	} catch (err) {
		// unexpected error
		console.log('error in staffLogin' + err);
		return next(err);
	}
});


/* retrieves a registration information by applicantid */
router.get('/registrationInfo/:applicantId', async (req, res, next) => {
	try {
		const registrationInfo = await registrationService.getRegistrationInfo(req.params.applicantId);

		return res.json({
			registrationInfo: registrationInfo
		});
	} catch (err) {
		// unexpected error
		console.log('error in registrationInfo' + err);
		return next(err);
	}
});

/* retrieves a security question list */
router.get('/securityQuestions', async (req, res, next) => {
	try {
		const securityQuestionList = await registrationService.getSecurityQuestions();

		return res.json({
			securityQuestions: securityQuestionList
		});
	} catch (err) {
		// unexpected error
		console.log('error in securityQuestions' + err);
		return next(err);
	}
});

/* retrieves a reservation list */
router.get('/reservationQuotas', async (req, res, next) => {
	try {
		const reservationQuotList = await registrationService.getReservationQuotas();

		return res.json({
			reservationQuotas: reservationQuotList
		});
	} catch (err) {
		// unexpected error
		console.log('error in reservationQuotas' + err);
		return next(err);
	}
});

/* retrieves a course list */
router.get('/courses', async (req, res, next) => {
	try {
		const courseList = await registrationService.getCourses();

		return res.json({
			courses: courseList
		});
	} catch (err) {
		// unexpected error
		console.log('error in courses' + err);
		return next(err);
	}
});

/* retrieves a course list by College */
router.get('/coursesByCollege/:collegeId', async (req, res, next) => {
	try {
		const courseListByCollege = await registrationService.getCoursesByCollege(req.params.collegeId);

		return res.json({
			coursesByCollege: courseListByCollege
		});
	} catch (err) {
		// unexpected error
		console.log('error in coursesByCollege' + err);
		return next(err);
	}
});

/* retrieves a course list by Applicant */
router.get('/coursesByApplicant/:applicantId', async (req, res, next) => {
	try {
		const courseListByApplicant = await registrationService.getCoursesByApplicant(req.params.applicantId);

		return res.json({
			coursesByApplicant: courseListByApplicant
		});
	} catch (err) {
		// unexpected error
		console.log('error in coursesByApplicant' + err);
		return next(err);
	}
});

/* retrieves a mark list by Applicant */
router.get('/marksByApplicant/:applicantId', async (req, res, next) => {
	try {
		const marksListByApplicant = await registrationService.getMarksByApplicant(req.params.applicantId);

		return res.json({
			marksByApplicant: marksListByApplicant
		});
	} catch (err) {
		// unexpected error
		console.log('error in marksByApplicant' + err);
		return next(err);
	}
});

/* retrieves a rank list by academic year id */
router.get('/applicantlistByCollege/:collegeId/:academicYearId', async (req, res, next) => {
	try {
		const applicantList = await registrationService.getApplicantlistByCollege(req.params.collegeId, req.params.academicYearId);

		return res.json({
			applicantlistByCollege: applicantList
		});
	} catch (err) {
		// unexpected error
		console.log('error in applicantlistByCollege ' + err);
		return next(err);
	}
});


/* retrieves a rank list by academic year id */
router.get('/collegeRanklist/:collegeId/:academicYearId', async (req, res, next) => {
	try {
		const rankList = await registrationService.getRanklist(req.params.collegeId, req.params.academicYearId);

		return res.json({
			ranklistByCollege: rankList
		});
	} catch (err) {
		// unexpected error
		console.log('error in college rank list' + err);
		return next(err);
	}
});

/* retrieves a rank list of a applicant*/
router.get('/ranklistByApplicant/:applicantId', async (req, res, next) => {
	try {
		const rankList = await registrationService.getRanklistOfApplicant(req.params.applicantId);

		return res.json({
			ranklistByApplicant: rankList
		});
	} catch (err) {
		// unexpected error
		console.log('error in rank list by applicant' + err);
		return next(err);
	}
});

/* process Rank List */
router.post('/processRankList', async (req, res, next) => {
	try {
		const processRankList = await registrationService.
		processRankList(req.body.academicYearId);

		return res.json({
			processRankList: processRankList
		});
	} catch (err) {
		// unexpected error
		console.log('error in processRankList' + err);
		return next(err);
	}
});

/* retrieves a academic year list of a college*/
router.get('/academicYears/:collegeId', async (req, res, next) => {
	try {
		const academicYearList = await registrationService.getAcademicYears(req.params.collegeId);

		return res.json({
			academicYearList: academicYearList
		});
	} catch (err) {
		// unexpected error
		console.log('error in getAcademicYears by college' + err);
		return next(err);
	}
});

/* retrieves a city list */
router.get('/city', async (req, res, next) => {
	try {
		const cityList = await registrationService.getCity();

		return res.json({
			city: cityList
		});
	} catch (err) {
		// unexpected error
		console.log('error in city' + err);
		return next(err);
	}
});

/* retrieves a state list */
router.get('/state', async (req, res, next) => {
	try {
		const stateList = await registrationService.getState();

		return res.json({
			state: stateList
		});
	} catch (err) {
		// unexpected error
		console.log('error in state' + err);
		return next(err);
	}
});

/* retrieves a country list */
router.get('/country', async (req, res, next) => {
	try {
		const countryList = await registrationService.getCountry();

		return res.json({
			country: countryList
		});
	} catch (err) {
		// unexpected error
		console.log('error in country' + err);
		return next(err);
	}
});



module.exports = router;