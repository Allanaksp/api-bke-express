import { listAccounts } from "../../models/accountmodel.js"

const list = async (req, res) => {

    const accounts = await listAccounts()
    return res.json({
        message: "contas listadas com sucesso!",
        accounts: accounts
    })
    
}

export default list