import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    id: 1,
    firstName: "Henry",
    lastName: "Do",
    email: "hiepdh18@gmail.com",
    userId: "string",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
  };
  const banks = [
    {
      currentBalance: 12345,
    },
    {
      currentBalance: 83472,
    },
  ];
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234.42}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={banks} />
    </section>
  );
};

export default Home;
