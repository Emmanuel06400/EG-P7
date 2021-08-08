export interface Publication {
    isOwner: boolean;
    idpublications: number;
    title: string;
    body: string;
    media: string;
    idusers: number;
    user: {
        firstname: string,
        lastname: string,
        media: string
    };
    comments: any[];
}