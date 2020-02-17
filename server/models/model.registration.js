class RegistrationModel
{
	constructor(applicationId, firstName, middleName, lastName, 
		dateofBirth, addressId, totalMark, previousCourse,
		previousCourseAddress, securityQuestionId1, securityQuestionId2,
		securityQuestionId3, securityAnswer1,securityAnswer2,securityAnswer3
		)
	{
		this.applicationId = applicationId; 
		this.firstName = firstName; 
		this.middleName = middleName; 
		this.lastName = lastName; 
		this.dateofBirth = dateofBirth; 
		this.addressId = addressId;
		this.totalMark = totalMark;
		this.previousCourse = previousCourse;
		this.previousCourseAddress = previousCourseAddress; 
		this.securityQuestionId1 = securityQuestionId1; 
		this.securityQuestionId2  = securityQuestionId2;
		this.securityQuestionId3  = securityQuestionId3; 
		this.securityAnswer1 = securityAnswer1; 
		this.securityAnswer2 = securityAnswer2; 
		this.securityAnswer3 = securityAnswer3;
	}
}

module.exports = RegistrationModel;