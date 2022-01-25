export interface Topic {
    id: string,
    label: string,
    volume: number,
    type: string,
    sentiment: {
        negative: number,
        neutral: number,
        positive: number
    }
    sentimentScore: number,
    burst: number,
    days: [
        {
            date: string,
            volume: number
        },
        {
            date: string,
            volume: number
        },
        {
            date: string,
            volume: number
        },
        {
            date: string,
            volume: number
        },
        {
            date: string,
            volume: number
        },
        {
            date: string,
            volume: number
        },
        {
            date: string,
            volume: number
        }
    ],
    pageType: {
        blog: number,
        facebook: number,
        forum: number,
        general: number,
        image: number,
        news: number,
        review: number,
        twitter: number,
        video: number
    },
    queries: [
        {
            id: number,
            name: string,
            volume: number
        }
    ]
}


export interface Metadata {
    label: string,
    volume: number,
    sentiment: {
        negative?: number,
        neutral?: number,
        positive?: number
    }
    color: string

}