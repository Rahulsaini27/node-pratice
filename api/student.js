const router = require('express').Router();

var StudentModel = require('../schema/student.schema');

router.post('/student/create', function (req, res) {

    var newStudent = new StudentModel({
        Name: req.body.name,
        Price: req.body.price,
        Discount: req.body.discount,
        Color: req.body.color,
        Brand: req.body.brand,
        Logo: req.body.logo,
        Description: req.body.description,
        Date: req.body.date,
        Country: req.body.country,


    });
    newStudent.save(function (err, data) {
        if (err) {
            console.log(err);
            res.send({ message: "We failed to save your data", data: null })
        }
        else {
            res.send({ message: "Data inserted", data: data });
        }
    });
});

//delete operation
router.get('/student/delete', function(req, res) {
    let id = req.query.studentId;

    StudentModel.deleteOne({_id:id}).then(function (data,err){
        if(err) {
            console.log(err);
            res.send({message : "We failed to delete your data" ,data :null})
        }
        else {
            res.send({message : "Data delete" ,data :data});
        }    
    })
});






















module.exports = router;