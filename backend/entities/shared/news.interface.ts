
export interface News {

    id:number
    title: string // tiêu đề tin tức
    content : string // nội dung tin tức
    images?: string //ảnh minh họa nếu có.
    status: boolean

    createdAt: Date
    updatedAt: Date
}
   