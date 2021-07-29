import React, { useState, useEffect, useCallback } from "react";

const MedicalInfoForm = ({
    animalMedicalInfo,
    headerName,
    updateAniamlMed,
    animalUrlId,
}) => {
    const [initialMed, setUpInitialMed] = useState(false);
    const [upDateIconMed, setUpDateIconMed] = useState(false);
    const [upDatesMed, setupDatesMed] = useState(animalMedicalInfo);

    //useCallback and useEffect are used to wait for the data before loading the animal info
    const initiationMed = useCallback(() => {
        upDatesMed.length !== 0 && setUpInitialMed(true);
    });

    useEffect(() => {
        initiationMed();
    }, [upDatesMed]);

    //Use the edit Icon to show the save buttom
    const handleIcoUpdateAdop = () => {
        setUpDateIconMed(!upDateIconMed);
    };

    const handleUpdateChangeMed = (e) => {
        // Updates only if upDateIconMed is set to true (the edit icome was clicked)
        upDateIconMed &&
            setupDatesMed({
                ...upDatesMed,
                [e.target.name]: e.target.value,
                id: animalUrlId,
            });
    };

    //Send updates to the database and alerts the user of the change
    const handleUpdateSubmitMed = (e) => {
        e.preventDefault();
        updateAniamlMed(upDatesMed);
        alert(`${upDatesMed.name} mediacl info has been updated`);
        setUpDateIconMed(false);
    };

    return (
        <div>
            <form
                className="ui form large segment"
                onSubmit={handleUpdateSubmitMed}
            >
                <div className="field field-flex-row">
                    <h1 className="ui dividing header">{headerName}</h1>
                    <div>
                        <i
                            className="edit icon"
                            onClick={handleIcoUpdateAdop}
                        ></i>
                    </div>
                </div>

                <div className="field">
                    <label>Doctor</label>
                    <input
                        className="content"
                        type="text"
                        name="doctor"
                        value={
                            !initialMed
                                ? animalMedicalInfo.doctor
                                : upDatesMed.doctor
                        }
                        onChange={handleUpdateChangeMed}
                    />
                </div>

                <div className="field">
                    <label>Date</label>
                    <input
                        className="content"
                        type="text"
                        name="date"
                        value={
                            !initialMed
                                ? animalMedicalInfo.date
                                : upDatesMed.date
                        }
                        onChange={handleUpdateChangeMed}
                    />
                </div>

                <div className="field">
                    <label>Chip Number</label>
                    <input
                        className="content"
                        type="text"
                        name="chipNumber"
                        value={
                            !initialMed
                                ? animalMedicalInfo.chipNumber
                                : upDateIconMed.chipNumber
                        }
                        onChange={handleUpdateChangeMed}
                    />
                </div>

                <div className="field">
                    <label>Spay/OrNeuter</label>
                    <input
                        className="content"
                        type="text"
                        name="spayOrNeuter"
                        value={
                            !initialMed
                                ? animalMedicalInfo.spayOrNeuter
                                : upDatesMed.spayOrNeuter
                        }
                        onChange={handleUpdateChangeMed}
                    />
                </div>
                {upDateIconMed && (
                    <button className="ui black button wide">Save</button>
                )}
            </form>
        </div>
    );
};

export default MedicalInfoForm;
