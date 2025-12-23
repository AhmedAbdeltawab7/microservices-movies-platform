"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let GatewayService = class GatewayService {
    http;
    baseUrl = 'http://localhost:3001';
    constructor(http) {
        this.http = http;
    }
    async forwardToAuth(endpoint, body) {
        const url = `${this.baseUrl}/auth/${endpoint}`;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.http.post(url, body));
        return data;
    }
    async forwardToMovies(endpoint, method, body, authHeader) {
        const url = `${this.baseUrl}/${endpoint}`;
        const headers = authHeader ? { Authorization: authHeader } : {};
        switch (method) {
            case 'POST': {
                const { data } = await (0, rxjs_1.firstValueFrom)(this.http.post(url, body, { headers }));
                return data;
            }
            case 'GET': {
                const { data } = await (0, rxjs_1.firstValueFrom)(this.http.get(url, { headers }));
                return data;
            }
            case 'PATCH': {
                const { data } = await (0, rxjs_1.firstValueFrom)(this.http.patch(url, body, { headers }));
                return data;
            }
            case 'DELETE': {
                const { data } = await (0, rxjs_1.firstValueFrom)(this.http.delete(url, { headers }));
                return data;
            }
        }
    }
};
exports.GatewayService = GatewayService;
exports.GatewayService = GatewayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], GatewayService);
//# sourceMappingURL=gateway.service.js.map