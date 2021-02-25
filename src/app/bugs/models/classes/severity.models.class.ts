export class SeverityModel {
    private Severity;
    private Status;
    private OnTrack;
    private CreatedDate;
    private PRBID;
    private StoryID;
    private Description;

    constructor(severity, status, onTrack, createdDate, prbID, storyID, description) {
        this.Severity = severity;
        this.Status = status;
        this.OnTrack = onTrack;
        this.CreatedDate = createdDate;
        this.PRBID = prbID;
        this.StoryID = storyID;
        this.Description = description;
    }
}