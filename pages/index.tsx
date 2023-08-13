import React, { useState, useEffect } from "react"
import NavBar from "@/components/Navbar/NavBar"
import Banner from "@/components/Banner/Banner"
import Layout from "@/components/Layout/Layout"
import HomeSection from "@/components/Home/HomeSection"

export default function Home() {



    return (
        <>
            <div>
                <Layout>
                    <Banner />
                    <div className="mb-10">
                        <HomeSection />
                    </div>
                </Layout>
            </div>
        </>
    )
}