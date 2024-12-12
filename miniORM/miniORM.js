// Tables and fields - model is the structure and relationship between entities (table)

// js property / database field -> Attribute
// js Objects / database tables -> Entity

class Attr {
    constructor(name, value = "", displayName = "") {
        this.name = name;
        this.value = value;
        this.displayName = displayName ? displayName : name;
    }
};

class Entity {
    constructor(name, attrList = []) {
        this.name = name;
        this.attrList = attrList;
    }
    getAttrNames() {
        return this.attrList.map(a => a.name).join(", ")
    }
    getAttrValues() {
        return this.attrList.map(a => `'${a.value}'`).join(", ")
    }
    create() { // Insert
        let sql = `
            INSERT INTO ${this.name}
            (${this.getAttrNames()})
            VALUES 
            (${this.getAttrValues()})
        `;
        // ToDo
        return sql;
    }
    read() {
        let sql = "";
        // ToDo
        return sql;
    }
    update() {
        let sql = "";
        // ToDo
        return sql;
    }
    delete() {
        let sql = "";
        // ToDo
        return sql;
    }
};

// Test Code
userProfile = new Entity("user_profile", [
    new Attr("id", 1),
    new Attr("username", "The_Big_Juck"),
    new Attr("password", "MotherJucker"),
]);

sql = userProfile.create();
// const resultSet = DB.query(sql);
console.log(sql);