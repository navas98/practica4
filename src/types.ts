export type Coche = {
  id:string
  matricula:string,
  modelo:string,
  n_plazas:number,
  
};
export type Vendedor={
  id:string,
  nombre:string,
  apellido:string,
  telefono:string,
  coches:[string],
}
export type concesionario={
  id:string,
  nombre:string
  ciudad:string,
  calle:string
  telefono:string,
  vendedores:[string]
}
