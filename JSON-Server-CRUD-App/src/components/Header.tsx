import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { productTypeWithId } from "../utils/type";
import { fetchAll } from "../services/cartService";

export default function Sidebar() {

    const [cartProducts, setCartProducts] = useState<productTypeWithId[]>([]);

    useEffect(() => {
        fetchAllProducts();
    }, []);

    async function fetchAllProducts() {
        const res = await fetchAll();

        setCartProducts(res);
    }

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-200 bg-white/80 backdrop-blur-md transition-transform dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex h-full flex-col justify-between px-4 py-6">

                {/* Top Section: Logo & Nav */}
                <div>
                    {/* Brand/Logo */}
                    <div className="mb-10 flex items-center gap-3 px-2">
                        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
                            <span className="text-lg font-bold text-white italic">G</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Brand</span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mt-6 px-3">
                        <ul className="flex flex-col gap-2 text-sm font-medium">
                            <li>
                                <Link
                                    to="/"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 transition-all hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                    </svg>
                                    Product Catalog
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="add-product"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 transition-all hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    Add Product
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="view-product"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 transition-all hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    View Product
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Bottom Section: Cart/Actions */}
                <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                    <Link
                        to="add-to-cart"
                        className="group flex items-center justify-between rounded-xl bg-slate-50 p-3 text-slate-600 transition-all hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                    >
                        <div className="flex items-center gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6 transition-transform group-hover:scale-110"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                            <span className="text-sm font-semibold">My Cart</span>
                        </div>
                        <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs text-white">{cartProducts.length}</span>
                    </Link>
                </div>
            </div>
        </aside>
    );
}