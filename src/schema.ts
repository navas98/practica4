import { gql } from "graphql_tag";

export const typeDefs = gql`
  
  type Coche {
    matricula:String!
    modelo:String!
    n_plazas:Int!
    
  }
  type Vendedor{
    id:String!
    nombre:String!
    apellido:String!
    telefono:String!
    coches:[String!]!
  }
  type Concesionario{
    id:String!
    nombre:String!
    ciudad:String!
    calle:String!
    telefono:String!
    vendedores:[String!]!
  }

  type Query {
    getCars: [Car!]!
    getCar(id: ID!): Car
  }

  type Mutation {
    createCar(modelo:String!,n:plazas:String!, color:String): Car!
    updateCar(id: ID!, plate: String!, brand: String!, seats: Int!): Car!
    deleteCar(id: ID!): Car!
  }
`;
