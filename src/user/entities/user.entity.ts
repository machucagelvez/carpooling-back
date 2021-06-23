import { hash } from "bcryptjs";
import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User{

    @PrimaryGeneratedColumn()
    userId: number;

    @Column({type: "varchar", length: 30})
    user: string;

    @Column({type: "varchar", length: 128, select: false})
    password: string;

    @Column({type: "varchar", length: 50})
    email: string;

    @Column({type: "int"})
    phone: number;

    @Column({type: "bool", default: true})
    userType: boolean;

    @Column({type: "varchar", length: 100})
    waLink: string;

    @Column({type: "bool", default: true})
    rol: boolean;

    @Column({type: "int"})
    notificationId: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @OneToMany(() => Vehicle, vehicle => vehicle.user, {eager: true})
    vehicle: Vehicle[];

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      if (!this.password) {
        return;
      }
      this.password = await hash(this.password, 10);
    }
}