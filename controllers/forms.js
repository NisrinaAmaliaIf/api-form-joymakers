const Form = require('../models/Form')

module.exports = {
    //get all forms
    index:  async (req, res) => {
        try{
            const forms = await forms.find()
            if(forms.length > 0){
            
            }else{
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
            res.status(200).json({
                status: true,
                data: forms,
                method: req.method,
                url: req.url
            })

        } catch (error) {
            res.status(400).json({sucess: false})
        }
        
      },
      //get a forms
      show: async (req, res) => {
        try{
            const form = await Form.findById(req.params.id)

            res.json({
                status: true,
                data: form,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
            })

        } catch (error){
            res.status(400).json({success: false})
        }
    },

      store: async (req, res) => {
        try{
            const form = await Form.create(req.body)
            res.status(200).json({
                status: true,
                data: form,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        }catch(error){
            res.status(400).json({success: false})
        }
    },
      update: async (req, res) => {
        try{
            const form = await Form.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })

            res.json({
                status: true,
                data: form,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })

        } catch (error){
            res.status(400).json({success: false})
        }
        
      },

      delete: async (req, res) => {
        try{
            await Form.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        }catch(error){
            res.status(400).json({success: false})
        }
      }
}