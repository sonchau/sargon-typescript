// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export interface Photo {
  title: string
  link: string
  media: object
  date_taken: string
  description: string
  published: string
  author: string
  author_id: string
  tags: string
}