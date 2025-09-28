interface Iuser {
    name: string,
    email: string,
    password: string,
    balance?: number
}

interface IUpdateUserParams {
    id: number
}

export type { Iuser, IUpdateUserParams }