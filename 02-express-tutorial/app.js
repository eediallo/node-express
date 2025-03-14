
import http from 'http'

const server = http.createServer((req, res) =>{
    console.log('User hit the server')
})


server.listen(3000, ()=> console.log('Server is running on port 3000...'))