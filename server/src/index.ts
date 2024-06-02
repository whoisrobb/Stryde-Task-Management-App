import express from 'express';
import db from './db';
import dotenv from 'dotenv';
import { UserTable } from './db/schema';


dotenv.config();
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.json({ greeting: 'Wsgood' })
})

app.post('/', async (req, res) => {
    const { name, age } = req.body;
    const person = await db.insert(UserTable)
        .values({
            name: name,
            age: age
        })
        .returning({
            name: UserTable.name,
            age: UserTable.age
        })

        res.json(person)
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})