export type User = {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    description: string;
    domain: string;
    avatar: string | null;
    createdAt: string;
}

export type BoardItem = {
    boardId: string;
    name: string;
    description: string | null;
    userId: string | null;
    createdAt: string;
    updatedAt: string | null;
}

export type List = {
    listId: string;
    name: string;
    position: number | null;
    boardId: string | null;
    createdAt: string;
    updatedAt: string | null;
}

export type ListCardProps = List & {
    cards: Card[];
};

export type Card = {
    cardId: string;
    name: string;
    description: string | null;
    position: number | null;
    dueDate: string | null;
    listId: string | null;
    createdAt: string;
    updatedAt: string | null;
}

export type SaveUserProps = {
    firstname: string;
    lastname: string;
    email: string;
    avatar: string | null;
}

export interface SearchParams {
    [key: string]: string | string[] | undefined
}