export interface TrendingSearches{
    date: String;
    formattedDate: String;
    trendingSearches : Object[];
}

export interface Search{
    trendingSearchesDays: TrendingSearches[];
    endDateForNextRequest : String;
    rssFeedPageUrl : String;
}

export default interface DailyTrends{
    default : Search;
}

