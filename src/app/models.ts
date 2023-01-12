export interface Registration {
    // id?: string
    name: string
    email: string
    phone: string
    title: string
    description: string
    image: string
}

export interface PostDetail {
    posting_id?: string
    posting_date?: string
    name: string
    email: string
    phone: string
    title: string
    description: string
    image: string
}

export interface Response {
    code: number
    message?: string
    data?: any
}