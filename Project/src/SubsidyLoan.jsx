import React, { useState } from "react";

function SubsidyLoanForm() {
  const [agree, setAgree] = useState(false);
  const handleTermsAndCondition = () => {
    setAgree(!agree);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (agree) {
      // Submit the form data if the user agrees to the terms and conditions
      console.log("Form submitted successfully!");
    } else {
      // Show an error message if the user doesn't agree to the terms and conditions
      alert("Please agree to the terms and conditions before submitting.");
    }
  };
  return (
    <>
      <h1 className="text-center font-extrabold my-5 lg:text-3xl">Apply for a Subsidy Loan</h1>
      <form action="" method="post" className="flex flex-col justify-center items-center gap-5 w-full px-3 lg:px-20 my-4">
        {/* PAN Card */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">PAN Card</h1>
          <input type="text" placeholder="Enter PAN Card Number" className="w-full lg:w-5/6 h-12 px-5 border border-black outline-none rounded-lg"
          />
        </div>
        {/* Aadhar Card */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">Aadhar Card</h1>
          <input type="text" placeholder="Enter Aadhar Card Number" className="w-full lg:w-5/6 h-12 px-5 border border-black outline-none rounded-lg"
          />
        </div>
        {/* Electricity Bill */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">Electricity Bill</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        {/* Rent Agreement */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">Rent Agreement</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        {/* Bank Statement */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">Bank Statement</h1>
          <input type="file" className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        {/* Terms And Condition Box */}
        <div className="w-full flex flex-col lg:flex-row justify-start gap-2">
          <input onClick={handleTermsAndCondition} type="checkbox" className="inline form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"/>
          <p>By applying, you agree to all the{" "}<a className="text-blue-400" href="">{" "}terms and conditions</a></p>
        </div>
        <button type="submit" onClick={handleSubmit} className="w-[30%] lg:w-[20%] px-5 py-2 text-center rounded-lg text-green-500 bg-white border-2 border-green-500 hover:text-white hover:scale-105 hover:bg-green-500 hover:border-green-500 duration-200">Submit</button>
      </form>
    </>
  );
}

export default SubsidyLoanForm;
