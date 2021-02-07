let express = require('express');
let app = express();
const PORT = 5000;
let bodyParser = require('body-parser');
let calcAnswer = [];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.listen(PORT, function () {
    console.log('listening on port', PORT);
});

app.post('/calculator', (req, res) => {
    let objectInfo = req.body;
    let valueX = parseInt(objectInfo.firstNumber);
    let valueY = parseInt(objectInfo.secondNumber);
    let mathOperator = objectInfo.type;
    console.log(objectInfo, valueX, valueY, mathOperator);

    switch(mathOperator) {
        case "Add":
        let sumAdd = valueX + valueY;
        history = valueX + '+' + valueY + '='  + sumAdd;
        calcAnswer.push(history);
        console.log(calcAnswer);
        console.log(sumAdd);
        break;
        case "Subtract":
        let differenceOf = valueX - valueY;
        history = valueX + '-' + valueY + '='  + differenceOf;
        calcAnswer.push(history);
        console.log(differenceOf);
        break;
        case "Multiply":
        let multiplyEnd = valueX * valueY;
        history = valueX + '*' + valueY + '='  + multiplyEnd;
        calcAnswer.push(history);
        console.log(multiplyEnd);
        break;
        case "Divide":
        let divideEnd = valueX / valueY;
        history = valueX + '/' + valueY + '='  + divideEnd;
        calcAnswer.push(history);
        console.log(divideEnd);
    }
    res.sendStatus(200);
})

app.get('/calculator', (req, res) => {
    res.send(calcAnswer);
})
