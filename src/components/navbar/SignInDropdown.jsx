// import React from 'react'

import QuickLinks from "./QuickLinks"
import SignInSIgnUp from "./SignInSIgnUp"

function SignInDropdown() {
  return (
    <div className="absolute flex flex-col-reverse lg:flex-row items-start py-10 px-5 lg:px-20 bg-[#f5f7f8] w-full gap-14 lg:gap-60 z-50">
        <QuickLinks/>
        <SignInSIgnUp/>
    </div>
  )
}

export default SignInDropdown