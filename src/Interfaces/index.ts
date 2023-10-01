import { PropsWithChildren } from "react";

//mock
export interface IMockJobs {
  uuid: string;
  amount: number;
  currency: string;
  executionDate: string;
  agent: string;
  contractPeriodicity: number;
  floorAndDoor: string;
  locationComment: string;
  type: string;
  duration: number;
  location: string;
  locationUuid: string;
}

export interface IMockLocation {
  location: string;
  total: number;
  jobs: string[];
  uuid: string;
  state: string;
  city: string;
}

export interface IJob {
  location: string;
  type: string;
  periodicity: string;
  agent: string;
  date: { day: string; month: string; date: number; time: string };
}

export interface ICleaningItem {
  address: string;
  jobs: IJob[];
}

export interface ICleanings {
  upcoming: ICleaningItem[];
  previous: ICleaningItem[];
}

export interface ICleaningsState {
  cleanings: ICleanings;
  isLoading: boolean;
  error: string;
}

// buttons
export interface IButton {
  isActive: boolean;
  text: string;
  testId?: string;
  id: string;
  handleChangeActiveTab: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

// Header
export interface IHeaderProps extends PropsWithChildren {
  testId?: string;
}

//Table
export interface ITable {
  testId?: string;
  cleanings: { previous: ICleaningItem[]; upcoming: ICleaningItem[] };
  isLoading: boolean;
}

export type IActiveState = "upcoming" | "previous";
