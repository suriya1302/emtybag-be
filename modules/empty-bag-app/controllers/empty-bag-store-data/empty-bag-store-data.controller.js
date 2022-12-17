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
exports.EmptyBagStoreDataController = void 0;
const common_1 = require("@nestjs/common");
const empty_bag_id_dto_1 = require("../../../../models/dto/empty_bag_id.dto");
const empty_bag_store_data_service_1 = require("../../services/empty-bag-store-data/empty-bag-store-data.service");
let EmptyBagStoreDataController = class EmptyBagStoreDataController {
    constructor(appService) {
        this.appService = appService;
    }
    post_Empty_Inner_Bag_ID(data) {
        return this.appService.postEmpty_Inner_Bag_ID(data);
    }
    post_inner_bag_id(data) {
        return this.appService.post_outer_bag_id(data);
    }
    get_outer_bag_id(scan_bag_id) {
        return this.appService.getEmpty_Outer_Bag_id(scan_bag_id);
    }
    getEmpty_Inner_Bag_id(scan_bag_id) {
        return this.appService.getEmpty_Inner_Bag_id(scan_bag_id);
    }
    check_collection_bag_id(scan_bag_id) {
        return this.appService.check_collection_bag_id(scan_bag_id);
    }
    check_inner_outer_bag_collection_bag_id(scan_bag_id) {
        return this.appService.check_inner_outer_bag_id(scan_bag_id);
    }
    delete_bag_id(scan_bag_id) {
        return this.appService.delete_bag_id(scan_bag_id);
    }
    delete_bag_array_id(scan_bag_id) {
        return this.appService.delete_inner_bag_id_array(scan_bag_id);
    }
    verify_bag_id(scan_bag_id) {
        this.appService.verify_bag_id(scan_bag_id);
    }
};
__decorate([
    (0, common_1.Post)("post-empty_inner-bags"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [empty_bag_id_dto_1.empty_bag_id]),
    __metadata("design:returntype", void 0)
], EmptyBagStoreDataController.prototype, "post_Empty_Inner_Bag_ID", null);
__decorate([
    (0, common_1.Post)("post_outer-bag-id"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [empty_bag_id_dto_1.empty_bag_id]),
    __metadata("design:returntype", void 0)
], EmptyBagStoreDataController.prototype, "post_inner_bag_id", null);
__decorate([
    (0, common_1.Get)("get_outer_bag_id"),
    __param(0, (0, common_1.Query)("scan-bag-id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmptyBagStoreDataController.prototype, "get_outer_bag_id", null);
__decorate([
    (0, common_1.Get)("get-inner_bag_id"),
    __param(0, (0, common_1.Query)("scan_bag_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmptyBagStoreDataController.prototype, "getEmpty_Inner_Bag_id", null);
__decorate([
    (0, common_1.Get)("check_bag_id"),
    __param(0, (0, common_1.Query)("scan_bag_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmptyBagStoreDataController.prototype, "check_collection_bag_id", null);
__decorate([
    (0, common_1.Get)("check_inner_outer_bag_id"),
    __param(0, (0, common_1.Query)("scan_bag_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmptyBagStoreDataController.prototype, "check_inner_outer_bag_collection_bag_id", null);
__decorate([
    (0, common_1.Delete)("delete-inner_bag_id"),
    __param(0, (0, common_1.Query)("scan_bag_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmptyBagStoreDataController.prototype, "delete_bag_id", null);
__decorate([
    (0, common_1.Delete)("delete-inner_array_bag_id"),
    __param(0, (0, common_1.Query)("scan_bag_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmptyBagStoreDataController.prototype, "delete_bag_array_id", null);
__decorate([
    (0, common_1.Put)("verify-bag-id"),
    __param(0, (0, common_1.Query)("scan-bag-id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmptyBagStoreDataController.prototype, "verify_bag_id", null);
EmptyBagStoreDataController = __decorate([
    (0, common_1.Controller)("empty-bag-store-data"),
    __metadata("design:paramtypes", [empty_bag_store_data_service_1.EmptyBagStoreDataService])
], EmptyBagStoreDataController);
exports.EmptyBagStoreDataController = EmptyBagStoreDataController;
//# sourceMappingURL=empty-bag-store-data.controller.js.map