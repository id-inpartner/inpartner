export interface Rendered {
  readonly rendered: string
}

export interface Author {
  readonly id: number
  readonly name: string
  readonly slug: string
  readonly avatar_urls: Record<string, string>
}

export interface Image {
  readonly width: number
  readonly height: number
  readonly url: string
  readonly type: string
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

export interface YoastHead {
  readonly title: string
  readonly og_locale: string
  readonly og_type: string
  readonly og_title: string
  readonly og_description: string
  readonly og_url: string
  readonly og_site_name: string
  readonly og_image: ReadonlyArray<Image>
  readonly twitter_card: string
}

export interface Category {
  readonly id: number
  readonly name: string
  readonly slug: string
  readonly taxonomy: 'tag' | 'category'
}

export interface Post {
  readonly id: number
  readonly date: string
  readonly modified: string
  readonly slug: string
  readonly status: string
  readonly type: string
  readonly title: Rendered
  readonly content: Rendered
  readonly excerpt: Rendered
  readonly yoast_head: string
  readonly yoast_head_json: YoastHead
  readonly _embedded: {
    readonly author: ReadonlyArray<Author>
    readonly 'wp:term': ReadonlyArray<[Category]>
    readonly 'wp:featuredmedia': ReadonlyArray<Media>
  }
}
