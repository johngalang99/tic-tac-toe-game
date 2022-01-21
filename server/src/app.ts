import express from 'express'
import cors from 'cors';
import { measureMemory } from 'vm';

const app = express()
app.use(express.json())
app.use(cors());

app.get('/', (req,res)=>{
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    return res.status(200).json(lines)
})

app.listen(4000, ()=>{
    console.log(`Server running at http:localhost:4000`);
})