const express = require('express');
const { fetchSheetData } = require('./sheetsAPI'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allows all domains
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.get('/api/sheets-data', async (req, res) => {
    try {
        const data = await fetchSheetData();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data from Sheets:', error);
        res.status(500).json({ message: "Failed to retrieve data" });
    }
});


app.get('/test', (req, res) => {
    res.send('Test route working');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
