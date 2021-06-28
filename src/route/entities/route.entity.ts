import { User } from "src/user/entities/user.entity";
import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('route')
export class Route{

    @PrimaryGeneratedColumn()
    routeId: number
    
    @Column({type: "varchar", length: 30})
    schedule: string;

    @Column({type: "varchar", length: 30})
    time: string;

    @Column({type: "varchar", length: 50})
    routeName: string;

    @Column({type: "int"})
    cost: number;
    
    @Column({type: "varchar", length: 50})
    routeOrigin: string;
   
    @Column({type: "varchar", length: 50})
    routeDestination: string;

    @Column({type: "int"})
    spaces: number;

    @Column({type: "int"})
    emptySpaces: number;

    @Column({type: "varchar", length: 30})
    carpooler: string;

    @Column({type: "longtext"})
    createdRoute: JSON

    @ManyToOne(() => Vehicle, vehicle => vehicle.route)
    vehicle: Vehicle

    @ManyToMany(() => User, user => user.routes)
    users: User[];
}