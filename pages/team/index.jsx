import TeamProfile from "../../components/teamProfile/TeamProfile"
import teamData from "../../data/teamData";
import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiGlobe,
    FiYoutube,
} from 'react-icons/fi';
import { SiGooglescholar, SiOrcid } from "react-icons/si";

export default function Team() {


    const socialLinks = [
        {
            id: 1,
            icon: <FiLinkedin />,
            url: 'https://www.linkedin.com/in/dr-shailesh-m-pandey-34961820/?originalSubdomain=in',
        },
        {
            id: 2,
            icon: <SiGooglescholar />,
            url: 'https://scholar.google.co.in/citations?user=NquFNIsAAAAJ&hl=en',
        },
        {
            id: 3,
            icon: <SiOrcid />,
            url: 'https://orcid.org/0000-0002-9942-4238',
        },
    ];

    return (
        <>
            <div
                style={{ width: '100vw', height: '20rem',backgroundColor:'blue',display:'flex',flexDirection:'column',justifyContent: 'center'}}

                className="my-12"
            >
            <p className="text-white font-bold text-[2rem] text-center tracking-wide">Team picture will be here</p>
                {/* Group photo */}
            </div>

            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Team Leader
                </p>
            </div>


            <section className="w-[90%] lg:w-[75%] border-2 m-7 flex flex-col  rounded-xl shadow-xl border-gray-200 mx-auto h-[50rem] lg:h-[25rem] ">
                {/* show Image here */}

                <section className="w-full h-full flex flex-col lg:flex-row justify-center items-center ">
                    <div
                        style={{ backgroundImage: `url(${"/images/certificates/cert1.png"})`,
                         backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}
                        className="bg-red-600 w-full h-[40%] lg:w-[30%] lg:h-[90%] m-4"
                    >

                    </div>

                    {/* About the Team leader */}

                    <div className=" w-[1/2] h-auto  py-[2rem] lg:py-0 lg:w-[64%] flex justify-center flex-col px-4 lg:px-12 text-left">

                        <p className=" font-semibold text-[1.4rem] sm:text-[1.6rem] lg:text-[1.3rem]">Shailesh M. Pandey</p>
                        <p className="font-medium text-lg sm:text-xl ">Associate Professor</p>
                        <p className="pb-1 lg:pb-3 font-normal">Deparment of Mechanical Engineering</p>
                        {/* <p className="pt-3 font-medium "> Google Scholar: <span className="font-normal" >{"https://scholar.google.co.in/citations?user=NquFNIsAAAAJ&hl=en"}</span></p> */}
                        <p className="font-medium "> Email: <span className="font-normal" >{"smp.me@nitp.ac.in"}</span></p>
                        <p className="font-medium">office: <span className="font-normal" >{"8750111166"}</span></p>
                        <p className="font-medium">Research Areas: <span className="font-normal" >{"Associate Editor, MAPAN (Journal of Metrology Society of India, SCI, Impact factor: 1.0 (2022) Tribology, Coating, Wear, Friction, Surface Modification, Industry 4.0/5.0 Associate Editor, MAPAN (Journal of Metrology Society of India, SCI, Impact factor: 1.0 (2022)"}</span></p>

                        <div className="p-7">

                            <ul className="flex gap-4 sm:gap-8">
                                {socialLinks.map((link) => (
                                    <a
                                        href={link.url}
                                        target="__blank"
                                        key={link.id}
                                        className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 lg:p-3 duration-300"
                                    >
                                        <i className="text-xl sm:text-2xl md:text-3xl">
                                            {link.icon}
                                        </i>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </section>



                                        {/* To be removed */}
{/* 
            <section>
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                </a>
            </section> */}


            <section className="w-[100vw] m-3 p-4">

                <div className="text-center">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                        Post Doctoral Fellow
                    </p>
                </div>
                {/* post doctoral fellow */}


                {/* Below is the map for showing the post doc cards similar method can be used to show other posts as well */}
                {teamData.map(function (member) {
                    return (member.post === "pd") ? (<>
                        <TeamProfile
                            data={member}
                        />
                    </>) : null
                })}


            </section>

            

        </>
    )
}