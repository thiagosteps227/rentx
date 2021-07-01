import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { nodeModuleNameResolver } from "typescript";

export class CreateRentals1625127874109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "rentals",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true},
                    {
                        name: "car_id",
                        type: "varchar"
                    },
                    {
                        name:"user_id",
                        type: "varchar"
                    },
                    {
                        name: "start_date",
                        type: "timestamp"
                    },
                    {
                        name: "end_date",
                        type: "timestamp"
                    },
                    {
                        name: "expected_return_date",
                        type: "timestamp"
                    },
                    {
                        name: "total",
                        type: "numeric"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name:"FKCarRental",
                        referencedTableName: "cars",
                        referencedColumnNames: ["id"],
                        columnNames: ["car_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name:"FKUserRental",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rentals");
    }

}
