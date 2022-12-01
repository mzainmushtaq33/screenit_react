import { useGetUserInfoQuery } from "../../../reduxToolKit/userProfile/userProfileService.js";
import Address from "../component/address.js";


export default function ShippingAddress() {
  const getUserInfo = useGetUserInfoQuery();
  const { data } = getUserInfo;
  const initialValues = {
      contact_name: data?.data?.addresses?.shipping_address?.contact_name ,
      company_name: data?.data?.addresses?.shipping_address?.company_name,
      country: data?.data?.addresses?.shipping_address?.country,
      state: data?.data?.addresses?.shipping_address?.state,
      city: data?.data?.addresses?.shipping_address?.city,
      address_one: data?.data?.addresses?.shipping_address?.address_one,
      address_two: data?.data?.addresses?.shipping_address?.address_two,
      postal_code: data?.data?.addresses?.shipping_address?.postal_code,
      phone_no: data?.data?.addresses?.shipping_address?.phone_no,
  }
  return (
    <>
      <Address containShippingAddress="shipping address" initialValues={initialValues} data={data}/>
    </>
  );
}
