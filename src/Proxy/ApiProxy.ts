import type {AxiosResponse} from "axios";
import axios from "axios";

export interface VerifyApiResponse {
    valid: boolean;
    token: string;
}
interface VerifyApiRequest{
    code: string
}

export interface AuthApiSuccessResponse{
    username: string,
    quote: string,
    photo: string
}

export interface AuthApiFailResponse{
    message: string
}

export async function VerifyOtp(opt: string): Promise<VerifyApiResponse>{

    const request: VerifyApiRequest={
        code: opt
    };
    const response: AxiosResponse<VerifyApiResponse> = await axios.post<VerifyApiResponse>("http://localhost:5173/api/verify", request)

    return response.data;
}

export async function Auth(token: string): Promise<AuthApiSuccessResponse| AuthApiFailResponse>{

    const config = {
        headers: {
            Authorization: `${token}`,
            // Add other headers if needed
        },
    };
    const response:AxiosResponse<AuthApiSuccessResponse| AuthApiFailResponse> = await axios.get<AuthApiSuccessResponse| AuthApiFailResponse>("http://localhost:5173/api/auth", config);

    return response.data
}
