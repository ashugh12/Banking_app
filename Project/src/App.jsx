

function App() {
  return (
      <div>
        <h1 className="text-center font-extrabold lg:text-3xl border-b-2 border-gray-200 text-gray-600 p-10">Apply for a Home Loan</h1>
      <form action="" method="post" className="flex flex-col justify-center items-center gap-5 max-w-screen-md lg:px-20 my-10">
        <input type="text" placeholder="Enter Aadhar Card Number" className="w-full h-12 px-5 border border-black outline-none rounded-lg"/>
        <input type="text" placeholder="Enter PAN Card Number" className="w-full h-12 px-5 border border-black outline-none rounded-lg"
        />
        {/* Bank Statement */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">Bank Statement</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        {/* Property Paper */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">Property Paper</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        {/* Income Proof */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">Income Proof</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        {/* Electricity Bill */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">Electricity Bill</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        {/* Property Tax */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">Property Tax</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        {/* 2 Check */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">2 Check</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        {/* 2 Photo */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">2 Photos</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        {/* Co-App Documents */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">Co-App Documents</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>

        {/* Terms And Condition Box */}
        <div className="w-full flex flex-col lg:flex-row justify-start gap-2">
          <input
            // onClick={handleTermsAndCondition}
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
          />
          <p>
            By applying, you agree to all the{" "}
            <a className="text-blue-400" href="">
              {" "}
              terms and conditions
            </a>
          </p>
        </div>
        <button
          type="submit"
          // onClick={handleSubmit}
          className="w-[20%] px-5 py-2 rounded-lg text-green-500 bg-white border-2 border-green-500 hover:text-white hover:scale-105 hover:bg-green-500 hover:border-green-500 duration-200"
        >
          Submit
        </button>
      </form>
      </div>
  )
}

export default App
