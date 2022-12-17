"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const db_config_1 = require("./config/db.config");
const empty_bag_app_module_1 = require("./modules/empty-bag-app/empty-bag-app.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            empty_bag_app_module_1.EmptyBagAppModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
exports.dbConnection = new typeorm_1.DataSource((0, db_config_1.default)());
exports.dbConnection
    .initialize()
    .then(() => {
    console.log(`Data Source has been initialized! "${process.env.DB_HOST},${process.env.DB_USERNAME},${process.env.DB_PASSWORD}"`);
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
//# sourceMappingURL=app.module.js.map