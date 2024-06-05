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

export type SaveUserProps = {
    firstname: string;
    lastname: string;
    email: string;
    avatar: string | null;
}