
import React, { useState } from 'react';
import LabButtons from './LabButtons';
import PlasmaSprayCoatingLab from './PlasmaSprayCoatingLab';
import MechanicalTestingLab from './MechanicalTestingLab';
import MetallographicAndCorrosionLab from './MetallographicAndCorrosionLab';
import NanoIndentationLab from './NanoIndentationLab';
import HeatTreatmentLab from './HeatTreatmentLab';

function LabContent() {
    const [activeLab, setActiveLab] = useState('Plasma Spray Coating Lab');

    const labComponents = {
        'Plasma Spray Coating Lab': PlasmaSprayCoatingLab,
        'Mechanical Testing Lab': MechanicalTestingLab,
        'Metallographic and Corrosion Lab': MetallographicAndCorrosionLab,
        'Nano-Indentation Lab': NanoIndentationLab,
        'Heat Treatment Lab': HeatTreatmentLab
    };

    const CurrentLabComponent = labComponents[activeLab];

    return (
        <div className="lab-section w-full">
            <LabButtons labs={Object.keys(labComponents)} activeLab={activeLab} setActiveLab={setActiveLab} />
            <CurrentLabComponent />
        </div>
    );
}



export default LabContent;
