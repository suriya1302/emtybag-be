import { empty_bag_id } from "src/models/dto/empty_bag_id.dto";
import { EmptyBagStoreDataService } from "../../services/empty-bag-store-data/empty-bag-store-data.service";
export declare class EmptyBagStoreDataController {
    private readonly appService;
    constructor(appService: EmptyBagStoreDataService);
    post_Empty_Inner_Bag_ID(data: empty_bag_id): Promise<any>;
    post_inner_bag_id(data: empty_bag_id): Promise<void>;
    get_outer_bag_id(scan_bag_id: number): Promise<any>;
    getEmpty_Inner_Bag_id(scan_bag_id: number): Promise<any[]>;
    check_collection_bag_id(scan_bag_id: number): Promise<any>;
    check_inner_outer_bag_collection_bag_id(scan_bag_id: number): Promise<any>;
    delete_bag_id(scan_bag_id: number): Promise<void>;
    delete_bag_array_id(scan_bag_id: number): Promise<{
        message: string;
    }>;
    verify_bag_id(scan_bag_id: number): void;
}
