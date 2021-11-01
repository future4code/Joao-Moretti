export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 }
 
export interface CreatePostpInputDTO{
    photo: string,
    description: string,
    type: POST_TYPES,
    token: string
}

export interface gePostByIdpInputDTO{
    id: string
}

export function toPostModel(obj: any): post {
    return obj && {
        id: obj.id,
        photo: obj.photo,
        description: obj.description,
        type: obj.type,
        createdAt: obj.created_at,
        authorId: obj.author_id
    }
}