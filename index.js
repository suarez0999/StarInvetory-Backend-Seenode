import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'laptop', price: 10.99, description: 'A high-performance laptop for all your computing needs.', imageURL: 'https://example.com/laptop.jpg' },
        { id: 2, name: 'smartphone', price: 19.99, description: 'A latest model smartphone with all the features you need.', imageURL: 'https://example.com/smartphone.jpg' },
        { id: 3, name: 'tablet', price: 5.99, description: 'A lightweight tablet for browsing and media consumption.', imageURL: 'https://example.com/tablet.jpg' },
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});