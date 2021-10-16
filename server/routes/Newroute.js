const  express = require ("express");
const router = express.Router();

const New =require ("../model/New");

router.get('/new', async(req, res)=>{    
    try {
        const notaDB=await New.find();
        res.json(notaDB);
    } catch (err) {
        return res.status(500).json({
            mensaje:"error", 
            err
        })
    }    
});


router.post("/new-publication", async (req, res)=>{
    const body = req.body;
    
    try{
        const newDB= await New.create(body);
        res.status(200).json(newDB)
    } catch(err){
        return res.status(500).json({
            mensaje:"Error",
            err
        })
    }
});

router.get('/new/:id', async(req, res)=>{
    
    try {
        const notaDB=await New.findById(req.params.id);
        res.json(notaDB);

    } catch (err) {
        return res.status(400).json({
            mensaje:"error", 
            err
        })
    }    
});


router.delete('/new/:id', async(req, res)=>{
       
    try {
        const notaDB=await New.findByIdAndDelete(req.params.id);
        if (!notaDB){
            return res.status(400).json({
                mensaje: "no se encontro el id",
                err
            })
        }
        res.json(notaDB)
    } catch (err) {
        return res.status(500).json({
            mensaje:"error", 
            err
        })
    }    
});

router.put('/new/:id', async(req, res)=>{
    const _id = req.params.id;
    const body = req.body;
    try{
        const notaDB = await New.findByIdAndUpdate(
            _id, body, {new: true});
            res.json(notaDB);
    } catch (err) {
        return res.status(400).json({
            mensaje:"error", 
            err
        })
    }    
});
module.exports = router;