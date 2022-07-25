const express = require('express');
const Procurement = require('../models/Procurement');
const router = express.Router();

router.get('/', (req,res)=>{
  if (req.session.user){
    res.render('procurement');
}
else {
    console.log('Can not find session')
    res.redirect('/')
}
    });

// posting the procurement records into db
router.post('/', async(req,res)=>{
    try{
        const procurement = new Procurement(req.body);
        await procurement.save()
        res.redirect('/procurement/procurementlist')
        console.log('Submitted successffully')
    }
    catch(err){
        res.status(400).redirect('/procurement')
        console.log('Not successful')
    }
})

router.get('/procurementlist', async(req,res)=>{
    try {
        const procurements = await Procurement.find({});
        let totalProcurement = await Procurement.aggregate([
          {'$group': {_id:'$all',
          totalProsum : {$sum:'$costofprocurement'},
          totalTonnage : {$sum:'$tonnage'},
          totalSellpx : {$sum:'$pricetobesold'}
        }}  
        ])
        res.render('procurementlist', {
          procurements:procurements,
            total:totalProcurement[0]
        } )
        console.log(totalProcurement)
    } catch (error) {
        res.status(400).send('List not found')
        console.log(error)
    }
})


router.post('/delete', async(req,res)=>{
    try {
        await Procurement.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
  
  })
  
  // editing the procurement list
  router.get('/editprocurement/:id', async(req, res) => {
    try{
      const item = await Procurement.findOne({id:req.params.id});
      res.render('editprocurement',{procurement:item});
    }
    catch(error){
      res.send("Data value not found in DB");
    }
  });
  
  
  router.post('/editprocurement', async(req, res) => {
    try{
  
    await Procurement.findOneAndUpdate({_id:req.query.id},req.body);
  
    res.redirect('/editprocurement/procurementlist');
    }
    catch(error){
    res.send("Failed to update product");
    console.log(error);
    }
  });

module.exports = router