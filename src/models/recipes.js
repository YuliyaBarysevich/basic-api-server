'use strict'

class RecipeModel {
  constructor() {
    this.id = 0;
    this.databaseArray = [];
  }

  create(obj) {
    let record = {
      id: ++this.id,
      record: obj
    }

    this.databaseArray.push(record);
    return record;
  }

  read(id) {

    if(id) {
      return this.databaseArray.find(record => record.id === id)
    } else {
      return this.databaseArray;
    }
  }

  update(id, obj){
    let index = this.databaseArray.indexOf(this.read(id))
    this.databaseArray[index].record = obj;
    return this.databaseArray[index]
  }

  delete(id){
    let index = this.databaseArray.indexOf(this.read(id))
    delete this.databaseArray[index]
  }


}

module.exports = RecipeModel;