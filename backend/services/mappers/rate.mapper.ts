

//luu y khong pha nhat thiet phai  co dto va mapper 
//dto  va mapper can thiet khi phai su dung lien quan den database

import { Rate } from "entities/rate.entity"
import { RateDTO } from "services/dtobjects/rate.dto"
import { Mapper } from "./supports/base.mapper"
import { Builder } from 'builder-pattern';

//to DTO => entity -> dto
//to entity => dto -> entity

//luu y khi map to entity thi se ko co field createdAt, updatedAt

export class RateMapper extends Mapper<Rate, RateDTO> {
    
        toDTO(e: Rate): RateDTO {
    
            return Builder(RateDTO)
                .id(e.id)
                .userId(e.userId)
                .orderId(e.orderId)
                .emailUser(e.emailUser)
                .commentUser(e.commentUser)
                .rating(e.rating)
                .createdAt(e.createdAt)
                .updatedAt(e.updatedAt)
                .build()
    
        }
    
        toEntity(d: RateDTO): Rate {
    
            return Builder(Rate)
                .id(d.id)
                .userId(d.userId)
                .orderId(d.orderId)
                .commentUser(d.commentUser)
                .emailUser(d.emailUser)
                .rating(d.rating)
                .build()
    
        }
    
}
