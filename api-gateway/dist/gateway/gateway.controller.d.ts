import { GatewayService } from './gateway.service';
export declare class GatewayController {
    private readonly gatewayService;
    constructor(gatewayService: GatewayService);
    signup(body: any): Promise<any>;
    login(body: any): Promise<any>;
    createMovie(body: any, auth: string): Promise<any>;
    getMovies(auth: string): Promise<any>;
    getMovie(id: string, auth: string): Promise<any>;
    updateMovie(id: string, body: any, auth: string): Promise<any>;
    deleteMovie(id: string, auth: string): Promise<any>;
}
