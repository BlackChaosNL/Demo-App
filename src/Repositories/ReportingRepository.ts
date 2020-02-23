import API_DTO from '../DTOs/api.dto';
import axios, { AxiosInstance } from 'axios';

export default class ReportingRepository {
    private instance: AxiosInstance | undefined;

    constructor(t: API_DTO) {
        this.instance = axios.create({
            baseURL: t.getApiLink(),
            headers: {
                'Authorization': 'Bearer ' + t.getApiToken(),
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    Create(_t: any) {
        throw new Error("Method not implemented.");
    }

    Read(_t: API_DTO) {
        if (this.instance === undefined)
            throw new Error("[ReportingRepository]: Please initiate the constructor first before calling a subfunction.");
        this.instance.get("api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/", {
            params: { "start_date": _t.getFirstDate(), "end_date": _t.getFirstDate() }
        })
            .then((res) => {
                return res.data;
            });
    }

    Update(_t: any) {
        throw new Error("Method not implemented.");
    }

    Delete(_t: any) {
        throw new Error("Method not implemented.");
    }
}
