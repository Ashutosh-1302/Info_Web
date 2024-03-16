
import Link from "next/link"
import Button from "../reusable/Button"

// import JournalData from "../../data/journalData"
export default function ShowDataPoints({data}){


    return(
         <>
        

                <div>
					{
						data.map(function(payload){

							
							return (
								payload.id <= 4 ? (
									<div key={payload.id}>
									<div
									className="font-general-medium flex justify-center mx-auto items-center w-[90%] mt-8 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
								>
									<div className="flex ">
									<span className="mx-2">&#9679;</span>
									<span className="text-sm sm:text-lg w-[90%] duration-100">
									{payload.text}
									</span>
									</div>
								</div>
									</div>
								):null
							)
						})
					}
				</div>

			
        </>
    )
}   