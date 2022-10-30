const express = require('express');
let app = express();
const carsRouter = require("./routers/carsRouter");
app.use('/api/cars',carsRouter);
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.listen(8000);

//  console.log('amalya');
// const carsBL = require("./BL/carsBL")

// async function getdata()
// {
//     // console.log(await carsBL.updateCar(5,{"carID": "5" ,
//     // "carName": "M2",
//     // "carModel": "MMM2"
//     // }));
//     console.log(await carsBL.deleteCar(5));
//     // console.log(await carsBL.getAllCars());
// }
// getdata();
console.log("amalya")

