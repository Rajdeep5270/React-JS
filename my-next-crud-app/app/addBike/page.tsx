"use client";

import { useEffect, useState } from "react";
import { bikeDataType } from "../utils/type";
import { toast } from "react-toastify";

export default function AddBikePage() {

    const brandName = ["Royal Enfield", "Hero", "Honda", "Suzuki", "Bajaj"];
    const fuelType = ["Petrol", "Diesel", "EV", "CNG"];
    const features = ["Disc Brake", "Alloy Wheels", "Bluetooth", "Navigation", "USB Charging"];

    const [bikeData, setBikeData] = useState<bikeDataType>({
        id: Math.floor(Math.random() * 10000),
        brand: "",
        bikeName: "",
        bikePrice: 0,
        fuelType: "",
        features: []
    });

    const [error, setError] = useState<any>({});

    const [allBikes, setAllBikes] = useState<bikeDataType[]>(JSON.parse(localStorage.getItem('bikes') || '[]'));

    useEffect(() => {
        localStorage.setItem('bikes', JSON.stringify(allBikes));
    }, [allBikes]);

    function onSubmit(event: any) {
        event.preventDefault();

        if (!validation()) {
            return;
        }

        setAllBikes(bikes => [...bikes, bikeData]);

        toast.success("🏍️ Bike added to your collection!");

        setBikeData({
            id: Math.floor(Math.random() * 10000),
            brand: "",
            bikeName: "",
            bikePrice: 0,
            fuelType: "",
            features: []
        });
    }

    const onHandleChange = (e: any) => {
        const { name, value } = e.target;
        setBikeData(bikeData => ({ ...bikeData, [name]: (name === 'bikePrice') ? Number(value) : value }))
    }

    const onChangeFeatures = (e: any) => {
        const { value, checked } = e.target;
        setBikeData(bikeData => ({ ...bikeData, features: (checked) ? [...bikeData.features, value] : bikeData.features.filter(features => features !== value) }))
    }

    function validation() {
        const newError: any = {};

        if (!bikeData.brand) newError.brand = "Bike brand is required";
        if (!bikeData.bikeName) newError.bikeName = "Bike name is required";
        if (!bikeData.bikePrice) newError.bikePrice = "Bike price is required";
        if (bikeData.bikePrice < 0) newError.bikePrice = "Bike price is invalid";
        if (!bikeData.fuelType) newError.fuelType = "Fuel type is required";
        if (bikeData.features.length < 1) newError.features = "At least one feature is required";

        setError(newError);
        return Object.keys(newError).length === 0;
    }

    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 sm:py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid2)" />
                    </svg>
                </div>
                <div className="absolute top-10 right-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Add Your Bike</h1>
                    <p className="text-blue-100 text-lg">Add a new motorcycle to your collection and start managing it</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Info Cards */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Complete Details</h3>
                                    <p className="text-sm text-gray-600">Fill in all the specifications of your bike for better management</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Track Features</h3>
                                    <p className="text-sm text-gray-600">Select key features to keep track of your bike's capabilities</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Price Tracking</h3>
                                    <p className="text-sm text-gray-600">Keep a record of your bike's valuation and price history</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-20">
                        <form className="space-y-6" onSubmit={onSubmit}>
                            {/* Brand Selection */}
                            <div>
                                <label htmlFor="brand" className="block text-sm font-bold text-gray-900 mb-2">Brand *</label>
                                <select
                                    value={bikeData.brand}
                                    onChange={onHandleChange}
                                    name="brand"
                                    id="brand"
                                    className={`w-full px-4 py-3 border rounded-lg font-medium transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${error.brand ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-blue-400'}`}
                                >
                                    <option value="">Select a Brand</option>
                                    {brandName.map((brand, idx) => (
                                        <option key={idx} value={brand}>{brand}</option>
                                    ))}
                                </select>
                                {error.brand && <p className="text-red-500 text-xs mt-1 font-medium">{error.brand}</p>}
                            </div>

                            {/* Bike Name */}
                            <div>
                                <label htmlFor="bikeName" className="block text-sm font-bold text-gray-900 mb-2">Model Name *</label>
                                <input
                                    type="text"
                                    name="bikeName"
                                    id="bikeName"
                                    value={bikeData.bikeName}
                                    onChange={onHandleChange}
                                    placeholder="e.g., Bullet 350"
                                    className={`w-full px-4 py-3 border rounded-lg font-medium transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${error.bikeName ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-blue-400'}`}
                                />
                                {error.bikeName && <p className="text-red-500 text-xs mt-1 font-medium">{error.bikeName}</p>}
                            </div>

                            {/* Bike Price */}
                            <div>
                                <label htmlFor="bikePrice" className="block text-sm font-bold text-gray-900 mb-2">Price ($) *</label>
                                <input
                                    type="number"
                                    name="bikePrice"
                                    id="bikePrice"
                                    value={bikeData.bikePrice}
                                    onChange={onHandleChange}
                                    placeholder="e.g., 5500"
                                    className={`w-full px-4 py-3 border rounded-lg font-medium transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${error.bikePrice ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-blue-400'}`}
                                />
                                {error.bikePrice && <p className="text-red-500 text-xs mt-1 font-medium">{error.bikePrice}</p>}
                            </div>

                            {/* Fuel Type */}
                            <div>
                                <label htmlFor="fuelType" className="block text-sm font-bold text-gray-900 mb-2">Fuel Type *</label>
                                <select
                                    value={bikeData.fuelType}
                                    onChange={onHandleChange}
                                    name="fuelType"
                                    id="fuelType"
                                    className={`w-full px-4 py-3 border rounded-lg font-medium transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${error.fuelType ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-blue-400'}`}
                                >
                                    <option value="">Select Fuel Type</option>
                                    {fuelType.map((fuel, idx) => (
                                        <option key={idx} value={fuel}>{fuel}</option>
                                    ))}
                                </select>
                                {error.fuelType && <p className="text-red-500 text-xs mt-1 font-medium">{error.fuelType}</p>}
                            </div>

                            {/* Features */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-3">Features *</label>
                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                    {features.map((feature, idx) => (
                                        <label key={idx} className="flex items-center cursor-pointer group p-2 rounded-lg hover:bg-blue-50 transition-colors">
                                            <input
                                                type="checkbox"
                                                name="features"
                                                value={feature}
                                                checked={bikeData.features.includes(feature)}
                                                onChange={onChangeFeatures}
                                                className="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
                                            />
                                            <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">{feature}</span>
                                        </label>
                                    ))}
                                </div>
                                {error.features && <p className="text-red-500 text-xs mt-2 font-medium">{error.features}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 mt-8"
                            >
                                Add Bike to Collection
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}