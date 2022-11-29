import React from "react";

import CustomTab from "../../component/ui-components/tab/tab";
import BillingAddress from "./accountPages/bilillingAddress";
import Invoices from "./accountPages/invoices";
import ShippingAddress from "./accountPages/shippingAddress";
import Subscription from "./accountPages/subscription";

const Account = () => {
  let tabArray = [
    {
      name: "Subscription",
      key: "subscription",
      component: <Subscription />,
    },

    {
      name: "Billing Address",
      key: "billingAddress",
      component: <BillingAddress />,
    },
    {
      name: "Shipping Address",
      key: "shippingAddress",
      component: <ShippingAddress />,
    },
    {
      name: "Invoices",
      key: "invoices",
      component: <Invoices />,
    },
  ];
  return (
    <div className="card ">
      <CustomTab tabArray={tabArray} />
    </div>
  );
};

export default Account;
