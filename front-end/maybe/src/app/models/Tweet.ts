export interface ITweet{
    title: string;
    username: string;
    body: string;
    tags: string [];
    date: string;
    comments: [
        {
            username: String;
            body: String;
            date: String;
        }
    ]
}
 