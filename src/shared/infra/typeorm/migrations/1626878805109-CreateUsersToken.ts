import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersToken1626878805109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_token",
                columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },
                {
                    name: "refresh_token",
                    type: "varchar"
                },
                {
                    name: "user_id",
                    type: "varchar"
                },
                {
                    name: "expires_date",
                    type: "timestamp"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                ],
                foreignKeys: [
                    {
                        name: "FKUserToken",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })    
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_token");
    }


}
