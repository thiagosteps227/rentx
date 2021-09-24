"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropUsernameColumn1623838133927 = void 0;

var _typeorm = require("typeorm");

class DropUsernameColumn1623838133927 {
  async up(queryRunner) {
    await queryRunner.dropColumn('users', 'username');
  }

  async down(queryRunner) {
    await queryRunner.addColumn('users', new _typeorm.TableColumn({
      name: 'username',
      type: 'varchar',
      isNullable: true
    }));
  }

}

exports.DropUsernameColumn1623838133927 = DropUsernameColumn1623838133927;