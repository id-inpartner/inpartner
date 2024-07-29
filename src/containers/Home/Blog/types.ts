export interface Rendered {
  readonly rendered: string
}

export interface Media {
  readonly id: string
  readonly slug: string
  readonly width: number
  readonly height: number
  readonly source_url: string
  readonly media_type: 'image' | 'video'
  readonly media_mime: string
  readonly alt_text: string
  readonly media_details: {
    readonly width: number
    readonly height: number
    readonly filesize: number
  }
}

export interface Category {
  readonly id: number
  readonly name: string
  readonly description: string
  readonly slug: string
  readonly taxonomy: string
}

export interface Post {
  readonly id: number
  readonly slug: string
  readonly title: Rendered
  readonly modified: string
  readonly _embedded: {
    readonly 'wp:term': ReadonlyArray<[Category]>
    readonly 'wp:featuredmedia': ReadonlyArray<Media>
  }
}
