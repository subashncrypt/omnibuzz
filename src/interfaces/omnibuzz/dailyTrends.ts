export interface OmniTrends{
    title : string;
    traffic: string;
    url: string;
}

export default interface OmniDailyTrends{
    country: string;
    date: Date;
    trends: OmniTrends[];
}