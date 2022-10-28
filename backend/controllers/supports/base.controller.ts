import { Logger } from '@nestjs/common'
import { Service } from '../../services/supports/base.service'
import { Query as iQuery } from '../../entities/shared/interface'


export abstract class Controller<E, D>{

    readonly logger = new Logger(Controller.name)
 ss
    constructor(
        protected readonly service: Service<E, D>
    ) { }

    abstract find(query: iQuery): Promise<D[]>  
    abstract findOne(id: string | number): Promise<D> 
    abstract create(dto: D): Promise<D>  
    abstract update(id: string | number, dto: D): Promise<D> 
    abstract patch(id: string | number, dto: D): Promise<D> 
    abstract delete(id: string | number): Promise<number> 
}
