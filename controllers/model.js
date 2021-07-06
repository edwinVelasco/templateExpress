const modelGet = async(req, res) => {
    const { name='', nit=''} = req.query
    res.status(200).json(
        {
            msg: 'List',
            name,
            nit
        }
    )
}

const modelPost = (req, res) => {
    const { name, nit, description } = req.body;

    res.status(201).json(
        {
            msg: 'created',
            name,
            nit,
            description
        }
    )
}

const modelPut = (req, res) => {
    const { id } = req.params
    const { name, nit, description } = req.body;

    res.status(200).json(
        {
            msg: 'Edit',
            id,
            name,
            nit,
            description
        }
    )
}

const modelPatch = (req, res) => {
    const { id } = req.params
    res.status(200).json(
        {
            msg: 'patch',
            id
        }
    )
}

const modelDelete = (req, res) => {
    const { id } = req.params
    res.status(200).json(
        {
            msg: 'delete',
            id
        }
    )
}




module.exports = {
    modelGet, modelPost, modelPut,
    modelPatch, modelDelete
}
