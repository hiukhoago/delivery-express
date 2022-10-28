import { News } from "entities/news.entity";


//export dua tren ilement entity
export class NewsDTO  implements News {
    id: number;
    title: string;
    content: string;
    images?: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;

}