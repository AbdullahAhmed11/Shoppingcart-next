import NavBar from "@/components/Navbar/NavBar"
import React from "react"
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