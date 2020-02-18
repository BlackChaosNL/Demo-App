export default class API_DTO {
    API_Link: string;
    API_Token: string;

    constructor() {
        this.API_Link = "";
        this.API_Token = "";
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

    getApiLink() {
        return this.API_Link;
    }

    getApiToken() {
        return this.API_Token;
    }
}
