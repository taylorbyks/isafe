import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('points')
export class Point {
  @PrimaryColumn()
  readonly id: String

  @Column()
  longitude: String

  @Column()
  latitude: String

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
