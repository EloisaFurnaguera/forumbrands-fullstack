import React, { useState } from "react";

const initialInputs = {
    id: "",
    type: "",
    name: "",
    breed: "",
    color: "",
    weight: "",
    height: "",
    age: "",
};

const AddAnimal = ({ addAnimal }) => {
    const [inputs, setInputs] = useState(initialInputs);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Control for emply filds
        if (!inputs.name || !inputs.type) {
            alert("Plaese enter the pet's name and type");
        } else {
            //Send the new info to the database and reset the form
            addAnimal(inputs);
            setInputs(initialInputs);
            alert(`${inputs.name} the ${inputs.type} has been added`);
        }
    };

    const handleChange = (e) => {
        //Add an id to the data odject
        initialInputs.id = Math.floor(Math.random() * 100000);
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="ui form large segment">
                <h1 className="ui dividing header">New Furry Friend</h1>
                <div className="field">
                    <div className="two fields">
                        <div className="field">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={inputs.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Type</label>
                            <select
                                className="ui fluid dropdown"
                                name="type"
                                value={inputs.type}
                                onChange={handleChange}
                            >
                                <option></option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                            </select>
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
                                placeholder="Breed"
                                name="breed"
                                value={inputs.breed}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Color</label>
                            <input
                                className="content"
                                type="text"
                                placeholder="Color"
                                name="color"
                                value={inputs.color}
                                onChange={handleChange}
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
                                placeholder="Weight"
                                name="weight"
                                value={inputs.weight}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Height</label>
                            <input
                                className="input"
                                type="text"
                                placeholder="Height"
                                name="height"
                                value={inputs.height}
                                onChange={handleChange}
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
                                value={inputs.age}
                                onChange={handleChange}
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

                <button className="ui black button wide">Save</button>
            </form>
        </div>
    );
};

export default AddAnimal;
