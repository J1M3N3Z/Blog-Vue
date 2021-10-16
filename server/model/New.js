const  Mongoose =require ("mongoose");
const schema= Mongoose.Schema;

const newSchema=new schema({
    nombre:{type:String, required:[true, "Obligatorio"]},
    descripcion:{type: String},
    // usuarioId:String,
    // date:{type: Date, default:Date.now},
    // activo:{type:Boolean, default:true}
});

const New = Mongoose.model("New", newSchema);

module.exports = New;