import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
function LoginSection() {
    return (
        <>
            <div className="w-60 p-5 shadow-xl m-auto mt-40 flex items-center justify-center">
                <button onClick={() => signIn()} className="text-4xl flex items-center gap-3"><FcGoogle /> <span className="text-xl">Sign in with</span></button>
            </div>
        </>
    )
}
export default LoginSection;