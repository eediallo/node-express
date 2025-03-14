import express from 'express'
import path from 'path'

const __dirname = new URL('./navbar-app', import.meta.url).pathname


const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'index.html'))
    
})
app.all('*', (req, res)=>{
res.status(404).send('Resource not found.')
})

// app.get('/', (req, res)=>{

// })


app.listen(3000, ()=> console.log('Server is listen on port 3000...'))