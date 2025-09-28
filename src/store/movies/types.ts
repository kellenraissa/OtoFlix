import { MovieByIdResponse, MovieType } from "@/types/movies";
import { RequestStatus } from "@/types/RequestStatus";

export type MoviesState = {
  list: {
    items: MovieType[];
    page: number;
    totalPages: number;
    status: RequestStatus;
    error?: string;
  };
  detail: {
    current?: MovieByIdResponse;
    status: RequestStatus;
    error?: string;
  };
};
