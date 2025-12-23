import { HttpService } from '@nestjs/axios';
export declare class GatewayService {
    private readonly http;
    private readonly baseUrl;
    constructor(http: HttpService);
    forwardToAuth(endpoint: string, body: any): Promise<any>;
    forwardToMovies(endpoint: string, method: 'GET' | 'POST' | 'PATCH' | 'DELETE', body?: any, authHeader?: string): Promise<any>;
}
