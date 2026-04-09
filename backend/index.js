import express from 'express'

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Gokyo Bistro!');
});

app.listen(PORT, () => {
    console.log(`🚀Gokyo Bistro backend is running on port ${PORT}`);
})