const schedules = [];
let nextId = 1;

class Schedule {
    constructor({ name, date, comment }) {
        this.id = nextId++;
        this.name = name;
        this.date = date;
        this.comment = comment;
    }
};

module.exports = {
    findAll: () => {
        return schedules.slice();
    },

    createSchedule: ({ name, date, comment }) => {
        const newSchedule = new Schedule ({
            name: name,
            date: date,
            comment: comment
        });
        schedules.push( newSchedule )

        return newSchedule
    },

    remove: ( id ) => {
        const targetIndex = schedules.findIndex( schedule => id === schedule.id );

        if( targetIndex === -1 ) {
            alert("スケジュールIDが見つかりません。");

        } else {
            const removeSchedule = schedules.splice( targetIndex, 1)[0];

            return removeSchedule;
        }
    }

}
