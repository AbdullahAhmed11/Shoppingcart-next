import React from "react"
import { RiCustomerServiceFill, RiRobotFill } from '@/assets/icon';
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";


export default function ContactSection() {

    return (
        <>
            <MaxWidthWrapper>
                <div className=" items-center flex-col md:flex-row flex gap-3">
                    <div className="border-2 rounded-md shadow-md flex flex-col gap-3 p-3 items-center justify-center dark:text-white">
                        <div className="flex items-center p-2 justify-center w-50 h-50 rounded-full border-2">
                            <RiCustomerServiceFill size={50} />
                        </div>
                        <div>
                            <h1 className="text-2xl">Talk to our customer service</h1>
                        </div>
                        <div>
                            <h1 className="text-xl text-center">"We'll help you answer your question and try to solve your problem.</h1>
                        </div>
                        <div>
                            <button
                                className="w-40 p-3 flex items-center justify-center h-10 border font-bold"
                            >
                                Live
                            </button>
                        </div>
                    </div>
                    <div className="border-2 rounded-md shadow-md flex flex-col gap-3 p-3 items-center justify-center dark:text-white">
                        <div className="flex items-center p-2 justify-center w-50 h-50 rounded-full border-2">
                            <RiCustomerServiceFill size={50} />
                        </div>
                        <div>
                            <h1 className="text-2xl">Talk to our customer service</h1>
                        </div>
                        <div>
                            <h1 className="text-xl text-center">"We'll help you answer your question and try to solve your problem.</h1>
                        </div>
                        <div>
                            <button
                                className="w-40 p-3 flex items-center justify-center h-10 border font-bold"
                            >
                                help center
                            </button>
                        </div>
                    </div>

                </div>

            </MaxWidthWrapper>
        </>
    )
}