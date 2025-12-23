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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayController = void 0;
const common_1 = require("@nestjs/common");
const gateway_service_1 = require("./gateway.service");
let GatewayController = class GatewayController {
    gatewayService;
    constructor(gatewayService) {
        this.gatewayService = gatewayService;
    }
    signup(body) {
        return this.gatewayService.forwardToAuth('signup', body);
    }
    login(body) {
        return this.gatewayService.forwardToAuth('login', body);
    }
    createMovie(body, auth) {
        return this.gatewayService.forwardToMovies('movies', 'POST', body, auth);
    }
    getMovies(auth) {
        return this.gatewayService.forwardToMovies('movies', 'GET', undefined, auth);
    }
    getMovie(id, auth) {
        return this.gatewayService.forwardToMovies(`movies/${id}`, 'GET', undefined, auth);
    }
    updateMovie(id, body, auth) {
        return this.gatewayService.forwardToMovies(`movies/${id}`, 'PATCH', body, auth);
    }
    deleteMovie(id, auth) {
        return this.gatewayService.forwardToMovies(`movies/${id}`, 'DELETE', undefined, auth);
    }
};
exports.GatewayController = GatewayController;
__decorate([
    (0, common_1.Post)('auth/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('auth/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('movies'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "createMovie", null);
__decorate([
    (0, common_1.Get)('movies'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "getMovies", null);
__decorate([
    (0, common_1.Get)('movies/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "getMovie", null);
__decorate([
    (0, common_1.Patch)('movies/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "updateMovie", null);
__decorate([
    (0, common_1.Delete)('movies/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "deleteMovie", null);
exports.GatewayController = GatewayController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [gateway_service_1.GatewayService])
], GatewayController);
//# sourceMappingURL=gateway.controller.js.map