const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../server/database/userschema')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose
  .connect('mongodb://localhost:27017/poker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!!')
  })
  .catch((err) => {
    console.log('MONGO CONNECTION FAILED')
    console.log(err)
  })

app.get('/login', async (req, res) => {
  const userInfo = JSON.parse(req.query.loginInfo)
  console.log(userInfo)

  try {
    const user = await User.findOne({
      $and: [{ email: userInfo.email }],
    })
    if (!user) {
      throw new Error('wrong login')
    } else {
      console.log(user)
      bcrypt.compare(userInfo.password, user.password).then((result) => {
        result ? res.send(user) : res.send('wrong login')
      })
    }
  } catch (err) {
    console.log(err)
    res.send('wrong login')
  }
})

app.get('/', async (req, res) => {
  const allUsers = await User.find({})
  res.send(allUsers)
})

module.exports = {
  path: '/api/',
  handler: app,
}
