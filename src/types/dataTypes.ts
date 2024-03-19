/*
  Defines the structure of the Data interface representing analytics
  insights related to queries, response times, user satisfaction, and usage statistics.
*/
export interface Data {
  insight_summary: {
    total_queries: number;
    successful_queries: number;
    failed_queries: number;
    average_response_time: number;
  };

  category_distribution: {
    small_talk: number;
    technical_support: number;
    sales_inquiries: number;
    customer_service: number;
  };

  response_times: {
    day_wise: { date: string; average_time: number }[];
    week_wise: { week: string; average_time: number }[];
  };

  user_satisfaction: {
    ratings: { rating: number; count: number }[];
  };

  usage_statistics: {
    by_platform: { [platform: string]: number };
    by_country: { [country: string]: number };
  };
}
