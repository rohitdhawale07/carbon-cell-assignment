import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { FaBullseye } from "react-icons/fa";

function MarketOverview() {
  const [populationData, setPopulationData] = useState([]);
  const ctxRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
        const response = await fetch(url);
        const { data } = await response.json();
        console.log(data.reverse());

        const populationData = data.map(
          ({ Nation, Population, "ID Year": ID_Year }) => ({
            nation: Nation,
            population: Population,
            year: ID_Year,
          })
        );
        console.log(populationData);

        setPopulationData(populationData);

        if (myChartRef.current) {
          myChartRef.current.destroy();
        }

        const ctx = ctxRef.current;
        myChartRef.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: populationData.map(({ year }) => year),
            datasets: [
              {
                label: "Population",
                data: populationData.map(
                  ({ population }) => population / 1000000
                ),
                borderColor: "#2AB22A",
                borderWidth: 2,
                hoverBorderWidth: 3,
                hoverBackgroundColor: "#00A34F",
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: FaBullseye,
                title: {
                  display: true,
                  text: "Population (in millions)",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Year",
                  font: {
                    weight: "bold",
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: false,
                position: "top",
              },
            },
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-[#171717]  text-[#CACECA] p-2 rounded-2xl">
      <div>
        <h1 className="text-center text-white font-semibold text-xl pb-2">
          Market Overview
        </h1>
        <hr />
        <div className="my-4 " style={{ height: 190 + "px" }}>
          <canvas ref={ctxRef} />
        </div>
        <hr />
        <div className="flex items-center justify-between mx-2 my-3">
          <p>Get in depth charts in trade</p>
          <button className="bg-[#16A34A] px-2 py-1 hover:bg-green-700 rounded-md text-[#F0E89C]">
            trade
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarketOverview;
