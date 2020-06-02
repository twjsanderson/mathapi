

const simpleAdd = require("./components/basic/addition/routes.js");
const MathOperations = require("./util/math");

const math = new MathOperations; 

const stringToNumArray = (str) => str.split(",").map(Number); 

module.exports = {
    simpleAdd
}

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