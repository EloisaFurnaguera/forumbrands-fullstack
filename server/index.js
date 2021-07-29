const animalInfo = [
    {
        id: 1,
        type: "Cat",
        name: "Vasia",
        breed: "Persian",
        color: "Black",
        weight: "7.9",
        height: "9.1",
        age: "3",
        adoptionInfoId: 1,
        locationsId: 1,
    },
    {
        id: 2,
        type: "Cat",
        name: "Musci",
        breed: "Maine Coon",
        color: "Black",
        weight: "8.9",
        height: "9.1",
        age: "3",
        adoptionInfoId: "",
        locationsId: 1,
    },
    {
        id: 3,
        type: "Dog",
        name: "Scruffles",
        breed: "Bulldog",
        color: "Black",
        weight: "3.9",
        height: "9.1",
        age: "3",
        adoptionInfoId: 2,
        locationsId: 1,
    },
    {
        id: 4,
        type: "Dog",
        name: "Perro",
        breed: "Chihuahua",
        color: "Black",
        weight: "5.9",
        height: "9.1",
        age: "3",
        adoptionInfoId: "",
        locationsId: 1,
    },
];

const locations = [
    {
        locationsId: 1,
        addreess: "1400 Mission #2002",
        phone: "(444)444-4444",
    },
];

const adoptionInfo = [
    {
        adoptionInfoId: 1,
        id: 1,
        adoptionDate: "07/01/2020",
        firstName: "Maria",
        lastName: "Guzman",
        address: "1400 Mission",
        phone: "(444)444-4444",
    },
    {
        adoptionInfoId: 2,
        id: 3,
        adoptionDate: "06/01/2020",
        firstName: "Jose",
        lastName: "Done",
        address: "1400 Mission",
        phone: "(444)444-4444",
    },
];

const medicalInfo = [
    {
        medicalInfoId: 1,
        id: 1,
        doctor: "John Goodman",
        date: "06/01/2020",
        chipNumber: 222222221,
        spayOrNeuter: "yes",
    },
    {
        medicalInfoId: 2,
        id: 2,
        doctor: "John Goodman",
        date: "06/01/2020",
        chipNumber: 222222222,
        spayOrNeuter: "yes",
    },
    {
        medicalInfoId: 3,
        id: 3,
        doctor: "John Goodman",
        date: "06/01/2020",
        chipNumber: 222222223,
        spayOrNeuter: "yes",
    },
    {
        medicalInfoId: 4,
        id: 4,
        doctor: "John Goodman",
        date: "06/01/2020",
        chipNumber: 222222224,
        spayOrNeuter: "yes",
    },
];

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/", function (req, res) {
    res.json(locations);
});

app.get("/animals", function (req, res) {
    res.json(animalInfo);
});

app.get("/single/:id", (req, res) => {
    const animalId = parseInt(req.params.id, 10);
    
    const getSingleInfoData = animalInfo.filter((item) => item.id === animalId);
    const getAdoptionInfoInfoData = adoptionInfo.filter(
        (item) => item.id === animalId
    );
    const getMedicalInfoInfoInfoData = medicalInfo.filter(
        (item) => item.id === animalId
    );

    const getSingleInfoFullData = {
        singleInfoData: getSingleInfoData,
        adoptionInfoInfoData: getAdoptionInfoInfoData,
        medicalInfoInfoInfoData: getMedicalInfoInfoInfoData,
    };
    res.send(JSON.stringify(getSingleInfoFullData));
});

app.post("/add", (req, res) => {
    const newPetId = Math.floor(Math.random() * 100000);
    animalInfo.push({
        id: newPetId,
        type: req.body.type,
        name: req.body.name,
        breed: req.body.breed,
        color: req.body.color,
        weight: req.body.weight,
        height: req.body.height,
        age: req.body.age,
        locationsId: 1,
    });
    res.send(JSON.stringify(animalInfo));
});

app.post("/updateBasic", (req, res) => {
    const objIndex = animalInfo.findIndex((item) => item.id == req.body.id);
    animalInfo[objIndex].name = req.body.name;
    animalInfo[objIndex].type = req.body.type;
    animalInfo[objIndex].breed = req.body.breed;
    animalInfo[objIndex].color = req.body.color;
    animalInfo[objIndex].weight = req.body.weight;
    animalInfo[objIndex].height = req.body.height;
    animalInfo[objIndex].age = req.body.age;

    res.send(JSON.stringify(animalInfo));
});

app.post("/updateAdop", (req, res) => {
    const objIndexAdp = adoptionInfo.findIndex((item) => item.id == req.body.id);
    if (objIndexAdp === -1) {
        adoptionInfo.push({
            adoptionInfoId: Math.floor(Math.random() * 100000),
            id: req.body.id,
            adoptionDate: req.body.adoptionDate,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phone: req.body.phone,
        });
    } else {
        adoptionInfo[objIndexAdp].adoptionDate = req.body.adoptionDate;
        adoptionInfo[objIndexAdp].firstName = req.body.firstName;
        adoptionInfo[objIndexAdp].lastName = req.body.lastName;
        adoptionInfo[objIndexAdp].address = req.body.address;
        adoptionInfo[objIndexAdp].phone = req.body.phone;
    }

    res.send(JSON.stringify(adoptionInfo));
});

app.post("/updateMed", (req, res) => {
    const objIndexMed = medicalInfo.findIndex((item) => item.id == req.body.id);

    if (objIndexMed === -1) {
        medicalInfo.push({
            medicalInfoId: Math.floor(Math.random() * 100000),
            id: req.body.id,
            date: req.body.date,
            doctor: req.body.doctor,
            chipNumber: req.body.chipNumber,
            spayOrNeuter: req.body.spayOrNeuter,
        });
    } else {
        medicalInfo[objIndexMed].doctor = req.body.doctor;
        medicalInfo[objIndexMed].date = req.body.date;
        medicalInfo[objIndexMed].chipNumber = req.body.chipNumber;
        medicalInfo[objIndexMed].spayOrNeuter = req.body.spayOrNeuter;
    }

    res.send(JSON.stringify(medicalInfo));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
