import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'feedback.users'})

export class User {
    @PrimaryGeneratedColumn('increment',{name: "user_id"})
    userId: any;

   @Column({ name: "username", length: 100, nullable: true })
   userName: string;

   @IsEmail()
   @Column({ type: "varchar",name: "email", length: 50, unique: true, nullable: true })
   email: string;

   @Column({ type: "varchar", name: "password", length: 200, nullable: true })
   password: string;
   
   @Column({ type: 'timestamp',name:"created_at", default: () => 'CURRENT_TIMESTAMP' })
   createdAt: Date

   @Column({ type: 'timestamp',name:"updated_at", default: () => 'CURRENT_TIMESTAMP' })
   updatedAt: Date

}