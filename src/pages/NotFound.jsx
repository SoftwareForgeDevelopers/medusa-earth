import React from "react";
import Layout from "../layout/Layout";

function NotFound() {
  return (
    <Layout navbar={true} footer={true}>
      <div className="flex items-center justify-center h-full grow">
        <h1 className="text-6xl font-w-bold text-var-dark-blue underline underline-offset-[12px]">
          Page Not Found - 404
        </h1>
      </div>
    </Layout>
  );
}

export default NotFound;
