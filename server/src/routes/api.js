const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.status(200);
    res.json({ type : 'GET' })
})

router.post('/',(req,res,next)=>{
    res.status(200);
    res.json({ type : 'POST' })
})

module.exports = router;

