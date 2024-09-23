import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

export const Home = () => {
  const loggedIn={firstName: "Vanadana", lastName:'Yadav', email:'contact@jsmastery.pro'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        Recent transactions
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:544.50}]}
        />

    </section>
  );

};

export default Home;
