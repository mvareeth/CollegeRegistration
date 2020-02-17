export class Registration {
    Id: number;
    ApplicationNumber: string;
    ApplicationId: number;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    DateofBirth: Date;
    AddressId: number;
    Address1: string;
    Address2: string;
    CityId: number;
    StateId: number;
    CountryId: number;
    POBOX: string;
    PreviousCollegeAddress: string;
    PreviousCourseId: number;
    PreviousCourseTotalMark: number;
    PreviousCourseTotalMarkPercentage: number;
    ApplicantReservationId: number;
    QuotaId: number;
    ReservationProofs: string;
    ReservationPercentage: number;
    IsRegistrationCompleted: boolean;
    RegistrationCompletionDate: Date;
    public constructor() { }
}