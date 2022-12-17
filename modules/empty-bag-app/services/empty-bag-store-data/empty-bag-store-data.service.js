"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyBagStoreDataService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
let EmptyBagStoreDataService = class EmptyBagStoreDataService {
    async postEmpty_Inner_Bag_ID(data) {
        let return_data;
        const check_already_exist_inner_bag_id = await app_module_1.dbConnection.query(`select * from in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
    where collection_bag_id=${data.collection_bag_id} and  empty_bag_packed_inside_collection_bag_id=${data.empty_bag_packed_inside_collection_bag_id};
     `);
        if (check_already_exist_inner_bag_id.length == 0) {
            await app_module_1.dbConnection.query(`INSERT INTO in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
      ( collection_bag_id,
        is_this_empty_bag_packed_inside_collection_bag, 
      empty_bag_packed_inside_collection_bag_id,
      empty_bag_packed_by_getster_id)
       VALUES
      (${data.collection_bag_id},
       ${data.is_this_empty_bag_packed_inside_collection_bag},
       ${data.empty_bag_packed_inside_collection_bag_id},
       1);`);
        }
        return return_data;
    }
    async getEmpty_Outer_Bag_id(scan_bag_id) {
        const data = await app_module_1.dbConnection.query(`SELECT * FROM in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
        where collection_bag_id= ${scan_bag_id} and is_this_empty_bag_packed_inside_collection_bag = 0 and empty_bag_packed_inside_collection_bag_id IS NULL ;`);
        return data;
    }
    async getEmpty_Inner_Bag_id(scan_bag_id) {
        let final_api_data = [];
        const data = await app_module_1.dbConnection.query(`SELECT * FROM in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
        where empty_bag_packed_inside_collection_bag_id=${scan_bag_id} ;`);
        for (let inner_bag_ID of data) {
            let final_data = {
                inner_bag_id: inner_bag_ID.collection_bag_id,
            };
            final_api_data.push(final_data);
        }
        return final_api_data;
    }
    async post_outer_bag_id(data) {
        let final_api_data = [];
        const check_outer_bag_id = await app_module_1.dbConnection.query(`SELECT count(*) as a FROM in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
    where collection_bag_id = ${data.is_this_empty_bag_packed_inside_collection_bag} and is_this_empty_bag_packed_inside_collection_bag = 0 and empty_bag_packed_inside_collection_bag_id is null;`);
        await app_module_1.dbConnection.query(`SET SQL_SAFE_UPDATES = 0;`);
        await app_module_1.dbConnection.query(`INSERT INTO in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
        ( collection_bag_id,
          is_this_empty_bag_packed_inside_collection_bag, 
        empty_bag_packed_inside_collection_bag_id,
        empty_bag_packed_by_getster_id
        )
         VALUES
        (${data.collection_bag_id},
         ${data.is_this_empty_bag_packed_inside_collection_bag},
         ${data.empty_bag_packed_inside_collection_bag_id},
         1
         );`);
        let res = { message: "Success" };
    }
    async delete_bag_id(scan_bag_id) {
        await app_module_1.dbConnection.query(`SET SQL_SAFE_UPDATES = 0;`);
        await app_module_1.dbConnection.query(`DELETE FROM in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
        where collection_bag_id = ${scan_bag_id} and empty_bag_packed_inside_collection_bag_id is null;`);
        await app_module_1.dbConnection.query(`	DELETE FROM in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
	where empty_bag_packed_inside_collection_bag_id = ${scan_bag_id} and is_this_empty_bag_packed_inside_collection_bag=1;
`);
    }
    async verify_bag_id(scan_bag_id) {
        await app_module_1.dbConnection.query(`SET SQL_SAFE_UPDATES = 0;`);
        await app_module_1.dbConnection.query(`UPDATE  in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
    SET empty_bag_packing_in_outer_bag_verified_by_getster_id=2
    WHERE collection_bag_id=${scan_bag_id} and empty_bag_packed_inside_collection_bag_id is null and is_this_empty_bag_packed_inside_collection_bag=0;`);
        await app_module_1.dbConnection.query(` UPDATE  in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
    SET empty_bag_packing_in_outer_bag_verified_by_getster_id=2
    WHERE is_this_empty_bag_packed_inside_collection_bag=1 and empty_bag_packed_inside_collection_bag_id=${scan_bag_id};`);
    }
    async check_collection_bag_id(scan_bag_id) {
        const data = await app_module_1.dbConnection.query(`select * from in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management where collection_bag_id = ${scan_bag_id};`);
        return data;
    }
    async check_inner_outer_bag_id(scan_bag_id) {
        let return_bag_id_length;
        const data_1 = await app_module_1.dbConnection.query(`select * from in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management where collection_bag_id = ${scan_bag_id} and empty_bag_packed_inside_collection_bag_id is null ; `);
        const data_2 = await app_module_1.dbConnection.query(`select * from in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management where collection_bag_id = ${scan_bag_id} and is_this_empty_bag_packed_inside_collection_bag =1 ; `);
        if (data_1.length == 1) {
            return_bag_id_length = 1;
        }
        if (data_2.length == 1) {
            return_bag_id_length = 2;
        }
        return return_bag_id_length;
    }
    async delete_inner_bag_id_array(scan_bag_id) {
        await app_module_1.dbConnection.query(`delete from in_manage_get_wow_education_db.3_getsterapp_12_camp_center_collection_bags_stock_management
    where collection_bag_id= ${scan_bag_id} and is_this_empty_bag_packed_inside_collection_bag=1;`);
        return { message: "bag id is deleted" };
    }
};
EmptyBagStoreDataService = __decorate([
    (0, common_1.Injectable)()
], EmptyBagStoreDataService);
exports.EmptyBagStoreDataService = EmptyBagStoreDataService;
//# sourceMappingURL=empty-bag-store-data.service.js.map