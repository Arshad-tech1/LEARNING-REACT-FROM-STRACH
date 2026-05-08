import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.get('/api/v1/jokes', async (req, res) => {
    const result = await axios.get('https://official-joke-api.appspot.com/random_ten')
    // ADDED LITTLE DELAY TO CHECK REACT NOT BLOCK RENDERING WHILE WAITING FOR DATA FROM AN API
    setTimeout(() => {
        res.send(result.data)
    }, 3000);
});


app.get('/api/v1/gallery', async (req, res) => {
    const pageno = req.query.page;
    const result = await axios.get(`https://picsum.photos/v2/list?page=${pageno}&limit=6`);
    res.send(result.data);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});