const express = require("express")
const router = express.Router()
const noteSchema = require("../schemas/noteSchema");
const userSchema = require("../schemas/userSchema");

router.get('/', async (req, res) => {
    try {
        let all = []
        users = await userSchema.find()
        all.push(users)
        notes = await noteSchema.find()
        all.push(notes)
        res.send(all)
    } catch (error) {
        console.log('-1')
    }
}
)

router.get('/delete/:id', async (req, res) => {
    try {
        let all = []
        users = await userSchema.findByIdAndRemove(req.params.id)
        all.push(users)
        notes = await noteSchema.findByIdAndRemove(req.params.id)
        all.push(notes)
        res.send(all)
    } catch (error) {
        console.log('-1')
    }
}
)

module.exports = router