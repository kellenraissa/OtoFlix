import { DetailsType } from "@/types/details";
import { RequestStatus } from "@/types/RequestStatus";

export type DetailsState = {
  current?: DetailsType;
  status: RequestStatus;
  error?: string;
};
