interface Iuser {
    name: string,
    email: string,
    password: string,
    balance?: number
}

interface Itransaction {
    sender_id_number: number,
    receiver_id: number,
    amount: number
}

interface ItransactionParams {
    sender_id: number,
}

interface IUpdateUserParams {
    id: number
}

export type { Iuser, IUpdateUserParams, Itransaction, ItransactionParams }