interface Iuser {
    name: string,
    email: string,
    password: string,
    balance?: number
}

interface Itransation {
    sender_id: number,
}
interface ItransationParams {
    receiver_id: number,
    amount: number
}

interface IUpdateUserParams {
    id: number
}

export type { Iuser, IUpdateUserParams, Itransation, ItransationParams }