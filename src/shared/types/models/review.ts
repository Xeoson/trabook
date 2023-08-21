import { IUser } from "./user"

export interface IReview {
	id: string
	authorId: string,
	body: string
}

export interface IReviewPopulated extends IReview {
	author: IUser
}