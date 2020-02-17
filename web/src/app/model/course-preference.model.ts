export class CoursePreference {
    public CoursePreferenceId: number;
    public ApplicantId: number;
    public CourseId: number;
    public PreferenceRank: number;

    public constructor(applicantId, courseId, preferenceRank, coursePreferenceId) {
        this.CoursePreferenceId = coursePreferenceId;
        this.PreferenceRank = preferenceRank;
        this.CourseId = courseId;
        this.ApplicantId = applicantId;
    }
}
