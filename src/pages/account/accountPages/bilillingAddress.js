import React from "react";
import { useGetUserInfoQuery } from "../../../reduxToolKit/userProfile/userProfileService";
import Address from "../component/address";

export default function BillingAddress({ containShippingAddress }) {
  const getUserInfo = useGetUserInfoQuery();
  const { data } = getUserInfo;
  const initialValues = {
      contact_name: data?.data?.addresses?.billing_address?.contact_name ,
      company_name: data?.data?.addresses?.billing_address?.company_name,
      country: data?.data?.addresses?.billing_address?.country,
      state: data?.data?.addresses?.billing_address?.state,
      city: data?.data?.addresses?.billing_address?.city,
      address_one: data?.data?.addresses?.billing_address?.address_one,
      address_two: data?.data?.addresses?.billing_address?.address_two,
      postal_code: data?.data?.addresses?.billing_address?.postal_code,
      phone_no: data?.data?.addresses?.billing_address?.phone_no,
  }
  return (
    <>
      <Address containShippingAddress="billing address" initialValues={initialValues} data={data}/>
    </>
  );
}
