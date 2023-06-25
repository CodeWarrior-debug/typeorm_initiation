import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

// postgres column types
// int, int2, int4, int8, smallint, integer, bigint, decimal, numeric, real, float, float4, float8, double precision, money,
// character varying, varchar, character, char, text, citext, hstore, bytea, bit, varbit, bit varying, timetz, timestamptz, timestamp,
// timestamp without time zone, timestamp with time zone, date, time, time without time zone, time with time zone, interval, bool,
// boolean, enum, point, line, lseg, box, path, polygon, circle, cidr, inet, macaddr, tsvector, tsquery, uuid, xml, json, jsonb,
// int4range, int8range, numrange, tsrange, tstzrange, daterange, geometry, geography, cube, ltree

@Entity()
export class Quote {
  // @PrimaryGeneratedColumn("uuid")
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  quotation: string;

  @Column("simple-array")
  tags: string[];

  @Column("simple-json")
  source_details: {
    voicer: string;
    source_type: string;
    pct_attribution_confidence: number; // 0 to 100
    source_id: number;
    source_specifics: object; //will this work?
  };
}
