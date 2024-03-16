
import Carousel from "../../components/carausel/Carausel"
import Image from "next/image"
import awardAndRecognitions from "../../data/awardAndRecognitionData"
import { certificates } from "../../data/certificates"
import ShowDataPoints from "../../components/showDataPoints/ShowDataPoints"
export default function Resources(){

    console.log("certificates: ",certificates)
    return(
        <>


        {/* certificate carousel */}
        <div className="my-20">
        <Carousel src={certificates} />
        </div>

            {/* Award and Achievements */}

           <>

           <section className="py-15 sm:py-20 mt-1 sm:mt-4">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
						Award and Recognitions
					</p>
				</div>

				<ShowDataPoints
					data={awardAndRecognitions}
				/>

				
			</section>
           </>


            {/* Events carousel*/}
        
        </>
    )

}