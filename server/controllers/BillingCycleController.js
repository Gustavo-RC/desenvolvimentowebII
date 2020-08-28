const billingCycle = require("../models/BillingCycleSchema");
//lodash => forIn

//npm install @angular/cli -g
//ng -v
//ng -help
class BillingCycleController{
    async store(req, res){
        var result = await billingCycle.create(req.body);
        res.status(201).json(result);
    }

    async get(req, res){
        var result = await billingCycle.find({});
        res.status(200).json(result);
    }
    async getById(req, res){
        var result = await billingCycle.findById(req.params.cycleId);
        res.status(200).json(result);
    }
}

module.exports = new BillingCycleController();