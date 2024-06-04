export type User = {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string | null;
    createdAt: string;
}

export type SaveUserProps = {
    firstname: string;
    lastname: string;
    email: string;
    avatar: string | null;
}