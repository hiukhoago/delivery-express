import { Injectable } from "@nestjs/common"
import { Builder } from "builder-pattern"
import { News } from "entities/news.entity"
import { NewsDTO } from "services/dtobjects/news.dto"
import { Mapper } from "./supports/base.mapper"

@Injectable()
export class NewsMapper extends Mapper<News, NewsDTO> {

    toDTO(source: News): NewsDTO {

        return Builder(NewsDTO)
            .id(source.id)
            .title(source.title)
            .content(source.content)
            .images(source.images)
            .status(source.status)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }

    toEntity(source: Partial<NewsDTO>): News {

        return Builder(News)
            .id(source.id)
            .title(source.title)
            .content(source.content)
            .images(source.images)
            .status(source.status)
            .build()
    }

}