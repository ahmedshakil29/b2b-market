// "use client";

// import { useGetProductsQuery } from "@/state/api2";
// import Header from "@/app/(components)/Header";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";

// const columns: GridColDef[] = [
//   { field: "productId", headerName: "ID", width: 90 },
//   { field: "name", headerName: "Product Name", width: 200 },
//   {
//     field: "price",
//     headerName: "Price",
//     width: 110,
//     type: "number",
//     valueGetter: (value, row) => `$${row.price}`,
//   },
//   {
//     field: "rating",
//     headerName: "Rating",
//     width: 110,
//     type: "number",
//     valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
//   },
//   {
//     field: "stockQuantity",
//     headerName: "Stock Quantity",
//     width: 150,
//     type: "number",
//   },
// ];

// const Inventory = () => {
//   const { data: products, isError, isLoading } = useGetProductsQuery();

//   if (isLoading) {
//     return <div className="py-4">Loading...</div>;
//   }

//   if (isError || !products) {
//     return (
//       <div className="text-center text-red-500 py-4">
//         Failed to fetch products
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col">
//       <Header name="Inventory" />
//       <DataGrid
//         rows={products}
//         columns={columns}
//         getRowId={(row) => row.productId}
//         checkboxSelection
//         className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
//       />
//     </div>
//   );
// };

// export default Inventory;
//2nd one

"use client";

import { useGetProductsQuery } from "@/state/api"; // Hook to fetch products from API
import Header from "@/app/(components)/Header"; // Custom header component
import { DataGrid, GridColDef } from "@mui/x-data-grid"; // MUI DataGrid for displaying tabular data

// Define the columns for the DataGrid
const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Product Name", width: 200 },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    renderCell: (params) => `$${params.value.toFixed(2)}`, // Format price with a dollar sign
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    renderCell: (params) => (params.value ? params.value : "N/A"), // Display "N/A" if no rating is available
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
  },
];

interface ProductRow {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

const Inventory = () => {
  // Fetching data using the `useGetProductsQuery` hook from API
  const { data: products, isError, isLoading } = useGetProductsQuery();
  console.log("products");
  console.log(products);
  // Loading state
  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  // Error state
  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Render the header */}
      <Header name="Inventory" />

      {/* DataGrid to display products */}
      <DataGrid
        rows={products as ProductRow[]} // Type the rows to match the ProductRow interface
        columns={columns}
        getRowId={(row) => row.productId} // Define how to get the unique row ID
        checkboxSelection // Enable checkboxes for row selection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Inventory;

// "use client";

// import { useState } from "react";
// import Header from "@/app/(components)/Header";
// import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";

// // Sample static data
// const mockProducts = [
//   {
//     productId: 1,
//     name: "Apple iPhone 14",
//     price: 999,
//     rating: 4.5,
//     stockQuantity: 20,
//   },
//   {
//     productId: 2,
//     name: "Samsung Galaxy S23",
//     price: 899,
//     rating: 4.2,
//     stockQuantity: 15,
//   },
//   {
//     productId: 3,
//     name: "Google Pixel 7",
//     price: 799,
//     rating: 4.3,
//     stockQuantity: 10,
//   },
// ];

// const columns: GridColDef[] = [
//   { field: "productId", headerName: "ID", width: 90 },
//   { field: "name", headerName: "Product Name", width: 200 },
//   {
//     field: "price",
//     headerName: "Price",
//     width: 110,
//     type: "number",
//     valueGetter: (value, row) => `$${row.price}`,
//   },
//   {
//     field: "rating",
//     headerName: "Rating",
//     width: 110,
//     type: "number",
//     valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
//   },
//   {
//     field: "stockQuantity",
//     headerName: "Stock Quantity",
//     width: 150,
//     type: "number",
//   },
// ];

// const Inventory = () => {
//   const [selectedRow, setSelectedRow] = useState(null);

//   return (
//     <div className="flex flex-col">
//       <Header name="Inventory" />
//       <DataGrid
//         rows={mockProducts}
//         columns={columns}
//         getRowId={(row) => row.productId}
//         checkboxSelection
//         onRowClick={(params: GridRowParams) => setSelectedRow(params.row)}
//         className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
//       />

//       {selectedRow && (
//         <div className="mt-5 bg-gray-100 p-4 rounded-lg text-sm text-gray-800">
//           <h2 className="font-bold text-lg mb-2">Selected Product Details</h2>
//           <pre>{JSON.stringify(selectedRow, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Inventory;
