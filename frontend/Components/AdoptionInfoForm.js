import React, { useState, useEffect, useCallback } from "react";

const AdoptionInfoForm = ({
    animalAdoptionInfo,
    headerName,
    updateAniamlAdop,
    animalUrlId,
}) => {
    const [initialAdop, setUpInitialAdop] = useState(false);
    const [upDateIconAdop, setUpDateIconAdop] = useState(false);
    const [upDatesAdop, setUpDatesAdop] = useState(animalAdoptionInfo);

    //useCallback and useEffect are used to wait for the data before loading the animal info
    const initiationAdop = useCallback(() => {
        upDatesAdop.length !== 0 && setUpInitialAdop(true);
    });

    useEffect(() => {
        initiationAdop();
    }, [upDatesAdop]);

    //Use the edit Icon to show the save buttom
    const handleIcoUpdateAdop = () => {
        setUpDateIconAdop(!upDateIconAdop);
    };

    const handleUpdateChangeAdop = (e) => {
        // Updates only if upDateIconMed is set to true (the edit icome was clicked)
        const newData = {
            ...upDatesAdop,
            [e.target.name]: e.target.value,
            id: animalUrlId,
        };
        upDateIconAdop && setUpDatesAdop(newData);
    };

    //Send updates to the database and alerts the user of the change
    const handleUpdateSubmitAdop = (e) => {
        e.preventDefault();
        updateAniamlAdop(upDatesAdop);
        alert(`${upDatesAdop.name} adoption info has been updated`);
        setUpDateIconAdop(false);
    };

    return (
        <div>
            <form
                className="ui form large segment"
                onSubmit={handleUpdateSubmitAdop}
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
                    <label>Adoption Date</label>
                    <input
                        className="content"
                        type="text"
                        name="adoptionDate"
                        value={
                            !initialAdop
                                ? animalAdoptionInfo.adoptionDate
                                : upDatesAdop.adoptionDate
                        }
                        onChange={handleUpdateChangeAdop}
                    />
                </div>
                <div className="field">
                    <div className="two fields">
                        <div className="field">
                            <label>First Name</label>
                            <input
                                className="content"
                                type="text"
                                name="firstName"
                                value={
                                    !initialAdop
                                        ? animalAdoptionInfo.firstName
                                        : upDatesAdop.firstName
                                }
                                onChange={handleUpdateChangeAdop}
                            />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input
                                className="content"
                                type="text"
                                name="lastName"
                                value={
                                    !initialAdop
                                        ? animalAdoptionInfo.lastName
                                        : upDatesAdop.lastName
                                }
                                onChange={handleUpdateChangeAdop}
                            />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Address</label>
                    <input
                        className="content"
                        type="text"
                        name="address"
                        value={
                            !initialAdop
                                ? animalAdoptionInfo.address
                                : upDatesAdop.address
                        }
                        onChange={handleUpdateChangeAdop}
                    />
                </div>
                <div className="field">
                    <label>Phone</label>
                    <input
                        className="content"
                        type="text"
                        name="phone"
                        value={
                            !initialAdop
                                ? animalAdoptionInfo.phone
                                : upDatesAdop.phone
                        }
                        onChange={handleUpdateChangeAdop}
                    />
                </div>
                {upDateIconAdop && (
                    <button className="ui black button wide">Save</button>
                )}
            </form>
        </div>
    );
};

export default AdoptionInfoForm;
