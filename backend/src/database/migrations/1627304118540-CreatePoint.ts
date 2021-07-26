import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1624320980880 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "points",
        columns: [
          {
            name: "id",
            type: "numeric",
            isPrimary: true,
          },
          {
            name: "latitude",
            type: "float",
          },
          {
            name: "longitude",
            type: "float",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('points');
  }
}
