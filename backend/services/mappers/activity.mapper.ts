import { Injectable } from "@nestjs/common"
import { Builder } from "builder-pattern"
import { Activity } from "entities/activity.entity"
import { ActivityDTO } from "services/dtobjects/activity.dto"
import { Mapper } from "./supports/base.mapper"

@Injectable()
export class ActivityMapper extends Mapper<Activity, ActivityDTO> {

    toDTO(source: Activity): ActivityDTO {

        return Builder(ActivityDTO)
            .id(source.id)
            .activityType(source.activityType)
            .userId(source.userId)
            .user(source.user)
            .amount(source.amount)
            .state(source.state)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }

    toEntity(source: Partial<ActivityDTO>): Activity {

        return Builder(Activity)
            .id(source.id)
            .activityType(source.activityType)
            .userId(source.userId)
            .user(source.user)
            .amount(source.amount)
            .state(source.state)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }

}