export interface GiphyResponse{
    data: GiphyItem[]
}

export interface GiphyItem{
    id: number
    title: string;
    images: {
        original: {
            url: string;
        }
    }
}