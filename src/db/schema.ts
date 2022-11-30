import { Coche } from "../types.ts";
import { ObjectId } from "mongo";

export type CarSchema = Omit<Coche, "id"> & {
  _id: ObjectId;
};
