To run the server...  to allow the server to speak through the tunnel or
lan to the App using ngrok and json-server...

Update scripts
"db": "json-server -w db.json",
"tunnel": "ngrok http 3000"

If port 3000 is busy specify a new port as follows
"db": "json-server -w db.json - 4000",
"tunnel": "ngrok http 4000"

Open two new windows one for ngrok and they other for json-server



Run ngrok with >npm run tunnel
You will be provided with a forwarding URL of the format
http://1abef49c.ngrok.io

This will be your base URL for CRUD as in
export default axios.create({
  baseURL: 'http://506c5305.ngrok.io'
})

Remember the base URL updates every 8 hours and so much be
updated in your server/api filter


Run json-server with
>npm run db

db must be a json file.
