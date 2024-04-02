import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { FaCircle } from "react-icons/fa";
import "./WalletBalance.css";

function WalletBalance() {
  const [data, setData] = useState([]);
  const [address, setAddress] = useState("");
  const chartRef = useRef(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const { bpi } = await response.json();
      if (bpi) {
        const chartData = Object.values(bpi).map((currency) => ({
          label: currency.code,
          data: currency.rate_float,
        }));
        setData(chartData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      const ctx = document.getElementById("doughnut-chart");
      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: data.map((currency) => currency.label),
          datasets: [
            {
              data: data.map((currency) => currency.data),
              backgroundColor: [
                "#2AB42A",
                "#9FFF9D",
                "#1B9A59",
                // Add more colors as needed
              ],
              borderColor: "#171717", // Set doughnut border color
              borderWidth: 2,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          aspectRatio: 1, // Set aspect ratio to maintain a square shape
          responsive: true,
          plugins: {
            tooltip: {
              enabled: true, // Disable tooltip plugin
            },
            legend: {
              display: false, // Hide legend
            },
          },
          hover: {
            mode: "index",
            intersect: true,
          },
          tooltips: {
            mode: "index",
            intersect: true,
          },
        },
      });
    }
  }, [data]);

  async function connectWallet() {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        setAddress(accounts[0]);
        alert("Metamask is connected successfully");
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    } else {
      console.log("Please install Metamask");
      alert("Please install Metamask");
    }
  }

  return (
    <div className="bg-[#171717]  text-[#CACECA] p-2 rounded-2xl">
      {" "}
      <div>
        <h1 className="text-center text-white font-semibold text-xl pb-2">
          Wallet Balance
        </h1>
        <hr />
        <div
          className="m-4 flex itms-center justify-center gap-6"
          style={{ height: 190 + "px" }}
        >
          <canvas className="" id="doughnut-chart" />
          <div className="flex flex-col items-start justify-center gap-6 ">
            <div className="flex items-center gap-2">
              <FaCircle className="text-[#2AB42A] text-sm" />
              <p className="text-sm">United States Dollar</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircle className="text-[#9FFF9D] text-sm" />{" "}
              <p className="text-sm">British Pound Sterling</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircle className="text-[#1B9A59] text-sm" />{" "}
              <p className="text-sm">Euro</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center my-3">
          <button
            onClick={connectWallet}
            className="bg-[#16A34A] glowing-btn px-2 py-1 hover:bg-green-700 rounded-md text-[#F0E89C]"
          >
            {address.length > 0 ? (
              <>
                <span className="text-white">Connected </span>
                {`${address.substring(0, 6)}...${address.substring(38)}`}
              </>
            ) : (
              "Connect Wallet"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalletBalance;
