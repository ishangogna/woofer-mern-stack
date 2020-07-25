const express = require('express');
const router = express.Router();
const Woof = require('../models/woof');

router.get('/',(req,res,next)=>{
    Woof.find({})
        .then(woofs => res.send(woofs));
})

router.post('/',(req,res,next)=>{
    const woof = new Woof(req.body);
    woof.save().then(data => res.send(data));
})

module.exports = router;
