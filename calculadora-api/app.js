const express = require('express');
const app = express();
const port = 5000;

// Rota para soma
app.get('/soma', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    res.json({ resultado: num1 + num2 });
});

// Rota para subtração
app.get('/subtracao', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    res.json({ resultado: num1 - num2 });
});

// Rota para multiplicação
app.get('/multiplicacao', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    res.json({ resultado: num1 * num2 });
});

// Rota para divisão
app.get('/divisao', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (num2 === 0) {
        res.status(400).json({ erro: 'Divisão por zero não é permitida' });
    } else {
        res.json({ resultado: num1 / num2 });
    }
});

app.listen(port, () => {
    console.log(`API de calculadora rodando na porta ${port}`);
});
