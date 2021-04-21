export class SeverityModel {
    private Severity:any;
    private Status:any;
    private OnTrack:any;
    private CreatedDate:any;
    private PRBID:any;
    private StoryID:any;
    private Description:any;
    private Chapter:any;
    private URL:any;   

    constructor(severity:any, status:any, onTrack:any, createdDate:any, prbID:any, storyID:any, description:any, chapter:any, url:any) {
        this.Severity = severity;
        this.Status = status;
        this.OnTrack = onTrack;
        this.CreatedDate = createdDate;
        this.PRBID = prbID;
        this.StoryID = storyID;
        this.Description = description;
        this.Chapter = chapter;
        this.URL = url;
    }
}