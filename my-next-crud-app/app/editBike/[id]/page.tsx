"use client";

import { bikeDataType } from "@/app/utils/type";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function EditBikePage() {

    const [allBikes, setAllBikes] = useState<bikeDataType[]>(JSON.parse(localStorage.getItem('bikes') || '[]'));
    const [bikeData, setBikeData] = useState<bikeDataType | null>(null);
    const [error, setError] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);

    const param = useParams();
    const router = useRouter();

    const brandName = ["Royal Enfield", "Hero", "Honda", "Suzuki", "Bajaj"];
    const fuelType = ["Petrol", "Diesel", "EV", "CNG"];
    const features = ["Disc Brake", "Alloy Wheels", "Bluetooth", "Navigation", "USB Charging"];

    useEffect(() => {
        function fetchBike() {
            const bikeFound = allBikes.find(bike => bike.id === Number(param.id));
            if (bikeFound) {
                setBikeData(bikeFound);
            } else {
                toast.error("Bike not found");
                router.push("/viewBike");
            }
            setIsLoading(false);
        }
        fetchBike();
    }, [param.id, allBikes, router]);

    const onHandleChange = (e: any) => {
        if (!bikeData) return;
        const { name, value } = e.target;
        setBikeData(prevData => ({
            ...prevData!,
            [name]: (name === 'bikePrice') ? Number(value) : value
        }));
    }

    const onChangeFeatures = (e: any) => {
        if (!bikeData) return;
        const { value, checked } = e.target;
        setBikeData(prevData => ({
            ...prevData!,
            features: checked
                ? [...prevData!.features, value]
                : prevData!.features.filter(feat => feat !== value)
        }));
    }

    function validation() {
        if (!bikeData) return false;
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

    function onSubmit(event: any) {
        event.preventDefault();

        if (!validation() || !bikeData) {
            return;
        }

        const updatedBikes = allBikes.map(bike =>
            bike.id === bikeData.id ? bikeData : bike
        );

        setAllBikes(updatedBikes);
        localStorage.setItem('bikes', JSON.stringify(updatedBikes));

        toast.success("✅ Bike updated successfully!");
        router.push("/viewBike");
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading bike details...</p>
                </div>
            </div>
        );
    }

    if (!bikeData) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <p className="text-gray-600 font-medium">Bike not found</p>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 sm:py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid3)" />
                    </svg>
                </div>
                <div className="absolute bottom-0 right-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Edit Bike Details</h1>
                    <p className="text-indigo-100 text-lg">Update the specifications of {bikeData.bikeName}</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Current Info */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Current Bike Information</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-indigo-200">
                                    <span className="text-gray-600 font-medium">Brand</span>
                                    <span className="text-gray-900 font-bold">{bikeData.brand}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-indigo-200">
                                    <span className="text-gray-600 font-medium">Model</span>
                                    <span className="text-gray-900 font-bold">{bikeData.bikeName}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-indigo-200">
                                    <span className="text-gray-600 font-medium">Price</span>
                                    <span className="text-green-600 font-bold">${bikeData.bikePrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-indigo-200">
                                    <span className="text-gray-600 font-medium">Fuel Type</span>
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{bikeData.fuelType}</span>
                                </div>
                                <div className="pt-4">
                                    <span className="text-gray-600 font-medium block mb-3">Features</span>
                                    <div className="flex flex-wrap gap-2">
                                        {bikeData.features.map((feat, idx) => (
                                            <span key={idx} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Pro Tip</h4>
                                    <p className="text-sm text-gray-600">Update all details accurately to keep your collection organized</p>
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
                                    className={`w-full px-4 py-3 border rounded-lg font-medium transition-all focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${error.brand ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-indigo-400'}`}
                                >
                                    <option value="">Select Brand</option>
                                    {brandName.map((brand) => (
                                        <option key={brand} value={brand}>{brand}</option>
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
                                    className={`w-full px-4 py-3 border rounded-lg font-medium transition-all focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${error.bikeName ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-indigo-400'}`}
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
                                    className={`w-full px-4 py-3 border rounded-lg font-medium transition-all focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${error.bikePrice ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-indigo-400'}`}
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
                                    className={`w-full px-4 py-3 border rounded-lg font-medium transition-all focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${error.fuelType ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-indigo-400'}`}
                                >
                                    <option value="">Select Fuel Type</option>
                                    {fuelType.map((fuel) => (
                                        <option key={fuel} value={fuel}>{fuel}</option>
                                    ))}
                                </select>
                                {error.fuelType && <p className="text-red-500 text-xs mt-1 font-medium">{error.fuelType}</p>}
                            </div>

                            {/* Features */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-3">Features *</label>
                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                    {features.map((feature) => (
                                        <label key={feature} className="flex items-center cursor-pointer group p-2 rounded-lg hover:bg-indigo-50 transition-colors">
                                            <input
                                                type="checkbox"
                                                name="features"
                                                value={feature}
                                                checked={bikeData.features.includes(feature)}
                                                onChange={onChangeFeatures}
                                                className="w-5 h-5 text-indigo-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 transition cursor-pointer"
                                            />
                                            <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">{feature}</span>
                                        </label>
                                    ))}
                                </div>
                                {error.features && <p className="text-red-500 text-xs mt-2 font-medium">{error.features}</p>}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-6 border-t border-gray-200">
                                <button
                                    type="submit"
                                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => router.push("/viewBike")}
                                    className="flex-1 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition-all duration-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}