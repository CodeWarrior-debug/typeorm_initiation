import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AgreementStatus } from "./enums";
import { timeStamp } from "console";

@Entity()
export class userQuoteEval {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  user_id: number;

  @Column()
  quote_id: number;

  @Column({
    type: "enum",
    enum: AgreementStatus,
    default: AgreementStatus.NOT_SPECIFIED,
  })
  agreement: AgreementStatus;

  @Column()
  timestamp: Date;
}
