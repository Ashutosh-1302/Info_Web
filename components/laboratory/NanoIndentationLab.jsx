import React from 'react';
import laboratoryData from '../../data/laboratoryData';


function NanoIndentationLab() {
    const currentLab = laboratoryData['Nano-Indentation Lab'];

    return (
        <div className="lab-content-container p-8">
            <h2 className="text-3xl font-semibold mb-8 mt-4 uppercase">{currentLab.title}</h2>
            <p className="mb-4">{currentLab.description}</p>


            <ul className="list-disc list-inside mb-4">
                {currentLab.capabilities?.map((capability, index) => (
                    <li key={index}>{capability}</li>
                ))}
            </ul>

            <div className="border-t-2 border-black my-4 py-6"></div>

            {/* Equipment Sections */}
            {currentLab.equipment?.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col md:flex-row mb-8">
                        {/* Alternate image position based on index (odd/even) */}
                        {index % 2 === 0 && (
                            <>
                                <img src={item.imageUrl} alt={item.name} className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4" />
                                <div className="md:w-1/2">
                                    <h4 className="text-lg font-semibold">{item.name}</h4>
                                    <p className='text-lg '>{item.text2}</p>
                                    {item.specs && item.specs.length > 0 && (
                                        <p className="font-semibold">Specification:-</p>
                                    )}
                                    <ul className="list-disc list-inside">
                                        {item.specs?.map((spec, i) => (
                                            <li key={i}>{spec}</li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}
                        {index % 2 !== 0 && (
                            <>
                                <div className="md:w-1/2">
                                    <h4 className="text-lg font-semibold">{item.name}</h4>
                                    <p className='text-lg p-auto '>{item.text2}</p>
                                    <p className='text-lg '>{item.text2}</p>
                                    {item.specs && item.specs.length > 0 && (
                                        <p className="font-semibold">Specification:-</p>
                                    )}
                                    <ul className="list-disc list-inside">
                                        {item.specs?.map((spec, i) => (
                                            <li key={i}>{spec}</li>
                                        ))}
                                    </ul>
                                </div>
                                <img src={item.imageUrl} alt={item.name} className="w-full md:w-1/2 mb-4 md:mb-0 md:ml-4" />
                            </>
                        )}
                    </div>

                    {/* Add the divider line after EVERY equipment item */}
                    <div className="border-t-2 border-black my-4 py-6"></div>
                </React.Fragment>
            ))}


        </div>
    );
}



export default NanoIndentationLab;