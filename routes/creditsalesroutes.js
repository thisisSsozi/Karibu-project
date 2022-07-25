const express = require('express');
const Credit = require('../models/Credit');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('creditsales');

});

router.post('/', async(req,res)=>{
    try{
        const credit = new Credit(req.body);
        await credit.save()
        res.redirect('/creditpayments')
        console.log('Submitted successffully')
    }
    catch(err){
        res.status(400).redirect('/creditpayments')
        console.log('Not submitted')
    }
})

router.get('/creditlist', async(req,res)=>{
    try {
        const credits = await Credit.find({});
        let totalCredit = await Credit.aggregate([
          {'$group': {_id:'$all',
          totalAmountdue : {$sum:'$amountdue'},
        }}  
        ])
        res.render('creditlist', {
            credits:credits,
            total:totalCredit[0]
        } )
        console.log(credits)
    } catch (error) {
        res.status(400).send('List not found')
        console.log(error)
    }
})

router.post('/delete', async(req,res)=>{
    try {
        await Credit.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
  
  })
  
  // editing the credit list
  router.get('/editcredit/:id', async(req, res) => {
    try{
      const item = await Credit.findOne({id:req.params.id});
      res.render('editcredit',{credit:item});
    }
    catch(error){
      res.send("Value not found in DB");
    }
  });
  
  
  router.post('/editcredit', async(req, res) => {
    try{
  
    await Credit.findOneAndUpdate({_id:req.query.id},req.body);
  
    res.redirect('creditpayments/creditlist');
    }
    catch(error){
    res.send("Failed to update product");
    console.log(error);
    }
  });
  
module.exports = router