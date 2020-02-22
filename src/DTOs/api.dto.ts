import IDTO from './IDTO';

export default class API_DTO implements IDTO {
    API_Link: string;
    API_Token: string;
    First_Date: string;
    Second_Date: string;
    checkDate = /((\d{4})-(\d{2})-(\d{2}))/g

    constructor() {
        this.API_Link = "";
        this.API_Token = "";
        this.First_Date = "";
        this.Second_Date = "";
    }

    setApiLink(_api_link: string | null): void {
        if (_api_link === null) _api_link = "";
        this.API_Link = _api_link;
        localStorage.setItem("APILink", this.API_Link);
    }

    setApiToken(_api_token: string | null): void {
        if (_api_token === null) _api_token = "";
        this.API_Token = _api_token;
        localStorage.setItem("AccessToken", this.API_Token);
    }

    setFirstDate(_first_date: string | null): void {
        if (!this.checkDate.test(_first_date || "")
            || _first_date === null) _first_date = "2017-05-01";
        // TODO: Check validity of range of first date.
        this.First_Date = _first_date;
        localStorage.setItem("FirstDate", this.First_Date);

    }

    setSecondDate(_second_date: string | null): void {
        if (!this.checkDate.test(_second_date || "")
            || _second_date === null) _second_date = "2017-06-15";
        // TODO: Check validity of range of second date.
        this.Second_Date = _second_date;
        localStorage.setItem("SecondDate", this.Second_Date);
    }

    getApiLink(): string {
        return this.API_Link;
    }

    getApiToken(): string {
        return this.API_Token;
    }

    getFirstDate(): string {
        return this.First_Date;
    }

    getSecondDate(): string {
        return this.Second_Date;
    }
}
