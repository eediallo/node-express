
import http from 'http'

const server = http.createServer((req, res) =>{
    console.log('User hit the server')
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<p>Welcome to our home page</p>')
    res.end()
})


server.listen(3000, ()=> console.log('Server is running on port 3000...'))