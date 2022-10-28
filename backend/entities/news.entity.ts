import { Entity, Property } from "@mikro-orm/core";
import { NumberBase, StringBase } from "./supports/base.entity";
import { News as iNews } from './shared/news.interface';


@Entity({ collection: 'news' })
export class News extends NumberBase implements iNews {
    
    @Property() title: string;

    @Property() content: string;

    @Property() images?: string;

    @Property() status: boolean;

}