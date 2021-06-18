import { CarsRespositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase"

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRespositoryInMemory;

describe("List Cars", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRespositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
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

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {

    const car = await carsRepositoryInMemory.create({
      name: "Car2",
	    description: "Carro description",
	    daily_rate: 110,
	    license_plate: "DEF-1234",
	    fine_amount: 100,
	    brand: "Car brand test",
	    category_id: "category id"
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car brand test"
    });

    expect(cars).toEqual([car]);
  })
})