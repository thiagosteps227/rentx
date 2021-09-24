"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesRepositoryInMemory = void 0;

var _Category = _interopRequireDefault(require("@modules/cars/infra/typeorm/entities/Category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CategoriesRepositoryInMemory {
  constructor() {
    this.categories = [];
  }

  async findByName(name) {
    const category = this.categories.find(category => category.name === name);
    return category;
  }

  async list() {
    const list = this.categories;
    return list;
  }

  async create({
    name,
    description
  }) {
    const category = new _Category.default();
    Object.assign(category, {
      name,
      description
    });
    this.categories.push(category);
  }

}

exports.CategoriesRepositoryInMemory = CategoriesRepositoryInMemory;