"use client";

import { useState } from "react";
import { bikeDataType } from "../utils/type";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ViewBikesPage() {
    const [allBikes, setAllBikes] = useState<bikeDataType[]>(JSON.parse(localStorage.getItem('bikes') || '[]'));
    const router = useRouter();

    function deleteBike(id: number) {
        const deletedBike = allBikes.filter(bike => bike.id !== id);
        setAllBikes(deletedBike);
        localStorage.setItem('bikes', JSON.stringify(deletedBike));
        toast.success("🗑️ Bike removed from collection!");
    }

    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 text-white py-16 sm:py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid4" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid4)" />
                    </svg>
                </div>
                <div className="absolute top-10 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your Bike Collection</h1>
                    <p className="text-cyan-100 text-lg">Manage and view all registered motorcycles</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {allBikes.length > 0 ? (
                    <>
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-6 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Total Bikes</p>
                                        <p className="text-4xl font-black text-blue-600 mt-2">{allBikes.length}</p>
                                    </div>
                                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 p-6 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-green-600 font-semibold uppercase tracking-wider">Total Value</p>
                                        <p className="text-3xl font-black text-green-600 mt-2">${allBikes.reduce((sum, bike) => sum + bike.bikePrice, 0).toLocaleString()}</p>
                                    </div>
                                    <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 p-6 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-purple-600 font-semibold uppercase tracking-wider">Average Price</p>
                                        <p className="text-3xl font-black text-purple-600 mt-2">${Math.round(allBikes.reduce((sum, bike) => sum + bike.bikePrice, 0) / allBikes.length).toLocaleString()}</p>
                                    </div>
                                    <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                                            <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">No</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Brand</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Model</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Price</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Fuel Type</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Features</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-700 text-center uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {allBikes.map((bike, index) => (
                                            <tr key={index} className="hover:bg-blue-50 transition-colors duration-200 group">
                                                <td className="px-6 py-4 text-sm font-bold text-gray-500 group-hover:text-gray-900">{index + 1}</td>
                                                <td className="px-6 py-4 text-sm font-bold text-gray-900">{bike.brand}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600 group-hover:text-gray-900">{bike.bikeName}</td>
                                                <td className="px-6 py-4 text-sm font-bold text-green-600">${bike.bikePrice.toLocaleString()}</td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-blue-700/20">
                                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                        {bike.fuelType}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    <div className="flex flex-wrap gap-2">
                                                        {bike.features.slice(0, 2).map((feat, idx) => (
                                                            <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors">
                                                                {feat}
                                                            </span>
                                                        ))}
                                                        {bike.features.length > 2 && (
                                                            <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-2.5 py-1 rounded-full text-xs font-bold">
                                                                +{bike.features.length - 2}
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button
                                                            onClick={() => router.push(`/editBike/${bike.id}`)}
                                                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-indigo-600 hover:text-white hover:bg-indigo-600 bg-indigo-50 rounded-lg transition-all duration-200 transform hover:scale-105"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                if (window.confirm(`Are you sure you want to delete ${bike.bikeName}?`)) {
                                                                    deleteBike(bike.id);
                                                                }
                                                            }}
                                                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 hover:text-white hover:bg-red-600 bg-red-50 rounded-lg transition-all duration-200 transform hover:scale-105"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-24">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6">
                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No Bikes Yet</h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">Your collection is empty. Start by adding your first motorcycle to get started!</p>
                        <a
                            href="/addBike"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Your First Bike
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}