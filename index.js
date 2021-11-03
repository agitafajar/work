const koa = require('koa')
const json = require('koa-json')
const koaRouter = require('koa-router')
const render = require('koa-ejs')
const bodyparser = require('koa-bodyparser')
const path = require('path')
const app = new koa()

app.use(json())

app.use(bodyparser())

const router = new koaRouter()

const datas = ['satu','dua','tiga']

render(app, {
    root: path.join(__dirname,'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
})


app.use(router.routes()).use(router.allowedMethods())

router.get('/test', async ctx => ctx.body = 'Test Router')

router.get('/', async ctx => {
    await ctx.render('index',{
        tittle:'Data Data',
        datas:datas
    })
})

router.get('/adddata', async ctx => {
    await ctx.render('add')
})

router.post('/adddata',add)

async function add(ctx){
    const body = ctx.request.body
    const data = body.data
    datas.push(data)
    ctx.redirect('/')
}

app.use(async ctx => ctx.body = {'msg':'Hello World'})

app.listen(5000,() => {
    console.log("App is started on Port 5000")
})
