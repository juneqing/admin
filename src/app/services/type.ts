export interface User {
    _id?: string;
    nickname?: string;
    sex?: 0 | 1 | 2;
    createDt?: Date;
    // 余额
    totalMoney?: number;
    todayMoney?: number;// 今日收益
    totalStudent?: number;//徒弟总数
    todayStudent?: number; // 今日收徒
    isFinish?: boolean;

}


export interface RelationTree {
    level1Parent?: User,
    level2Parent?: User,
    level3Parent?: User,
    level1Children?: User[],
    level2Children?: User[],
    level3Children?: User[],
}

export interface Task {
    _id?: string;
    title?: string;
    websiteUrl?: string;
    imageUrl?: string;
    bannerImage?: string;
    fee?: number;
    totalMoney?: number;
    shareMoney?: number;
    createDt?: Date;
    users: string[]


}
export interface TaskRecord {
    _id?: string;
    task?: Task;
    shareDetail: { user: string, money: string }[];
    createDt?: Date;
}

export interface TaskTag {
    _id?: string;
    name?: string;
    createDt?: Date;
    sort: number;
}
export interface Banner {
    active?: boolean;
    _id?: string;
    task?: Task;
    sort?: number;
    createDt?: Date;
    canUse?: boolean;
}

export interface RechargeRecord {
    _id?: string;
    body?: String,
    attach?: String,
    out_trade_no?: String,
    total_fee?: String,
    spbill_create_ip?: String,
    openid?: String,
    trade_type?: String;
    createDt?: Date;
    user?: User;
    //是否已经退款
    isRefund?: boolean;
}