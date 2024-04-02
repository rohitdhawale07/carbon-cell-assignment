import React from "react";
import Layout from "../../components/Layout";
import MarketOverview from "./components/MarketOverview";
import WalletBalance from "./components/WalletBalance";
import RecentPosts from "./components/RecentPosts";
import Cards from "../../components/Cards";

function Dashboard() {
  return (
    <>
      <div>
        <Layout className="max-w-[74rem] p-4 mx-auto">
          <div className="grid gap-4 m-5 lg:m-0 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
            <MarketOverview />
            <WalletBalance />
            <RecentPosts />
          </div>
          <Cards />
        </Layout>
      </div>
    </>
  );
}

export default Dashboard;
