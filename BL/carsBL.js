const jfile = require("jsonfile");

const getAllCars = () =>
{
    return new Promise(resolve =>
        {
            jfile.readFile("./BL/cars.json",function(err,data)
            {

                if(err)
                {
                  console.log(err)
                }
                else
                {
                    resolve(data)
                }
                   
            })
        })
}

const getCarByID = (id) =>
{
    return new Promise(resolve=>
        {
            jfile.readFile("./BL/cars.json",function(err,data)
            {
                if(err)
                {
                    console.log(err)
                }
                else
                {
                  console.log("id")
                  console.log(id)

                    
                    var result = data.cars.find(t=>t.carID==id)
                    resolve(result)
                }
            })
        })
}

    const createCar=(obj)=>
    {
        return new Promise(resolve=>
        {
           jfile.readFile("./BL/cars.json",function(err,data)
          {
            if(err)
            {
              console.log(err)
            }
         else
         {
            data.cars.push(obj);
            jfile.writeFile("./BL/cars.json",data)
            resolve("push");
        }
         })
            })
    }

const updateCar=(ID,obj)=>
{
    return new Promise(resolve=>
    {
       jfile.readFile("./BL/cars.json",function(err,data)
       {
        if(err)
        {
          console.log(err)
        }
        else
        {
          console.log("ID:")
          console.log(ID)

          let index = data.cars.findIndex(x => x.carID == ID)
          if(index >= 0 )
          {
            console.log("index:")
            console.log(index)
            console.log("obj:")
            console.log(obj)
            data.cars[index] = obj;
            resolve("update")
          }
        }
     })
   })
}

const deleteCar=(id)=>
{
    return new Promise(resolve=>
    {
       jfile.readFile("./BL/cars.json",function(err,data)
      {
        if(err)
        {
          console.log(err)
        }
        else
        {
           var index = data.cars.findIndex(x => x.carID == id)
           if(index >= 0)
             {
              console.log("data:")
              console.log(data)
              console.log(data.cars)
              console.log(index)
              data.cars.splice(index,1)
              resolve("deleted")
             }
        }
      })
  }
)}

module.exports={getAllCars,getCarByID,createCar,updateCar,deleteCar}