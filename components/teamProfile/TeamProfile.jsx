

export default function TeamProfile({ data }) {

    const profilePicture = "/images/certificates/cert1.png"


    // const styleSection = {
    //     background
    // }
    return (
        <>
            

            <section className="w-[90%] lg:w-[75%] border-2 m-7 flex flex-col  rounded-xl shadow-xl border-gray-200 mx-auto h-[50rem] lg:h-[25rem] ">
                {/* show Image here */}

                <section className="w-full h-full flex flex-col lg:flex-row justify-center items-center ">
                    <div
                        style={{
                            backgroundImage: `url(${"/images/certificates/cert1.png"})`,
                            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top'
                        }}
                        className="bg-red-600 w-full h-[40%] lg:w-[30%] lg:h-[90%] m-4"
                    >

                    </div>

                    {/* About the Team leader */}

                    <div className=" w-[1/2] h-auto  py-[2rem] lg:py-0 lg:w-[64%] flex justify-center flex-col px-4 lg:px-12 text-left">

                        <p className=" font-semibold text-[1.4rem] sm:text-[1.6rem] lg:text-[1.3rem]">
                            {data.name}
                        </p>
                        <p className="font-medium text-lg sm:text-xl ">Research Interests: </p>
                        <p className="pb-1 lg:pb-3 font-normal">{data.researchInterest}</p>
                        {/* <p className="pt-3 font-medium "> Google Scholar: <span className="font-normal" >{"https://scholar.google.co.in/citations?user=NquFNIsAAAAJ&hl=en"}</span></p> */}
                        <p className="font-medium "> Google Scholar: <span className="font-normal" >{data.googleScholar}</span></p>
                        <p className="font-medium "> Email: <span className="font-normal" >{data.email}</span></p>
                        <p className="font-medium">office: <span className="font-normal" >{data.office}</span></p>
                        <p className="font-medium">Research Areas: <span className="font-normal" >{"Associate Editor, MAPAN (Journal of Metrology Society of India, SCI, Impact factor: 1.0 (2022) Tribology, Coating, Wear, Friction, Surface Modification, Industry 4.0/5.0 Associate Editor, MAPAN (Journal of Metrology Society of India, SCI, Impact factor: 1.0 (2022)"}</span></p>

                    </div>
                </section>
            </section>

        </>
    )
}

