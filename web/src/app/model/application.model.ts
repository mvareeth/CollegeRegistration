export interface Application {
    Id: number;
    ApplicationNumber: string;
    AcademicYearId: number;
    CollegeId: number;
    ReceiptNumber: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    DateOfBirth: Date;
    LastDateofApplication: Date;
    IsRankListPubllshed: boolean;
    ApplicantId: number;
    SecurityQuestionId1: number;
    SecurityQuestionId2: number;
    SecurityQuestionId3: number;
    SecurityAnswer1: string;
    SecurityAnswer2: string;
    SecurityAnswer3: string;
}
