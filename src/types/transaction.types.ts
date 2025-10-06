interface Itransaction {
    sender_id_number: number,
    receiver_id: number,
    amount: number
}

interface ItransactionParams {
    sender_id: number,
}

export type { Itransaction, ItransactionParams }
