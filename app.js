const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile('user.txt', (err, data) => {
            if (err) data = '';

            res.setHeader('Content-Type', 'text/html');
            res.end(`
                
                <p>${data.toString().replace(/\n/g, '<br>')}</p>

                <form method="POST" action="/submit">
                    <label>Name:</label>
                    <input type="text" name="username" required />
                    <button type="submit">Send</button>
                </form>
            `);
        });
    }

    if (url === '/submit' && method === 'POST') {
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const buffer = Buffer.concat(body).toString();
            const formvalues = buffer.split('=')[1];

            
            fs.readFile('user.txt', 'utf8', (err, oldData) => {
                if (err) oldData = '';
                const newData = formvalues + '\n';

                fs.writeFile('user.txt', newData, err => {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    res.end();
                });
            });
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
