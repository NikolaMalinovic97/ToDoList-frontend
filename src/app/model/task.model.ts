export class Task {

    private id: number;
    private title: string;
    private text: string;
    private dateTime: string;
    private checked: boolean;

    constructor(id: number, title: string, text: string, dateTime: string, checked: boolean) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.dateTime = dateTime;
        this.checked = checked;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getText(): string {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }

    getDateTime(): string {
        return this.dateTime;
    }

    setDateTime(dateTime: string) {
        this.dateTime = dateTime;
    }

    isChecked(): boolean {
        return this.checked;
    }

    changeChecked() {
        this.checked = !this.checked;
    }
}
