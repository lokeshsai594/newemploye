const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employee = mongoose.model('Employee');

//togetalltheposts
router.get('/all', async (req, res) => {
         const post = await employee.find();
         res.json(post);
});

//getaspecificdata
router.get('/:postId', async (req, res) => {
    const post = await employee.findById(req.params.postId);
    res.json(post);
});

//tocreateaposts
router.post('/create', async (req, res) => {
       const post = new employee({
           fullname: req.body.fullname,
           email: req.body.email,
           mobile: req.body.mobile,
           city: req.body.city
       });
       try {
          const savedpost = await post.save();
          res.json(savedpost);
       } catch (err) {
          res.json({ message: err });
       }
});


//toupdatetheposts
router.patch('/:postId', async (req, res) => {
    try{
        const updatepost = await employee.updateOne(
        { _id: req.params.postId },
        { $set: { fullname: req.body.fullname, email: req.body.email, city: req.body.city, mobile: req.body.mobile }
         });
         res.json(updatepost);
    } catch (err) {
        res.json({ message: err })
    }
});


router.delete('/:postId', async (req, res) => {
    const removepost = await employee.remove({ _id: req.params.postId });
    res.json(removepost);
});

module.exports = router;   