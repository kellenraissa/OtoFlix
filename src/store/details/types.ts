import { DetailsByIdResponse } from "@/types/details";
import { RequestStatus } from "@/types/RequestStatus";

export type DetailsState = {
  current?: DetailsByIdResponse;
  status: RequestStatus;
  error?: string;
};
