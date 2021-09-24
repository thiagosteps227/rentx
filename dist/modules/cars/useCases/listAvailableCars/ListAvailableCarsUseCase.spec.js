"use strict";

var _CarsRepositoryInMemory = require("@modules/cars/repositories/in-memory/CarsRepositoryInMemory");

var _ListAvailableCarsUseCase = require("./ListAvailableCarsUseCase");

let listAvailableCarsUseCase;
let carsRepositoryInMemory;
describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    listAvailableCarsUseCase = new _ListAvailableCarsUseCase.ListAvailableCarsUseCase(carsRepositoryInMemory);
  });
  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Carro description",
      daily_rate: 110,
      license_plate: "DEF-1234",
      fine_amount: 100,
      brand: "Car brand",
      category_id: "category id"
    });
    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Carro description",
      daily_rate: 110,
      license_plate: "DEF-1234",
      fine_amount: 100,
      brand: "Car brand test",
      category_id: "category id"
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car brand test"
    });
    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Carro description",
      daily_rate: 110,
      license_plate: "DEF-1235",
      fine_amount: 40,
      brand: "Car brand test",
      category_id: "category id"
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3"
    });
    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Carro description",
      daily_rate: 110,
      license_plate: "DEF-1235",
      fine_amount: 40,
      brand: "Car brand test",
      category_id: "12345"
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345"
    });
    expect(cars).toEqual([car]);
  });
});