import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const MaintenanceViewForm = ({ maintenance, onCancel }) => {
    console.log("Maintenance Record:", maintenance);
    if (!maintenance) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-[350px]">
                <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <h2 className="text-lg font-bold">View Maintenance Details</h2>
                    <RxCross2 onClick={onCancel} className="font-bold text-xl cursor-pointer" />
                </div>
                <div className="flex items-center gap-4">
                    <img
                        src={maintenance.profilePicture || "https://via.placeholder.com/60"}
                        alt="Profile"
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <p className="text-md font-semibold">{maintenance.name}</p>
                        <p className="text-gray-500">
                            {new Date(maintenance.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </p>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Wing</p>
                        <p className="bg-gray-200 rounded-full px-3 flex items-center justify-center py-1">
                            {maintenance.wing || '--'}
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Unit</p>
                        <p className="bg-gray-200 rounded-full px-3 flex items-center justify-center py-1">
                            {maintenance.unit}
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Status</p>
                        <span
                            className={`inline-flex items-center px-3 py-1 rounded-full ${
                                maintenance.status === 'Owner'
                                    ? 'bg-blue-100 text-blue-500'
                                    : 'bg-yellow-100 text-yellow-500'
                            }`}
                        >
                            {maintenance.status}
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Amount</p>
                        <p className="bg-gray-200 rounded-full px-3 flex items-center justify-center py-1">
                            ₹ {maintenance.amount}
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Penalty</p>
                        <p className="bg-gray-200 rounded-full px-3 flex items-center justify-center py-1">
                            {maintenance.penalty || '--'}
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Payment</p>
                        <span
                            className={`inline-flex items-center px-3 py-1 rounded-full ${
                                maintenance.payment === 'Cash'
                                    ? 'bg-green-100 text-green-500'
                                    : 'bg-gray-200 text-gray-500'
                            }`}
                        >
                            {maintenance.payment}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceViewForm;
