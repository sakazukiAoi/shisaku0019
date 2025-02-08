const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const FILE_PATH = 'memo.txt';

// メモを読み込む
app.get('/load', (req, res) => {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }
        res.send(data);
    });
});

// メモを保存する
app.post('/save', (req, res) => {
    const text = req.body.text;
    fs.writeFile(FILE_PATH, text, 'utf8', (err) => {
        if (err) {
            return res.status(500).send("Error saving file");
        }
        res.send("Saved successfully");
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
