import React, { useEffect } from "react";
import { useShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useShopContext();

  const [searchParmas, setSearchParams] = useSearchParams();

  const success = searchParmas.get("success");
  const orderId = searchParmas.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }

      const res = await axios.post(
        backendUrl + "/api/v1/order/verifyStripe",
        { success, orderId },
        { headers: { token } },
      );
      if (res.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
      navigate("/cart");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return <div>Verify</div>;
};

export default Verify;
