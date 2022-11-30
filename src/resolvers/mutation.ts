import { ObjectId } from "mongo";
import { carsCollection } from "../db/dbconnection.ts";
import { Coche } from "../types.ts";

export const Mutation = {
  createCar: async (
    _: unknown,
    args: { matricula:string; modelo:string;n_plazas:number;color?:string}
  ): Promise<Coche> => {
    try {
      const exists = await carsCollection.findOne({ matricula: args.matricula });
      if (exists) {
        throw new Error("Car already exists");
      }

      const car = await carsCollection.insertOne({
        matricula: args.matricula,
        modelo: args.modelo,
        n_plazas: args.n_plazas,
       
      });
      return {
        id: car.toString(),
        matricula: args.matricula,
        modelo: args.modelo,
        n_plazas: args.n_plazas,
       
      };
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },}