import { getByIdAccounts } from "../../models/accountModel.js"

const getById = async (req, res) => {
    //const id = req.params.id//
    const {id, slug} = req.params
    const account = await getById(+id)

    if(!account)
        return res.status(404).json({
            error: 'Conta com o id ${id}, não encontrado!'
    })

    res.json({
        success: "Conta encontrada com Suceso!", 
        account
    })
}

export default getById  