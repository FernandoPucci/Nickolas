export class Message {


    private _isNickolas: boolean;
    public get IsNickolas(): boolean {
        return this._isNickolas;
    }
    public set IsNickolas(v: boolean) {
        this._isNickolas = v;
    }


    private _text: string;
    public get Text(): string {
        return this._text;
    }
    public set Text(v: string) {
        this._text = v;
    }

    private _time: any;
    public get Time(): any {
        return Date.now();
    }


}
