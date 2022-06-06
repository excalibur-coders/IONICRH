import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user";

@Entity()
export class documentosAvatar {
    @PrimaryGeneratedColumn({ type: "int" })
    avatar_id!: number;

    @Column({
        type: "varchar",
        nullable: true
    })
    avatar_nome!: string;
    @Column({
        type: "longtext",
        nullable: true
    })
    avatar_url!: string;
    @Column({
        type: "float",
        nullable: true
    })
    avatar_size!: number;
    @Column({
        type: "varchar",
        nullable: true
    })
    avatar_type!: string;
    @Column({
        type: "varchar",
        nullable: true
    })
    avatar_header!: string;

    //Chave estrangeira
    @ManyToOne(() => user, (user) => user.docsavatar)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number
}
