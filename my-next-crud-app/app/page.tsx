'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Your Perfect <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">Bike Awaits</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Discover, manage, and organize your motorcycle collection with ease. The ultimate platform for bike enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/viewBike"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Bikes
            </Link>
            <Link
              href="/addBike"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg border-2 border-white hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Add Your Bike
            </Link>
          </div>
        </div>

        {/* Animated Circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Why Choose Bikes.</h2>
          <p className="text-xl text-gray-600">Complete motorcycle management made simple and intuitive</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-white">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Management</h3>
            <p className="text-gray-600">Add, edit, and delete motorcycles from your collection with just a few clicks.</p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-white">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast & Responsive</h3>
            <p className="text-gray-600">Lightning-fast interface built with modern technologies for the best user experience.</p>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-white">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Storage</h3>
            <p className="text-gray-600">All your bike data is stored securely with local storage for complete privacy.</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Free to Use</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Available Always</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">∞</div>
              <p className="text-blue-100">Add Unlimited Bikes</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Build Your Collection?</h2>
        <p className="text-xl text-gray-600 mb-8">Start managing your bikes today with our intuitive platform.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/viewBike"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View Collection
          </Link>
          <Link
            href="/addBike"
            className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-300 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Add New Bike
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Bikes. All rights reserved. Built with ❤️ for bike enthusiasts.</p>
        </div>
      </footer>
    </div>
  );
}
