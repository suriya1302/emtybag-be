export declare class EmptyBagStoreDataService {
    postEmpty_Inner_Bag_ID(data: any): Promise<any>;
    getEmpty_Outer_Bag_id(scan_bag_id: any): Promise<any>;
    getEmpty_Inner_Bag_id(scan_bag_id: any): Promise<any[]>;
    post_outer_bag_id(data: any): Promise<void>;
    delete_bag_id(scan_bag_id: any): Promise<void>;
    verify_bag_id(scan_bag_id: any): Promise<void>;
    check_collection_bag_id(scan_bag_id: any): Promise<any>;
    check_inner_outer_bag_id(scan_bag_id: any): Promise<any>;
    delete_inner_bag_id_array(scan_bag_id: any): Promise<{
        message: string;
    }>;
}
