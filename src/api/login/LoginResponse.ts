import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";
import { UserRole } from "@/classes/User/UserTypes";

interface LoginResponseData {
    access_token: string;
    user: {
        username: string;
        role: UserRole;
    };
}

export class LoginResponse implements LoginResponseData {
    access_token: string;
    user: {
        username: string;
        role: UserRole;
    };

    public constructor(data: LoginResponseData) {
        this.access_token = data.access_token;
        this.user = data.user;
        this.check();
    }

    public getAccessToken(): string {
        return this.access_token;
    }

    private check() {
        if (!this.access_token) throw new CannotProcessEntityError("LoginResponse", "access token is missing");
        if (this.access_token.length != 36) throw new CannotProcessEntityError("LoginResponse", "invalid access token");

        if (!this.user) throw new CannotProcessEntityError("LoginResponse", "user is missing");
        if (!this.user.username) throw new CannotProcessEntityError("LoginResponse", "username is missing");
        if (!this.user.role) throw new CannotProcessEntityError("LoginResponse", "role is missing");
    }
}
