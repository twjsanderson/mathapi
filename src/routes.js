const express = require('express');
const router = express.Router();

// BASIC ROUTES
const add = require("./components/basic/addition/addition.routes");
const subtract = require("./components/basic/subtraction/subtraction.routes");
const multiply = require("./components/basic/multiplication/multiplication.routes");
const divide = require("./components/basic/division/division.routes");

// POWERS ROUTES
const exponent = require("./components/powers/exponent/exponent.routes");
const sqrt = require("./components/powers/sqrt/sqrt.routes");

// QUADRATIC ROUTE
const quadratic = require("./components/quadratic/quadratic.routes");

// STATISTICS ROUTES
const mean = require("./components/statistics/mean/mean.routes");
const median = require("./components/statistics/median/median.routes");
const mode = require("./components/statistics/mode/mode.routes");
const range = require("./components/statistics/range/range.routes");
const variance = require("./components/statistics/variance/variance.routes");
const stdd = require("./components/statistics/stdd/stdd.routes");


// BASIC
router.use(add);
router.use(subtract);
router.use(multiply);
router.use(divide);

// POWERS
router.use(exponent);
router.use(sqrt);

// QUADRATIC 
router.use(quadratic);

// STATISTICS
router.use(mean);
router.use(median);
router.use(mode);
router.use(range);
router.use(variance);
router.use(stdd);

module.exports = router;




























































// app.get('/', (req, res) => {
//     res.send({ msg: 'Welcome to ' });
// })

// app.get('/subtract/simple', (req, res) => {
//     let x = req.query.x;
//     let y = req.query.y;

//     // input check, update tyep check
//     if (Number(x) < -100000000000 || Number(x) > 100000000000 || Number(y) < -100000000000 || Number(y) > 100000000000) {
//         setTimeout(() => {
//             res.send({
//                 operation: 'subtraction',
//                 error: 'One or more query size is out of range' 
//             });
//         }, 1000)
//     } else {
//         setTimeout(() => {
//             const answer = math.subtract(Number(x), Number(y));
//             res.send({ 
//                 operation: 'subtraction',
//                 answer: answer 
//             });
//         }, 1000)
//     }
// });

// app.get('/subtract/multiple', (req, res) => {
//     let x = req.query.x;
//     // input check, array check, item size check
//     if (!x) {
//         setTimeout(() => {
//             res.send({
//                 operation: 'subtraction ',
//                 error: 'One or more query size is out of range' 
//             });
//         }, 1000)
//     } else {
//         setTimeout(() => {
//             const numArray = stringToNumArray(x);
//             const answer = math.subtractMultiple(numArray);
//             res.send({ 
//                 operation: 'subtraction multiple',
//                 answer: answer 
//             });
//         }, 1000)
//     }
// });

// app.all('*', (req, res) => {
//     res.status(404).send.msg({ msg: 'not found'});
// })