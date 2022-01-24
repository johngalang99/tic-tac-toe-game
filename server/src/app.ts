// Import dependencies
import express from 'express'

const app = express()

// Get method to handle GET request
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
    // Send winning combinations array
    return res.status(200).json(lines)
})

// Binds and listens for connections on the specified host and port
app.listen(4000, ()=>{
    console.log(`Server running at http:localhost:4000`);
})