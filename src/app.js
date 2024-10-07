const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000


// middlewares 
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Blood Donation app is running! ...')
})


app.listen(port, () => {
  console.log(`Blood Donation is on ${port}`)
})


export default app