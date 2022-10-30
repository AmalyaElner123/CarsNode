const express = require("express")
const carsBL = require("../BL/carsBL")
const router = express.Router();

router.route('/')
.get(async function(req,resp)
{
    let data = await carsBL.getAllCars();
    return resp.json(data);
})

router.route('/:id')
.get(async function(req,resp)
{
    let id = req.params.id
    let data = await carsBL.getCarByID(id);
    return resp.json(data);
})

router.route('/')
.post(async function(req,resp)
{
    let body = req.params.body
    let data = await carsBL.createCar(body);
    return resp.json(data);
})

router.route('/')
.put(async function(req,resp)
{
    let id = req.params.id
    let body = req.params.body
    let data = await carsBL.updateCar(id,body);
    return resp.json(data);
})

router.route('/:id')
.delete(async function(req,resp)
{
    let id = req.params.id
    let data = await carsBL.deletecar(id);

    return resp.json(data);
})

module.exports = router;
