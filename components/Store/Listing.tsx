import React, { useState, useEffect, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { Products } from "@/lib/api/products";
import { useRouter } from "next/router";
import { QueryType } from "./Aside";
import { filterQuery } from "@/lib/query";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
type ListingProps = {
    allProducts: Products
}

export function Listing({ allProducts }: ListingProps) {
    const [currentCategory, setCurrentCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const { isReady, pathname, query: { search, category } } = useRouter() as QueryType

    useEffect(() => {
        if (!isReady) setIsLoading(true)
        else {
            const timeoutID = setTimeout(() => setIsLoading(false), 500);
            return () => clearTimeout(timeoutID)
        }
    }, [isReady])

    useEffect(() => {
        if (pathname === "/store") setSearchQuery(search ?? '')
    }, [search])

    useEffect(() => {
        if (pathname === '/store') setCurrentCategory(category ?? null);
    }, [category]);

    let filteredProducts = allProducts.filter(
        ({ category }) => category === currentCategory || !currentCategory
    );

    if (searchQuery)
        filteredProducts = filteredProducts.filter(({ title }) =>
            filterQuery(title, searchQuery)
        );

    const productsNotFound = filteredProducts.length === 0;

    const key = useMemo(() => Math.random(), [currentCategory, searchQuery]);

    return (

        <>
            <MaxWidthWrapper>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:ml-20 ">
                    {
                        isLoading ? (
                            <>
                                <p>Loading...</p>
                            </>
                        ) : (
                            filteredProducts.map((productData) => (
                                <ProductCard productData={productData} key={productData.id} />
                            ))
                        )
                    }
                </div >
            </MaxWidthWrapper>
        </>
    )
}