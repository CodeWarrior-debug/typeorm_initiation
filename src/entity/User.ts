import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { UserSex } from "./enums";

// export type LivingStyle = "philosophical" | "religious" | "moral" | "aesthetic";

@Entity()
export class User {

  // DIGITAL VALUES
  @PrimaryGeneratedColumn()
  id: number;

  // PERSONAL - FIXED, GOVERNMENT PASSPORT VALUES
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column({unique:true})
  userName: string;
  @Column({type: "date"})
  dateOfBirth: Date;

  // CONTACT VALUES
    // @Column({type: "bigint"})
    // phoneNumber: number;
  @Column()
  email: string;

  // CUSTOM VALUES
  // @Column({ type: "enum", enum: ["philosophical", "religious", "moral", "aesthetic"], default: "aesthetic" })
  // lifestyle: LivingStyle;
  @Column({ type: "enum", enum: UserSex, default: UserSex.NOT_SPECIFIED })
  sex: UserSex;
}
