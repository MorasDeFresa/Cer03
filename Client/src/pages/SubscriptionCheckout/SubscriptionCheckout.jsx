import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const SubscriptionCheckout = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const subscription = query.get("subscription");
  const totalPay = query.get("totalPay");
  const currency_id = query.get("currency_id");
  const quantity = query.get("quantity");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [checkout, setCheckout] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          `${baseUrl}/paymentGateways/?subscription=${subscription}&totalPay=${totalPay}&currency_id=${currency_id}&quantity=${quantity}`
        );
        setCheckout(data);
      } catch (error) {
        throw Error(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (checkout?.init_point) window.location.href = checkout.init_point;
  }, [checkout]);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default SubscriptionCheckout;
