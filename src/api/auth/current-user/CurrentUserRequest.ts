import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import { CurrentUserResponse, CurrentUserResponseBody } from "@/api/auth/current-user/CurrentUserResponse";

const ENDPOINT = "auth/current-user";
const METHOD = "GET";

export class CurrentUserRequest extends PrivilegedRequest {
    public constructor() {
        super(ENDPOINT, METHOD);
    }

    public async send(): Promise<CurrentUserResponse> {
        const response = (await super.send()) as CurrentUserResponseBody;
        return new CurrentUserResponse(response);
    }
}
