const router = require('express').Router();
const Device = require('../model/Devices');

router.get('/', async (req, res) => {
    try {
        const listaDevices = await Device.find();
        res.json({
            success: true,
            message: listaDevices
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Não foi possível obter a lista de dispositivos."
        });
    }
});

router.post('/', async (req, res) => {
    const novoDevice = new Device({
        nome: req.body.nome,
        kwh: req.body.kwh,
        corrente: req.body.corrente,
        voltagem: req.body.voltagem,
        fp: req.body.fp
    });

    try {
        const saveNovoDevice = await novoDevice.save();
        res.json({
            success: true,
            message: saveNovoDevice
        });
    } 
    catch (err) {
        res.json({
            success: false,
            message: "Não foi possível cadastrar o novo device."
        });
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateDeviceId = await Device.updateOne(
            {_id: req.params.id},
            {kwh: req.body.kwh,
            corrente: req.body.corrente,
            voltagem: req.body.voltagem,
            fp: req.body.fp}
        )
        res.json({
            success:true,
            updated: updateDeviceId.nModified
        })
    }
    catch(err) {
        res.json({
            success:false,
            message: "Não foi possível atualizar o device"
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteDevice = await Device.deleteOne({
            _id: req.params.id
        });
        res.json({
            success: true,
            message: "Device excluído com sucesso."
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Não foi possível excluir o device.",
            error: err
        });
    }
});


module.exports = router;
