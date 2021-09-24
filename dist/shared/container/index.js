"use strict";

var _tsyringe = require("tsyringe");

var _CategoriesRepository = require("@modules/cars/infra/typeorm/repositories/CategoriesRepository");

require("@shared/container/providers");

var _UsersRepository = require("@modules/accounts/infra/typeorm/repositories/UsersRepository");

var _SpecificationsRepositories = require("@modules/cars/infra/typeorm/repositories/SpecificationsRepositories");

var _CarsRepository = require("@modules/cars/infra/typeorm/repositories/CarsRepository");

var _CarImagesRepository = require("@modules/cars/infra/typeorm/repositories/CarImagesRepository");

var _RentalsRepository = require("@modules/rentals/infra/typeorm/repositories/RentalsRepository");

var _UsersTokensRepository = require("@modules/accounts/infra/typeorm/repositories/UsersTokensRepository");

_tsyringe.container.registerSingleton('CategoriesRepository', _CategoriesRepository.CategoriesRepository);

_tsyringe.container.registerSingleton('SpecificationsRepository', _SpecificationsRepositories.SpecificationsRepository);

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.UsersRepository);

_tsyringe.container.registerSingleton('CarsRepository', _CarsRepository.CarsRepository);

_tsyringe.container.registerSingleton('CarsImagesRepository', _CarImagesRepository.CarsImagesRepository);

_tsyringe.container.registerSingleton('RentalsRepository', _RentalsRepository.RentalsRepository);

_tsyringe.container.registerSingleton('UsersTokensRepository', _UsersTokensRepository.UsersTokensRepository);