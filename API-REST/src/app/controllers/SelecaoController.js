
import SelecaoRepositorie from "../repositories/SelecaoRepositorie.js";


class SelecaoController {

    async index(req,res){
        const row = await SelecaoRepositorie.findAll()
        res.json(row)
    }

    async show(req,res) {
       const id = req.params.id;
       const row = await SelecaoRepositorie.findById(id)
       res.json(row)
    }

    async store(req,res) {
    const selecao  = req.body;
    const row = await SelecaoRepositorie.create(selecao);
    res.json(row)

}

    async uptdate(req,res) {
        const id = req.params.id
        const selecao = req.body
        const row = await SelecaoRepositorie.update(selecao,id)
        res.json(row)
    }

    async delete(req,res) {
        const id = req.params.id
        const row = await SelecaoRepositorie.delete(id)
        res.json(row)
    }
}
//padrão singleton
export default new SelecaoController();