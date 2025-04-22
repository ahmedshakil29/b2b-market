import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

export interface SalesSummary {
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number;
  date: string;
}

export interface PurchaseSummary {
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercentage?: number;
  date: string;
}

export interface ExpenseSummary {
  expenseSummarId: string;
  totalExpenses: number;
  date: string;
}

export interface ExpenseByCategorySummary {
  expenseByCategorySummaryId: string;
  category: string;
  amount: string;
  date: string;
}

export interface User {
  userId: string;
  name: string;
  email: string;
}

export const api2 = createApi({
  reducerPath: "api2",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // 👈 local API route
  tagTypes: [
    "Products",
    "SalesSummary",
    "PurchaseSummary",
    "ExpenseSummary",
    "ExpenseByCategory",
    "Users",
  ],
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getSalesSummary: build.query<SalesSummary[], void>({
      query: () => "/salesSummary",
      providesTags: ["SalesSummary"],
    }),
    getPurchaseSummary: build.query<PurchaseSummary[], void>({
      query: () => "/purchaseSummary",
      providesTags: ["PurchaseSummary"],
    }),
    getExpenseSummary: build.query<ExpenseSummary[], void>({
      query: () => "/expenseSummary",
      providesTags: ["ExpenseSummary"],
    }),
    getExpenseByCategory: build.query<ExpenseByCategorySummary[], void>({
      query: () => "/expenseByCategory",
      providesTags: ["ExpenseByCategory"],
    }),
    getUsers: build.query<User[], void>({
      query: () => "/users",
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSalesSummaryQuery,
  useGetPurchaseSummaryQuery,
  useGetExpenseSummaryQuery,
  useGetExpenseByCategoryQuery,
  useGetUsersQuery,
} = api2;
