export interface RcloneData {
  ID: string
  IsDir: boolean
  MimeType: string
  ModTime: string
  Name: string
  Path: string
  Size: number
} 

interface TMDB {
  id: number
  overview: string
  poster_path?: string
  backdrop_path?: string
  original_language: string
  genre_ids: number[]
  popularity: number
  vote_count: number
  vote_average: number
}

export interface TMDBshow extends TMDB {
  first_air_date: string
  origin_country: string[]
  name: string
  original_name: string
}

export interface TMDBfilm extends TMDB {
  title: string
  original_title: string
  adult: boolean
  video: boolean
}