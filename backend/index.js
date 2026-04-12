import express from 'express'

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to Gokyo Bistro!');
});

app.listen(PORT, () => {
    console.log(`🚀Gokyo Bistro backend is running on port ${PORT}`);
})