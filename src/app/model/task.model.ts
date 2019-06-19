export class Task {

    public id: number;
    public title: string;
    public text: string;
    public dateTime: string;
    public checked: boolean;

    constructor(id: number, title: string, text: string, dateTime: string, checked: boolean) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.dateTime = dateTime;
        this.checked = checked;
    }
}
