import React, { useEffect, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";

function Cards() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch(
      `https://api.coindesk.com/v1/bpi/currentprice.json`
    );
    const result = await res.json();
    // console.log(result.bpi);
    if (result.bpi) {
      setData(Object.values(result.bpi));
    }
  }
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="m-3">
      <h1 className="text-2xl mb-3 text-white font-medium">Assets</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay:index*0.1 }}
            className="bg-[#171717] px-4 py-2  rounded-xl flex flex-col gap-1 "
          >
            <div className="flex items-center justify-center gap-8 ">
              <p
                dangerouslySetInnerHTML={{ __html: item.symbol }}
                className="text-white text-4xl p-1  bg-[#00B2E8] rounded-full"
              ></p>
              <h1 className="text-xl font-bold text-[#e6e5e5]">{item.code}</h1>
            </div>
            <div className="text-center text-[#cccccc]">{item.description}</div>
            <div className="flex items-center justify-center gap-1">
              <h1 className="text-xl font-semibold text-white">
                <span
                  className="pr-1"
                  dangerouslySetInnerHTML={{ __html: item.symbol }}
                ></span>
                {item.rate_float}{" "}
              </h1>
              <FaArrowTrendUp className="text-md text-[#a3a3a3]" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#16A34A] hover:text-white cursor-pointer text-4xl">
                <FiAlertCircle />
              </p>
              <button className="bg-[#16A34A] px-2 py-1 hover:bg-green-700 rounded-md text-[#F0E89C]">
                Trade
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
