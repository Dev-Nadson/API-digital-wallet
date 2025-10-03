interface Iuser {
    name: string,
    email: string,
    password: string,
    balance?: number
}

interface Itransation {
    sender_id_number: number,
    receiver_id: number,
    amount: number
}

interface ItransationParams {
    sender_id: number,
}

interface IUpdateUserParams {
    id: number
}

export type { Iuser, IUpdateUserParams, Itransation, ItransationParams }