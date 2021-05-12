const payloadModel = require('../model')

var Controller = {

    createPayload: function (req, res) {
        var error = []
        if(!req.body.name)error.push('Provide name')
        if(!req.body.email)error.push('Provide email')
        if(!req.body.country)error.push('Provide country')

        if (error.length == 0) {
            var payload = {name:req.body.name,email:req.body.email,country:req.body.country}
            payloadModel.create(payload, (err, resp) => {
                if (err) {
                    return res.status(500).json({ message: err.message})
                } else {
                    return res.status(200).json({ message: "New payload added", resp})
                }
            })
        } else {
            return res.status(500).json({ message: "Form Error", resp: error})
        }

        
    },

    fetchPayload: function (req, res) {
        payloadModel.find({}, (err, payloads) => {
            if (err) return res.status(500).json({ message: err.message})
            else
                return res.status(200).json({ payloads })
        })
    },

    fetchPayloadById: function (req, res) {
        payloadModel.findById(req.params.id, (err, resp) => {
            if (err) {
                return res.status(500).json({ message: err.message })
            } else {
                return res.status(200).json ({ resp })
            }
        })
    },

    updatePayload: function (req, res) {
        var error = []
        var payload = {}
        if (!req.params.id) error.push("Provide an identity for file to be updated")
        if (req.body.name) payload.name = req.body.name
        if (req.body.email) payload.email = req.body.email
        if (req.body.country) payload.country = req.body.country

        if (error.length == 0) {
            if (payload) {
                payloadModel.findByIdAndUpdate(req.params.id, payload, (err, resp) => {
                    if (err) {
                        return res.status(500).json({ message: err.message })
                    } else {
                        return res.status(200).json({ resp })
                    }
                })
            }
        } else {
            return res.status(500).json({ message: "Form Error", resp: error})
        }

    },

    deletePayload: function (req, res) {
        payloadModel.findByIdAndDelete(req.params.id, (err, resp) => {
            if (err) {
                return res.status(500).json({ message: err.message })
            } else {
                return res.status(200).json({ message: "record deleted"})
            }
        })
    }
}

module.exports = Controller;