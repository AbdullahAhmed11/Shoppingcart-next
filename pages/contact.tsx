import ContactSection from "@/components/Contact/ContactSection"
import Layout from "@/components/Layout/Layout"
import { MainSeo } from "@/components/Seo/MainSeo"
import React from "react"


export default function Contact() {
    return (
        <>
            <MainSeo
                title='Shopping Cart | Contact'
                description='We are here to help you if you have problem.'
                image='/store.png'
                url='/contact'
            >
                <Layout>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center mt-20 dark:text-white">
                            <h1 className="text-4xl font-bold mb-20">Contact</h1>
                        </div>
                        <div>
                            <ContactSection />
                        </div>
                    </div>
                </Layout>

            </MainSeo>

        </>
    )
}