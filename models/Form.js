const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    alamat:{
        type: String,
        required: [true, 'Masukkan alamatmu (wil Banyumas'],
        unique : true
    },
    gender:{
        type: String,
        required: [true, 'Isikan gendermu']
    },
    jenisbahan:{
        type: String,
        required: [true, 'Masukkan jenis bahanmu']
    },
    lamapemakaian:{
        type: String,
        required: [true, 'Isikan lama pemakaian']
    },
    deskripsi:{
        type: String,
        required: [true, 'Silahkan isikan deskripsi']
    },
    kategori:{
        type: String,
        required: [true, 'Silahkan isikan kategori']
    },
    kondisi:{
        type: String,
        required: [true, 'Silahkan isikan kondisi pakaian']
    },

})

module.exports = mongoose.model('Form', FormSchema)