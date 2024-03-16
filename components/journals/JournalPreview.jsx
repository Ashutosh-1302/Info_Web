import Link from "next/link";
import JournalData from "../../data/journalData"
import Button from '../reusable/Button';
import ShowDataPoints from "../showDataPoints/ShowDataPoints";
export default function Journals(showMoreJournals){


    return(
        <>
        <section className="py-2 sm:py-5 mt-1 sm:mt-4">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Journals
				</p>
			</div>


               <ShowDataPoints
			   data={JournalData}
			   />

			{showMoreJournals && (
				<>
				<div className="mt-10 sm:mt-15 flex justify-center">
				<div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
					<Link href="/journals" aria-label="More Journals" passHref>
						<Button title="More Journals" />
					</Link>
				</div>
			</div>
				</>
			)}
		</section>
        </>
    )
}