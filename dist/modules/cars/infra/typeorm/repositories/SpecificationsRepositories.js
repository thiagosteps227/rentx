"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificationsRepository = void 0;

var _typeorm = require("typeorm");

var _Specification = _interopRequireDefault(require("../entities/Specification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SpecificationsRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Specification.default);
  }

  async create({
    description,
    name
  }) {
    const specification = this.repository.create({
      description,
      name
    });
    await this.repository.save(specification);
    return specification;
  }

  async findByName(name) {
    const specification = await this.repository.findOne({
      name
    });
    return specification;
  }

  async findByIds(ids) {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }

}

exports.SpecificationsRepository = SpecificationsRepository;