var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
     res.send({
        works: [{
            id: '001',
            firstname: 'Archana',
            lastname: 'Rajesh',
            email: 'archana@gmail.com',
            phonenumber: '201-665-7823',
            address:'232,Main st,lawerville,NJ'
        }, {
            id: '002',
            firstname: 'Daniel',
            lastname: 'Cook',
            email: 'daniel@gmail.com',
            phonenumber: '232-878-1870',
            address: '523,Crook St,Michigan'
        }, {
            id: '003',
            firstname: 'William',
            lastname: 'Henry',
            email: 'william@gmail.com',
            phonenumber: '237-384-3682',
            address: '34,Downtown road,West Virginia'
        }]
    });
});
router.delete('/:id', function(req, res, next) {
    res.send({
        status: 'success'
    })
});
module.exports = router;
