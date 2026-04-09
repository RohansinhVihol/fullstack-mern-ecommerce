import React from "react";
import { useShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Orders = () => {
  const { backendUrl, token , currency } = useShopContext();

  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      
      if(!token){
        return null
      }

      const res = await axios.post(backendUrl + '/api/v1/order/userorders',{},{headers:{token}})
      if(res.data.success){
        let allOrdersItem = []
        res.data.data.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
        
      }
      

    } catch (error) {
        console.log(error);
        
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:item-center md:justify-between gap-4"
            key={index}
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="mt-2">Payment: <span className="text-gray-400">{item.paymentMethod}</span></p>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center gap-4 md:justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button onClick={loadOrderData} className="border border-gray-300 px-3 py-3 sm:px-8 sm:py-4 text-sm rounded-sm leading-none inline-block">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
