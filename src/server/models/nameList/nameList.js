const names = [];
let nextId = 1;

class Name {
    constructor({ name }) {
        this.id = nextId++;
        this.name = name;
    }
};

for(i = 0; i < 2; i++){
    const index = i + 1;
    const name = new Name({
        name: 'ゲスト' + index
    });
    names.push(name);
};

module.exports = {
    findAll: () => {
        return names.slice();
    },

    createUser: ({ name }) => {
        
        const newName = new Name ({
            name: name
        });
        names.push(newName)

        return newName
    },

    remove: ( id ) => {
        const targetIndex = names.findIndex( name => id === name.id );
        if( targetIndex === -1 ){
            alert("ユーザーIDが見つかりません。");

        } else {
        const removeName = names.splice( targetIndex, 1)[0];

        return removeName;
        }
        
    }
}