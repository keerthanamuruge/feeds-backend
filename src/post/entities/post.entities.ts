import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'feedback.post'})

export class Post {
    @PrimaryGeneratedColumn('increment',{type:'int',name: "id"})
    Id: number;

   @Column({ name: "title", length: 100, nullable: false })
   title: string;

   @Column({type: "int", name: "user_id", nullable: false })
   userId: number;

   @Column({ type: "text",name: "tag", nullable: true })
   tag: string;

   @Column({ type: "text",name: "body",nullable: false })
   body: string;

   @Column({ type: "boolean", name: "is_global"})
   isGlobal: boolean;

   @Column({ type: "boolean", name: "is_comment"})
   isComment: boolean;
   
   @Column({ type: 'timestamp',name:"created_at", default: () => 'CURRENT_TIMESTAMP' })
   createdAt: Date

   @Column({ type: 'timestamp',name:"updated_at", default: () => 'CURRENT_TIMESTAMP' })
   updatedAt: Date

}