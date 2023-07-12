export interface TopTrendingSearches{
    title : {
        query: String,
        exploreLink :String,
    };
    formattedTraffic:String;
    relatedQueries:Object[];
    articles:Object[];
    shareUrl:String;
}


export interface TrendingSearches{
    date: String;
    formattedDate: String;
    trendingSearches : TopTrendingSearches[];
}

export interface Search{
    trendingSearchesDays: TrendingSearches[];
    endDateForNextRequest : String;
    rssFeedPageUrl : String;
}

export default interface DailyTrends{
    default : Search;
}

