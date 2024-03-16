


// import JournalData from "../../data/journalData"
// import ConferenceData from "../../data/ConferenceData";
import Conference from "../../components/conferences/Conference";
// import ShowDataPoints from "../../components/showDataPoints/ShowDataPoints"
export default function Conferences(){


	return (
		<>
		
		<Conference
		showMoreConferences={false}
		/>
		
		</>
	)
}

// export default function Journals(){


//     return(
//         <>
//         <section className="py-2 sm:py-5 mt-1 sm:mt-4">
// 			<div className="text-center">
// 				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
// 					Conferences
// 				</p>
// 			</div>


//                 <div >
// 					{
// 						ConferenceData.map(function(conference){
//                             console.log(conference.id);
// 							return (
// 								<div key={conference.id} className=" flex justify-center">
// 								<div
// 								className="font-general-medium flex justify-start p-4 items-center w-[70%] mt-8 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
// 							>
// 								<div className="flex ">
// 								<span className="mx-2">{conference.id}.</span>
// 								<span className="text-sm sm:text-lg duration-100">
// 								{conference.text}
// 								</span>
// 								</div>
// 							</div>
// 								</div>
// 							)
// 						})
// 					}
// 				</div>
// 		</section>
//         </>
//     )
// }