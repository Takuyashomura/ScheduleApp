const Schedule = require('../../models/schedules/schedules');

module.exports = {
    getSchedules: ( req, res ) => {
        const storedNames = Schedule.findAll()

        res.set({ 'Access-Control-Allow-Origin': '*' });
        res.status( 200 ).json( storedNames );
    },

    postSchedule: ( req, res ) => {
        try{
        const { name, date, comment } = req.body;
        const createdSchedule = Schedule.createSchedule({ name, date, comment });

        res.status( 200 ).json( createdSchedule );
        } catch (error) {
            res.status( 400 ).json({ message: error.message })
        }
    },

    deleteSchedule: ( req, res ) => {
        const id = req.params.id;
        const parsedId = parseInt( id, 10 );

        try{
            const deleteSchedule = Schedule.remove( parsedId );
            res.status(200).json( deleteSchedule )
        } catch ( error ) {
            res.status(400).json({message: error.message})
        }
    }
}