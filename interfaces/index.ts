

type Media = {
  m: string
}
export interface Photo {
  title: string
  link: string
  media: Media
  date_taken: string
  description: string
  published: string
  author: string
  author_id: string
  tags: string
}

export interface PhotoList {
  photoList: Photo[]
}

