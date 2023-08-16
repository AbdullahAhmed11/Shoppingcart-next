import React, { useState, useEffect } from "react";
import { getAllProducts } from "@/lib/api/products";
import { useShoppingCart } from "@/lib/context/shopping-cart";
import { InferGetServerSidePropsType } from "next/types";
import { Products } from "@/lib/api/products";
import Layout from "@/components/Layout/Layout";
import { Aside } from "@/components/Store/Aside";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { Listing } from "@/components/Store/Listing";
import { MainSeo } from "@/components/Seo/MainSeo";
type StaticProps = {
    props: {
        allProducts: Products
    }
}

export async function getStaticProps(): Promise<StaticProps> {
    const allProducts = await getAllProducts();

    return {
        props: {
            allProducts
        }

    }
}


function Store({ allProducts }: InferGetServerSidePropsType<typeof getStaticProps>) {
    useEffect(() => {
        console.log(allProducts)
    }, [])
    return (
        <>
            <MainSeo
                title='Shopping Cart | Store'
                description='You can find everything you need here.'
                image='/store.png'
                url='/store'
            >
                <Layout>
                    <MaxWidthWrapper>
                        <div className='flex flex-col items-start gap-6 md:flex-row md:gap-8'>

                            <Aside />
                            <Listing allProducts={allProducts} />
                        </div>
                    </MaxWidthWrapper>
                </Layout>

            </MainSeo>
        </>
    )
}
export default Store;