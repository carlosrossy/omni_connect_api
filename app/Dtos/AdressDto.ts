/* eslint-disable prettier/prettier */
export default interface AdressDto {
  postalCode: string
  adress: string
  adressNumber: string
  complement: string | undefined
  neighborhood: string
  uf: string
  city: string
}
