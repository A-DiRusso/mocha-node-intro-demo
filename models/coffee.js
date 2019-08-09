const db = require('./conn');

class Coffee {
  constructor(id, name, bespoke, size) {
    this.id =id;
    this.name = name;
    this.bespoke = bespoke;
    this.size = size;
  }
  static getById(id) {
    return db.one(`select * from coffee where id=${id}`)
      .then((oneCoffeeData) => {
        const coffeeInstance = new Coffee(oneCoffeeData.id,
                                          oneCoffeeData.name,
                                          oneCoffeeData.bespoke,
                                          oneCoffeeData.size
                                          );
        return coffeeInstance;
      })
      .catch(() => {
        return null;
      });
  }

  save(){
    return db.result(`
      update coffee set
      name=${this.name},
      bespoke=${this.bespoke},
      size=${this.size},
    where id=${this.id}
    `);
  }

}
module.exports = Coffee;