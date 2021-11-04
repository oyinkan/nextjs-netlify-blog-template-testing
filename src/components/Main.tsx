import React from "react"

export default function Main() {
  return(
    <main>
      <div className="text-center">
        <h1 className="text-white font-bold text-7xl">Turn Your Dream Into Reality</h1>
        <p className="mx-16 sm:w-2/5 sm:mx-auto my-6 text-xl text-gray-400 font-medium">Every Week, I will send you a letter that will reveal the secrets behind how i were from poor immigrant to millionaire without luck and realise my wildest dreams.</p>
        <form className="mx-16 sm:w-2/5 sm:mx-auto pt-6">
          <div className="relative flex items-center">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent shadow-sm h-20 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-12 text-xl font-medium text-gray-300 border border-gray-300 rounded-3xl"
              placeholder="Email"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <button className="bg-white rounded-3xl px-10 text-xl font-medium text-dark hover:bg-black hover:text-white">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
