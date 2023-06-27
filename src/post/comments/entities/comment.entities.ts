import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'feedback.comments'})

export class Comment {
    @PrimaryGeneratedColumn('increment',{type:'int',name: "id"})
    Id: number;

    @Column({type: "text", name: "content", nullable: false })
   content: number;

   @Column({type: "int", name: "post_user_id", nullable: false })
   postUserId: number;

   @Column({type: "int", name: "comment_user_id", nullable: false })
   commentUserId: number;

   @Column({type: "int", name: "post_id", nullable: false })
   postId: number;
   
   @Column({ type: 'timestamp',name:"created_at", default: () => 'CURRENT_TIMESTAMP' })
   createdAt: Date

   @Column({ type: 'timestamp',name:"updated_at", default: () => 'CURRENT_TIMESTAMP' })
   updatedAt: Date

}