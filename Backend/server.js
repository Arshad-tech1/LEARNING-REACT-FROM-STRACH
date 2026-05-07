import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/api/v1/jokes', async (req, res) => {
    const result = await axios.get('https://official-joke-api.appspot.com/random_ten')
    res.send(result.data)
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});