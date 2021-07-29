import React, { useState, useEffect, useCallback } from "react";
import NavigationLink from "./NavigationLink";

const ViewAnimals = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/animals")
            .then((res) => res.json())
            .then((data) => setAnimals(data));
    }, []);

    return (
        <div className="container">
            <table className="ui selectable celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Breed</th>
                        <th>Color</th>
                        <th>Adopted</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal) => (
                        <tr key={animal.id}>
                            <td>{animal.name}</td>
                            <td>{animal.type}</td>
                            <td>{animal.breed}</td>
                            <td>{animal.color}</td>
                            <td
                                className={
                                    animal.adoptionInfoId
                                        ? "positive"
                                        : "negative"
                                }
                            >
                                {animal.adoptionInfoId ? "Yes" : "No"}
                            </td>
                            <td>
                                <NavigationLink
                                    name={animal.id}
                                    className="item"
                                    href={`/single/${animal.id}`}
                                >
                                    view
                                </NavigationLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewAnimals;
