import React, { useState, useEffect } from "react";
import AnimalBasicInfoForm from "./AnimalBasicInfoForm";
import AdoptionInfoForm from "./AdoptionInfoForm";
import MedicalInfoForm from "./MedicalInfoForm";

const Animal = ({
    updateAniamlBasicInfo,
    updateAniamlAdop,
    updateAniamlMed,
}) => {
    const [animalInfo, setAnimalInfo] = useState("");
    const [animalAdoptionInfo, setAnimalAdoptionInfo] = useState("");
    const [animalMedicalInfo, setAnimalMedicalInfo] = useState("");
    //Get the pet's id from the URL in order to do the queries
    const pathParts = window.location.pathname.split("/");
    const animalUrlId = parseInt(pathParts[pathParts.length - 1], 10);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        };
        fetch(`http://localhost:3000/single/${animalUrlId}`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setAnimalInfo(data.singleInfoData[0]);
                data.adoptionInfoInfoData.length > 0 &&
                    setAnimalAdoptionInfo(data.adoptionInfoInfoData[0]);
                data.medicalInfoInfoInfoData.length > 0 &&
                    setAnimalMedicalInfo(data.medicalInfoInfoInfoData[0]);
            });
    }, []);

    return (
        <div className="bottom-padding">
            <AnimalBasicInfoForm
                animalInfo={animalInfo}
                headerName={"Basic Info"}
                updateAniamlBasicInfo={updateAniamlBasicInfo}
                animalUrlId={animalUrlId}
            />
            <MedicalInfoForm
                animalMedicalInfo={animalMedicalInfo}
                headerName={"Medical Info"}
                updateAniamlMed={updateAniamlMed}
                animalUrlId={animalUrlId}
            />
            <AdoptionInfoForm
                animalAdoptionInfo={animalAdoptionInfo}
                headerName={"Adoption Info"}
                updateAniamlAdop={updateAniamlAdop}
                animalUrlId={animalUrlId}
            />
        </div>
    );
};

export default Animal;
