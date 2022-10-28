import { Entity, PrimaryKey, Property } from "@mikro-orm/core"
import { Worker } from 'snowflake-uuid'
import { Long } from 'bson'

const generator = new Worker(0, 1, {
  workerIdBits: 5,
  datacenterIdBits: 5,
  sequenceBits: 12,
})


export const snowflakeInt = () =>  +(generator.nextId().toString().slice(0,8)) //genarator snowflake id 8 number
export const snowflakeStr = () =>  generator.nextId().toString().slice(0,8) //genarator snowflake id 8 string

export class Base {

  @Property({ onCreate: () => new Date() })
  createdAt: Date;

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date;

}

export class NumberBase {

  @PrimaryKey({ type: Number, fieldName: '_id' ,onCreate: () => snowflakeInt() })
  id!: number

  @Property({ onCreate: () => new Date() })
  createdAt: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date
}

export class StringBase {

  @PrimaryKey({ type: String, fieldName: '_id',onCreate: () => snowflakeStr() })
  id!: string

  @Property({ onCreate: () => new Date() })
  createdAt: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date
}
