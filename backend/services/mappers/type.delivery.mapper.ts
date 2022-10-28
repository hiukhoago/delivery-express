import { Builder } from "builder-pattern"
import { TypeDelivery } from "entities/type.delivery.entity"
import { TypeDeliveryDTO } from "services/dtobjects/type.delivery.dto"
import { Mapper } from "./supports/base.mapper"

export class TypeDeliveryMapper extends Mapper<TypeDelivery, TypeDeliveryDTO> {

    toDTO(source: TypeDelivery): TypeDeliveryDTO {

        return Builder(TypeDeliveryDTO)
            .id(source.id)
            .name(source.name)
            .fee(source.fee)
            .status(source.status)
            .description(source.description)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }

    toEntity(source: TypeDeliveryDTO): TypeDelivery {

        return Builder(TypeDelivery)
        .id(source.id)
        .name(source.name)
        .fee(source.fee)
        .status(source.status)
        .description(source.description)
        .createdAt(source.createdAt)
        .updatedAt(source.updatedAt)
        .build()
    }

}