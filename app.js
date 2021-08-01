import express, {Router} from "express"
import cors from 'cors'
import webhook from 'discord-webhook-node'

const hook = new webhook.Webhook("https://discord.com/api/webhooks/871517501127794789/tPy69h0f7IzoJ7TQMFCzQnneF7Odulol_fUqJPJDJOcCuJUNxumf-Dy2oLJtyG3pYBX8")

const app = express()

app.use(cors())

const bgRouter = Router()
const port = process.env.PORT || 25569
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.post('/emailsubmit', (req, res) => {
    hook.info('**Contact Form**', 'New Submit Form', `${req.body.fullName} \n ${req.body.email} \n ${req.body.subject} \n \n ${req.body.message}`)
    console.log(req.body)
    res.send("success")
})

app.get('/testing', (req, res) => {
    res.send('test successful')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
