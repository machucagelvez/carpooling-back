import { hash } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User{

    @PrimaryGeneratedColumn()
    userId: number;

    @Column({type: "varchar", length: 30})
    user: string;

    @Column({type: "varchar", length: 30, select: false})
    password: string;

    @Column({type: "varchar", length: 50})
    email: string;

    @Column({type: "varchar", length: 20})
    phone: string;

    @Column({type: "bool", default: true})
    userType: boolean;

    @Column({type: "varchar", length: 100})
    waLink: string;

    @Column({type: "bool"})
    rol: boolean;

    @Column({type: "int"})
    notificationId: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      if (!this.password) {
        return;
      }
      this.password = await hash(this.password, 10);
    }
}