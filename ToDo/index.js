const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000
const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('handlebarsEngine', hbs.engine)
app.set('view engine', 'handlebarsEngine')
app.set('views', 'views')

async function start() {
  try {
    await mongoose.connect('', {
      useNewUrlParser: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (error) {
    console.log(error)
  }
}

start()
