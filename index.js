const { feathers } = require('@feathersjs/feathers')
const { koa, errorHandler, bodyParser, rest } = require('@feathersjs/koa')

const app = koa(feathers())

app.use(errorHandler())
app.use(bodyParser())
app.configure(rest())

app.use('echo', {
    async create(body) {
        return body;
    }
})

app.listen(4000, () => {
    console.log("app running at 3030")
})