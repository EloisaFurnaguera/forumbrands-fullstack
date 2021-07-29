import React, { useState, useEffect, useCallback } from "react";

const AnimalBasicInfoForm = ({
    animalInfo,
    headerName,
    updateAniamlBasicInfo,
}) => {
    const [initial, setUpInitial] = useState(false);
    const [upDateIcon, setUpDateIcon] = useState(false);
    const [upDates, setupDates] = useState(animalInfo);

    //useCallback and useEffect are used to wait for the data before loading the animal info
    const initiationBasicInfo = useCallback(() => {
        upDates.length !== 0 && setUpInitial(true);
    });

    useEffect(() => {
        initiationBasicInfo();
    }, [upDates]);

    //Use the edit Icon to show the save buttom
    const handleIcoUpdate = () => {
        setUpDateIcon(!upDateIcon);
    };

    const handleUpdateChange = (e) => {
        // Updates only if upDateIcon is set to true (the edit icome was clicked)
        upDateIcon &&
            setupDates({
                ...upDates,
                [e.target.name]: e.target.value,
                id: animalInfo.id,
            });
    };

    //Send updates to the database and alerts the user of the change
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        updateAniamlBasicInfo(upDates);
        alert(`${upDates.name} basic info has been updated`);
        setUpDateIcon(false);
    };

    return (
        <div>
            <form
                className="ui form large segment"
                onSubmit={handleUpdateSubmit}
            >
                <div className="field field-flex-row">
                    <h1 className="ui dividing header">{headerName}</h1>
                    <div>
                        <i className="edit icon" onClick={handleIcoUpdate}></i>
                    </div>
                </div>

                <div className="field">
                    <div className="two fields">
                        <div className="field">
                            <label>Name</label>
                            <input
                                className="content"
                                type="text"
                                name="name"
                                value={
                                    !initial && animalInfo
                                        ? animalInfo.name
                                        : upDates.name
                                }
                                onChange={handleUpdateChange}
                            />
                        </div>
                        <div className="field">
                            <label>Type</label>
                            <input
                                className="content"
                                type="text"
                                name="type"
                                value={
                                    !initial && animalInfo
                                        ? animalInfo.type
                                        : upDates.type
                                }
                                onChange={handleUpdateChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="two fields">
                        <div className="field">
                            <label>Breed</label>
                            <input
                                className="content"
                                type="text"
                                name="breed"
                                value={
                                    !initial && animalInfo
                                        ? animalInfo.breed
                                        : upDates.breed
                                }
                                onChange={handleUpdateChange}
                            />
                        </div>
                        <div className="field">
                            <label>Color</label>
                            <input
                                className="content"
                                type="text"
                                name="color"
                                value={
                                    !initial && animalInfo
                                        ? animalInfo.color
                                        : upDates.color
                                }
                                onChange={handleUpdateChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="two fields">
                        <div className="field">
                            <label>Weight</label>
                            <input
                                className="content"
                                type="text"
                                name="weight"
                                value={
                                    !initial && animalInfo
                                        ? animalInfo.weight
                                        : upDates.weight
                                }
                                onChange={handleUpdateChange}
                            />
                        </div>
                        <div className="field">
                            <label>Height</label>
                            <input
                                className="content"
                                type="text"
                                name="height"
                                value={
                                    !initial && animalInfo
                                        ? animalInfo.height
                                        : upDates.height
                                }
                                onChange={handleUpdateChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="two fields">
                        <div className="field">
                            <label>Age</label>
                            <input
                                className="content"
                                type="text"
                                placeholder="Age"
                                name="age"
                                value={
                                    !initial && animalInfo
                                        ? animalInfo.age
                                        : upDates.age
                                }
                                onChange={handleUpdateChange}
                            />
                        </div>
                        <div className="field">
                            <label>Location</label>
                            <input
                                className="content"
                                type="text"
                                placeholder="Location"
                                name="location"
                                value=""
                                disabled
                            />
                        </div>
                    </div>
                </div>
                {upDateIcon && (
                    <button className="ui black button wide">Save</button>
                )}
            </form>
        </div>
    );
};

export default AnimalBasicInfoForm;
