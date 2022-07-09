import React, { useState } from "react"
import { validName, validEmail } from "./Regex.js"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./register.css"

const Register = () => {
  const [nameerror, setNameerror] = useState("")
  const [emailerror, setEmailerror] = useState("")
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: "",
  })

  const handleChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target

    if (user.name.length === 0 ? false : !validName.test(user.name)) {
      setNameerror("Please enter a valid name")
    } else if (user.email.length === 0 ? false : !validEmail.test(user.email)) {
      setEmailerror("Please enter a valid email")
    } else {
      setNameerror("")
      setEmailerror("")
    }

    setUser({
      ...user, //spread operator
      [name]: value,
    })
  }

  //register function
  const egister = (e) => {
    e.preventDefault()
    const { name, email, mobile, country, city, state, message } = user
    if (
      name &&
      validName.test(name) &&
      validEmail.test(email) &&
      email &&
      mobile &&
      country &&
      city &&
      state &&
      message
    ) {
      toast.success("Registered successfully")
    } else {
      toast.error("Please Check all the fields")
    }
  }

  return (
    <>
      <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account ?
          <a
            href="/Login"
            className="text-sm text-blue-500 underline hover:text-blue-700"
          >
            Sign in
          </a>
        </span>
        <div className="p-6 mt-8">
          <form action="#">
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="FullName"
                />
              </div>
              <span className="errorName">{nameerror}</span>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <span className="errorName">{emailerror}</span>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="mobile"
                  value={user.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="country"
                  value={user.country}
                  onChange={handleChange}
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                  placeholder="City"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="state"
                  value={user.state}
                  onChange={handleChange}
                  placeholder="State"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="message"
                  value={user.message}
                  onChange={handleChange}
                  placeholder="Message"
                />
              </div>
            </div>
            <div className="flex w-full my-4">
              <button
                type="submit"
                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={egister}
              >
                Register
              </button>
            </div>
            <span className="errorName">
              {<ToastContainer theme="colored" />}
            </span>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
