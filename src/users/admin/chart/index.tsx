// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { useLocation } from "react-router-dom";
// import { arrayBuffer } from "stream/consumers";
// const faker = require("faker");
// export function Chart() {
//   const location: any = useLocation();
//   const user = location.state.user;
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
//   );

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top" as const,
//       },
//       title: {
//         display: true,
//         text: "Chart.js Bar Chart",
//       },
//     },
//   };

//   const labels = [
//     "10-31",
//     "11-01",
//     "11-02",
//     "11-03",
//     "11-04",
//     "11-06",
//     "11-07",
//   ];
//   //   const asdf = Object.assign(user);
//   //   const ad = asdf.activity.filter(
//   //     (a: string) => asdf.date.indexOf(a, asdf.date.indeOf(a)) !== -1
//   //   );
//   //   const ade = asdf.activity.filter(
//   //     (a: string) => asdf.name.indexOf(a, asdf.name.indeOf(a)) !== -1
//   //   );
//   //   const arr = [];
//   //   let aser = asdf.activity[0].date;
//   //   let j = 1;
//   //   const qwe = user.activity.map((item: any) => {
//   //     if (aser !== item.date) {
//   //       arr.push(j);
//   //       j = 1;
//   //       aser = item.data;
//   //     } else {
//   //       j++;
//   //     }
//   //   });
//   //   const data = {
//   //     ad,
//   //     datasets: [
//   //       {
//   //         label: ade[0],
//   //         data: user,
//   //         backgroundColor: "rgba(255, 99, 132, 0.5)",
//   //       },
//   //       {
//   //         label: ade[1],
//   //         data: user,
//   //         backgroundColor: "rgba(53, 162, 235, 0.5)",
//   //       },
//   //     ],
//   //   };
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "이윤서",
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//       {
//         label: "안윤지",
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//       },
//     ],
//   };
//   return <Bar options={options} data={data} />;
// }
export {};
