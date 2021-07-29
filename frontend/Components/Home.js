import React, { useState, useEffect } from "react";
import Router from "./Router";
import Navigation from "./Navigation";
import ViewAnimals from "./ViewAnimals";
import AddAnimal from "./AddAnimal";
import Animal from "./Animal";

const Home = () => {
    const [location, setLocation] = useState("");
    //Get address to show in the fooder and initial data
    useEffect(() => {
        fetch("http://localhost:3000")
            .then((res) => res.json())
            .then((data) => setLocation(data[0]));
    }, []);

    //Add pet's info to database. Note that I am using the pet's id as a "master key"
    const addAnimal = (inputs) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: inputs.type,
                name: inputs.name,
                breed: inputs.breed,
                color: inputs.color,
                weight: inputs.weight,
                height: inputs.height,
                age: inputs.age,
                locationsKey: 1,
            }),
        };
        fetch("http://localhost:3000/add", requestOptions).then((res) =>
            res.json()
        );
    };

    //Update pet's basic info in database.
    const updateAniamlBasicInfo = (upDates) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: upDates.id,
                type: upDates.type,
                name: upDates.name,
                breed: upDates.breed,
                color: upDates.color,
                weight: upDates.weight,
                height: upDates.height,
                age: upDates.age,
                locationsKey: 1,
            }),
        };
        fetch("http://localhost:3000/updateBasic", requestOptions)
            .then((res) => res.json())
            .then((data) => console.log("data", data));
    };

    //Add and update pet's adoption info in database.
    const updateAniamlAdop = (upDatesAdop) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: upDatesAdop.id,
                adoptionDate: upDatesAdop.adoptionDate,
                fisrtName: upDatesAdop.fisrtName,
                lastName: upDatesAdop.lastName,
                address: upDatesAdop.address,
                phone: upDatesAdop.phone,
            }),
        };
        fetch("http://localhost:3000/updateAdop", requestOptions)
            .then((res) => res.json())
            .then((data) => console.log("data", data));
    };

    //Add and update pet's medical info in database.
    const updateAniamlMed = (upDatesMed) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: upDatesMed.id,
                doctor: upDatesMed.doctor,
                date: upDatesMed.date,
                chipNumber: upDatesMed.chipNumber,
                spayOrNeuter: upDatesMed.spayOrNeuter,
            }),
        };
        fetch("http://localhost:3000/updateMed", requestOptions)
            .then((res) => res.json())
            .then((data) => console.log("data", data));
    };

    return (
        <div className="wrapper">
            <Navigation />
            <Router path="/add">
                <AddAnimal addAnimal={addAnimal} />
            </Router>
            <Router path="/animals">
                <ViewAnimals />
            </Router>

            <Router path="/single">
                <Animal
                    updateAniamlBasicInfo={updateAniamlBasicInfo}
                    updateAniamlAdop={updateAniamlAdop}
                    updateAniamlMed={updateAniamlMed}
                />
            </Router>
            <footer>{location.addreess}</footer>
        </div>
    );
};

export default Home;
