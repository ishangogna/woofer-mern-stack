const express = require('express');
const router = express.Router();
const Woof = require('../models/woof');

router.get('/',(req,res,next)=>{
    Woof.find({})
        .then(res => res.json())
        .then(data => res.json(data))
        .catch(err => res.json({message : err.message}));
})

router.post('/',(req,res,next)=>{
    res.status(200);
    res.json({ type : 'POST' })
})

module.exports = router;
