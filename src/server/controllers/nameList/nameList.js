const Name = require('../../models/nameList/nameList');

module.exports = {
    getNames: ( req, res ) => {
        const storedNames = Name.findAll();

        res.set({ 'Access-Control-Allow-Origin': '*' });
        res.status( 200 ).json( storedNames );
    },

    postName: ( req, res ) => {
        try{
            const { name } = req.body;
            const createdName = Name.createUser({ name });

            res.status(200).json( createdName );

        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    deleteName: ( req, res ) => {
        const id = req.params.id;
        const parsedId = parseInt( id, 10 );

        try{
            const deleteName = Name.remove( parsedId );
            res.status(200).json( deleteName )
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
};