import { MovieType } from "@/types/movies";
import { RequestStatus } from "@/types/RequestStatus";

export type MoviesState = {
  items: MovieType[];
  page: number;
  totalPages: number;
  status: RequestStatus;
  error?: string;
};
