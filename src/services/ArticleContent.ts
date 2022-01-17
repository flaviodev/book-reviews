export type Article = {
    name: string,
    title: string,
    content: string[]
}

export const ArticleContent: Article[] = [
    {
        name : "article-one",
        title: "Title article one",
        content: [
            "paragraph one",
            "paragraph two",
            "paragraph three",
        ]
    },
    {
        name : "article-two",
        title: "Title article two",
        content: [
            "paragraph one",
            "paragraph two",
            "paragraph three",
        ]
    }
];