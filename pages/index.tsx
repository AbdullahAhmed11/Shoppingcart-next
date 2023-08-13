import React, { useState, useEffect } from "react"
import NavBar from "@/components/Navbar/NavBar"
import Banner from "@/components/Banner/Banner"
import Layout from "@/components/Layout/Layout"

export default function Home() {



    return (
        <>
            <div>
                <Layout>
                    <Banner />
                </Layout>
            </div>
        </>
    )
}