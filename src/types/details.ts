//-------------- Get Details by Id ------------

export interface GetDetailsByIdParams {
  movieId?: string;
  language?: string;
}

type ProductionCompanies = {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
};

type ProductionCountries = {
  iso_3166_1?: string;
  name?: string;
};

type SpokenLanguages = {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
};

export interface DetailsType {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: string | null;
  budget?: number;
  genres: {
    id?: number;
    name?: string;
  }[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  origin_country?: string[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompanies[];
  production_countries?: ProductionCountries[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages: SpokenLanguages[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
