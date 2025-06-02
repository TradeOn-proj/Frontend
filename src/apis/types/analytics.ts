export interface MonthlyData {
  month: string;
  count: number;
}

export interface AverageData {
  month: string;
  averageRating: string;
}

export interface AnalyticsResponse {
  userId: number;
  totalTrades: number;
  successfulTrades: number;
  successRate: number;
  averageRating: number;
  monthlyTradeCounts: MonthlyData[];
  monthlyAverageRatings: AverageData[];
}
