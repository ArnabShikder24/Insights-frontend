"use client";
import React from "react";
import "tippy.js/dist/tippy.css";
import { toggleRTL, toggleTheme, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from '@/store/themeConfigSlice';
import { useSelector } from "react-redux";
import type { IRootState } from '@/store';

const tableData = [
    {
        id: 1,
        machineId: 'swe1',
        operatorName: 'Halima Begum',
        taskDetailId: 1,
        taskName: 'Sweing 007',
        status: 'Running',
        completion: 22,
        target: 500,
        date: '04:53:39 PM April 11, 2025',
    },
    {
        id: 2,
        machineId: 'swe2',
        operatorName: 'Karim',
        taskDetailId: 5,
        taskName: 'process 3',
        status: 'Running',
        completion: 163,
        target: 400,
        date: '02:18:00 PM February 4, 2025',
    },
    {
        id: 3,
        machineId: 'fns2',
        operatorName: 'Sabuj Mia',
        taskDetailId: 3,
        taskName: 'Demo Task',
        status: 'Logged out',
        completion: 49,
        target: 100,
        date: '10:02:41 AM November 28, 2024',
    },
];

const tableData2 = [
    {
      id: 1,
      machineId: "swe1",
      alertType: "Power Supply Issue",
      errorCode: 7,
      taskDetailId: "N/A",
      timestamp: "2/26/2025, 10:54:43 AM",
    },
    {
      id: 2,
      machineId: "swe2",
      alertType: "Cutting Tolls",
      errorCode: 9,
      taskDetailId: "N/A",
      timestamp: "2/4/2025, 8:17:03 PM",
    },
    {
      id: 3,
      machineId: "swe2",
      alertType: "Cutting Tolls",
      errorCode: 9,
      taskDetailId: "N/A",
      timestamp: "2/4/2025, 8:17:03 PM",
    },
    {
      id: 4,
      machineId: "swe2",
      alertType: "Cutting Tolls",
      errorCode: 9,
      taskDetailId: "N/A",
      timestamp: "2/4/2025, 8:17:03 PM",
    },
];
  

const Dashboard = () => {
    const { isDarkMode, rtlClass } = useSelector((state: IRootState) => state.themeConfig);

    return <div>
            <div className="flex items-center gap-2 text-gray-500"><span>{">"}</span> Dashboard</div>

            <div className="text-center my-5">
                <h1 className="text-xl">Live Task Status</h1>
            </div>
            <div className="table-responsive mb-5">
            <table>
                <thead>
                    <tr>
                        <th>Machine ID</th>
                        <th>Operator Name</th>
                        <th>Task Detail ID</th>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th className="text-center">Completion</th>
                        <th className="text-center">Target</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.machineId}</td>
                                <td>
                                    <div className="whitespace-nowrap">{data.operatorName}</div>
                                </td>
                                <td>{data.taskDetailId}</td>
                                <td>{data.taskName}</td>
                                <td>
                                    <span
                                        className={`badge whitespace-nowrap ${
                                            data.status === 'Running'
                                                ? 'badge-outline-success'
                                                : data.status === 'Logged out'
                                                ? 'badge-outline-danger'
                                                : 'badge-outline-primary'
                                        }`}
                                    >
                                        {data.status}
                                    </span>
                                </td>
                                <td className="text-center">{data.completion}</td>
                                <td className="text-center">{data.target}</td>
                                <td>{data.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

        <div className="text-center my-5">
            <h1 className="text-xl">Live Task Status</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
            {/* Left Column: Table */}
            <div className="rounded-xl shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Alerts & Notifications</h2>
            {/* Your table will go here */}
                <table>
                <thead>
                    <tr>
                    <th>Machine ID</th>
                    <th>Alert Type</th>
                    <th>Error Code</th>
                    <th>Task Detail ID</th>
                    <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData2.map((data) => {
                    return (
                        <tr key={data.id}>
                        <td>{data.machineId}</td>
                        <td>{data.alertType}</td>
                        <td>{data.errorCode}</td>
                        <td>{data.taskDetailId}</td>
                        <td>{data.timestamp}</td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>

            {/* Right Column: Graph */}
            <div className="rounded-xl shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Real-Time Production</h2>
                {/* Your graph will go here */}
            </div>
        </div>

    </div>;
};

export default Dashboard;
