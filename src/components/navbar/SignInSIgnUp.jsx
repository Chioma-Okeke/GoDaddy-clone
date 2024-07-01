// import React from "react";

function SignInSIgnUp() {
    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:border-l-2 lg:px-6 lg:py-2 lg:w-[40%]">
                <h1 className="text-2xl mb-4 font-semibold">New Customer</h1>
                <p className="text-lg lg:text-xl mb-10">
                    New to GoDaddy? Create an account to get started today
                </p>
                <a
                    href="https://sso.godaddy.com/account/create?realm=idp&path=%2F&app=venture-redirector"
                    className="cursor-pointer bg-white border-2 border-black p-3 transition ease-out hover:text-[#00a4a6] focus:bg-[#00a4a6] focus:border-[#00a4a6] focus:text-white duration-150"
                >
                    Create my Account
                </a>
            </div>
            <div className="lg:border-l-2 lg:px-6 lg:py-2 lg:w-[40%] mb-10">
                <h1 className="text-2xl mb-4 font-semibold">
                    Registered Users
                </h1>
                <p className="text-lg lg:text-xl mb-10">Have an account? Sign in now</p>
                <a
                    href="https://sso.godaddy.com/?realm=idp&path=%2F&app=venture-redirector"
                    className="cursor-pointer bg-black text-white p-3 transition ease-out hover:bg-[#5c5959] focus:bg-[#00a4a6] focus:border-[#00a4a6] focus:text-white duration-150"
                >
                    Sign In
                </a>
            </div>
        </div>
    );
}

export default SignInSIgnUp;
