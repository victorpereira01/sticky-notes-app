const mongoose = require('mongoose');

const Event = mongoose.model('Event');

module.exports = {
    async findAll(req, res) {
        const events = await Event.find();
        return res.json(events);
    },

    async create(req, res) {
        const event = await Event.create(req.body);
        return res.json(event);
    },

    async update(req, res) {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(event);
    },

    async delete(req, res) {
        await Event.findByIdAndDelete(req.params.id);
        return res.send();
    }
}