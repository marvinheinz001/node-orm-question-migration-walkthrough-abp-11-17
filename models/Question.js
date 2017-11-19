'use strict';

const db = require("../config/db")

class Question{
  static CreateTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )
    `
    return new Promise(function(resolve){
      db.run(sql, function(){
        resolve("Success, questions table created")
      })
    })
  }
}


module.exports = Question;
