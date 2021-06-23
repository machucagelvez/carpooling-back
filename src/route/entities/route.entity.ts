import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


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

    @ManyToOne(() => Vehicle, vehicle => vehicle.route)
    vehicle: Vehicle
}