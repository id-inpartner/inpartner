export interface Rendered {
  readonly rendered: string
}

export interface MediaDetail {
  readonly width: number
  readonly height: number
  readonly source_url: string
}

export interface FeaturedMedia {
  readonly title: Rendered
  readonly caption: Rendered
  readonly alt_text: string
  readonly source_url: string
  readonly media_details: {
    readonly width: number
    readonly height: number
    readonly sizes: {
      readonly thumbnail: MediaDetail
      readonly medium: MediaDetail
      readonly full: MediaDetail
    }
  }
}

export interface Term {
  readonly id: number
  readonly name: string
  readonly taxonomy: string
  readonly color?: string | null
}

export interface PlainPost {
  readonly id: number
  readonly slug: string
  readonly title: string
  readonly author: string
  readonly date: string
  readonly image: string
}

export interface WordpressPost {
  readonly id: number
  readonly date: string
  readonly slug: string
  readonly title: Rendered
  readonly content: Rendered
  readonly excerptText: string
  readonly yoast_head_json: unknown
  readonly relatedPosts: ReadonlyArray<PlainPost>
  readonly next?: PlainPost | null
  readonly previous?: PlainPost | null
  readonly viewCount: number
  readonly _embedded: {
    readonly author: ReadonlyArray<{
      readonly name: string
    }>
    readonly 'wp:featuredmedia'?: ReadonlyArray<FeaturedMedia>
    readonly 'wp:term': ReadonlyArray<ReadonlyArray<Term>>
  }
}

export interface MappedFeaturedImage {
  readonly sourceUrl: string
  readonly altText: string
  readonly title: string
  readonly caption: string
  readonly width: number
  readonly height: number
  readonly thumbnail: {
    readonly sourceUrl: string
    readonly width: number
    readonly height: number
  }
  readonly medium: {
    readonly sourceUrl: string
    readonly width: number
    readonly height: number
  }
}

const mapFeaturedImage = (image: ReadonlyArray<FeaturedMedia>) => {
  if (image.length > 0) {
    const img = image[0]
    const thumbnail = img.media_details.sizes.thumbnail
    const medium = img.media_details.sizes.medium
    return {
      sourceUrl: img.source_url,
      altText: img.alt_text,
      title: img.title.rendered,
      caption: img.caption.rendered,
      width: img.media_details.width,
      height: img.media_details.height,
      thumbnail: {
        sourceUrl: thumbnail.source_url,
        width: thumbnail.width,
        height: thumbnail.height,
      },
      medium: {
        sourceUrl: medium.source_url,
        width: medium.width,
        height: medium.height,
      },
    }
  }

  return null
}

export interface MappedTerm {
  readonly id: number
  readonly name: string
  readonly taxonomy: string
}

const mapTerms = (
  terms: ReadonlyArray<ReadonlyArray<Term>>,
  type: 'category' | 'post_tag'
) => {
  const arrTerms: Term[] = []
  terms.map((term) =>
    term.map(({ id, taxonomy, name, color }) => {
      const obj = {
        id,
        taxonomy,
        name,
      }
      if (taxonomy === type) {
        arrTerms.push({
          ...obj,
          color,
        })
      }
    })
  )
  return arrTerms
}

export interface MappedWordpressPost {
  readonly id: number
  readonly slug: string
  readonly title: string
  readonly viewCount: number
  readonly excerpt: string
  readonly content: string
  readonly yoastHead: unknown
  readonly publishDate: string
  readonly author: string | null
  readonly featuredImage: MappedFeaturedImage | null
  readonly categories: ReadonlyArray<MappedTerm>
  readonly tags: ReadonlyArray<MappedTerm>
  readonly relatedPosts?: ReadonlyArray<PlainPost>
  readonly previousPost?: PlainPost | null
  readonly nextPost?: PlainPost | null
}

export const mapWordpressPosts = (
  posts: ReadonlyArray<WordpressPost>
): ReadonlyArray<MappedWordpressPost> => {
  return posts.map((post) => mapWordpressPost(post))
}

export const mapWordpressPost = (
  post: WordpressPost,
  next = false,
  prev = false
): MappedWordpressPost => ({
  id: post.id,
  slug: post.slug,
  title: post.title.rendered,
  viewCount: post.viewCount,
  excerpt: post.excerptText,
  content: post.content.rendered,
  yoastHead: post.yoast_head_json,
  publishDate: post.date,
  author:
    post._embedded.author.length > 0 ? post._embedded.author[0].name : null,
  featuredImage: post._embedded['wp:featuredmedia']
    ? mapFeaturedImage(post._embedded['wp:featuredmedia'])
    : null,
  categories: mapTerms(post._embedded['wp:term'], 'category'),
  tags: mapTerms(post._embedded['wp:term'], 'post_tag'),
  relatedPosts: post.relatedPosts,
  previousPost: prev ? post.previous : undefined,
  nextPost: next ? post.next : undefined,
})
