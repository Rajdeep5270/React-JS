import Link from "next/link";

export default function Header() {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur-sm bg-opacity-95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo/Brand */}
                    <Link href="/" className="flex-shrink-0 flex items-center group">
                        <div className="text-2xl font-black tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors">
                            <span>Bikes</span><span className="text-blue-600">.</span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <ul className="hidden sm:flex space-x-8 items-center">
                        <li>
                            <Link
                                href="/"
                                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
                            >
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/addBike"
                                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
                            >
                                Add Bike
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/viewBike"
                                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
                            >
                                View Bikes
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <details className="dropdown">
                            <summary className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </summary>
                            <ul className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 border border-gray-200">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/addBike">Add Bike</Link></li>
                                <li><Link href="/viewBike">View Bikes</Link></li>
                            </ul>
                        </details>
                    </div>

                </div>
            </div>
        </nav>
    );
}