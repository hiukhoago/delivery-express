export abstract class Mapper<E, D> {

    abstract toDTO(entity: E): D
  
    abstract toEntity(dto: D): E
  
  }
  