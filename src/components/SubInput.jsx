import React from "react";

function SubInput() {
    const [email, setEmail] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [buttonText, setButtonText] = React.useState("SIGN UP");

    function handleChange(e) {
        setErrorMessage("");
        setButtonText("SIGN UP")
        setEmail(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegEx.test(email)) {
            setErrorMessage("You will be hearing from us shortly!");
            setButtonText("THANK YOU!");
        } else {
            setErrorMessage("Please enter a valid email address.");
        }
    }

    return (
        <div className="text-white">
            <h1 className="mb-4 font-bold text-3xl">
                Get our newsletter, join the community:
            </h1>
            <form
                className="flex flex-col md:flex-row w-full"
                onSubmit={(event) => handleSubmit(event)}
            >
                <input
                    type="text"
                    className={`rounded-md md:rounded-none p-4 text-lg text-black flex-1 ${
                        errorMessage === "Please enter a valid email address."
                            ? "bg-[#ffbbbb]"
                            : ""
                    }`}
                    placeholder="Email Address"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    value={email}
                />
                <button
                    className={`text-center p-4 md:p-0 md:w-[25%] text-base font-bold ${
                        errorMessage === "Please enter a valid email address."
                            ? "bg-[#db1802]"
                            : "bg-[#00a4a6]"
                    }`}
                >
                    {buttonText}
                </button>
            </form>
            {errorMessage && (
                <p className="mt-1 mb-4 text-lg md:text-xl">{errorMessage}</p>
            )}
        </div>
    );
}

export default SubInput;
