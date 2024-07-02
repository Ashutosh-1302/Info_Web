
import React from 'react';
import laboratoryData from '../../data/laboratoryData';


function MechanicalTestingLab() {
    const currentLab = laboratoryData['Mechanical Testing Lab'];

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

            {currentLab.equipment?.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col md:flex-row mb-8">
                        {/* Alternate image position based on index (odd/even) */}
                        {index % 2 === 0 && (
                            <>
                                <img src={item.imageUrl} alt={item.name} className="w-full md:w-2/5 h-2/5 mb-4 md:mb-0 md:mr-4 p-8" />
                                <div className="md:w-1/2">
                                    <h4 className="text-lg font-semibold">{item.name}</h4>
                                    <p className='text-lg '>{item.text2}</p>
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
                                    <p className='text-lg '>{item.text2}</p>
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
                                <img src={item.imageUrl} alt={item.name} className="w-full md:w-2/5 h-2/5 mb-4 md:mb-0 md:mr-4 p-8" />
                            </>
                        )}
                    </div>

                    <div className="border-t-2 border-black my-4 py-6"></div>
                </React.Fragment>
            ))}

           
        </div>
    );
}



export default MechanicalTestingLab;