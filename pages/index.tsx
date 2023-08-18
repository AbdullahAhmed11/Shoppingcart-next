import React, { useState, useEffect } from "react"
import Banner from "@/components/Banner/Banner"
import Layout from "@/components/Layout/Layout"
import HomeSection from "@/components/Home/HomeSection"
import { MainSeo } from "@/components/Seo/MainSeo"

export default function Home() {
    return (
        <>
            <div>
                <MainSeo
                    title='Shopping Cart - Best Online Shopping Platform'
                    description='The one stop shop for all your shopping needs.'
                    image='/store.png'
                >

                    <Layout>
                        <Banner />
                        <div className="mb-10">
                            <HomeSection />
                        </div>
                    </Layout>
                </MainSeo>
            </div>
        </>
    )
}