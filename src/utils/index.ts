import { ICleaningItem, IJob, IMockJobs, IMockLocation } from "../Interfaces";

const transformType = (type: string) =>
  type.toLocaleLowerCase().replace(/_/g, " ");

const transformCleaningDate = (data: Date, duration: IMockJobs["duration"]) => {
  enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec,
  }

  enum Days {
    SUN,
    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
  }

  const hours = data.getHours();
  const minutes = data.getMinutes();

  const timeString = `${hours}:${minutes < 10 ? "0" : ""}${minutes} - ${
    hours + duration
  }:${minutes < 10 ? "0" : ""}${minutes}`;

  const transformedCleaningDate = {
    day: Days[data.getDay()],
    month: Month[data.getMonth()],
    date: data.getDate(),
    time: timeString,
  };
  return transformedCleaningDate;
};

const transformPeriodicity = (
  periodicity: IMockJobs["contractPeriodicity"]
): string => {
  enum Periodicity {
    Weekly = "Weekly",
    TwoWeeks = "Two weeks",
    Monthly = "Monthly",
  }
  if (periodicity <= 7) {
    return Periodicity.Weekly;
  }
  if (periodicity > 7 && periodicity <= 14) {
    return Periodicity.TwoWeeks;
  }
  if (periodicity > 14 && periodicity <= 30) {
    return Periodicity.Monthly;
  }
  return "";
};

export const configureJobsStore = (
  cleanings: IMockJobs[],
  locations: IMockLocation[]
) => {
  const currentDate: Date = new Date();
  let upcoming: ICleaningItem[] = [];
  let previous: ICleaningItem[] = [];

  const arrLocations = locations.map((location: IMockLocation) => ({
    address: location.location,
    jobs: cleanings.filter(
      (cleaning) => cleaning.locationUuid === location.uuid
    ),
  }));

  arrLocations.forEach(
    ({ address, jobs }: { address: string; jobs: IMockJobs[] }) => {
      let previousObj: { address: string; jobs: IJob[] } = {
        address: "",
        jobs: [],
      };
      let upcomingObj: { address: string; jobs: IJob[] } = {
        address: "",
        jobs: [],
      };

      jobs.forEach((job: IMockJobs) => {
        const cleaningDate: Date = new Date(job.executionDate);

        const initJob = {
          agent: job.agent,
          location: job.location,
          type: transformType(job.type),
          periodicity: transformPeriodicity(job.contractPeriodicity),
          date: transformCleaningDate(cleaningDate, job.duration),
        };

        if (cleaningDate.getTime() < currentDate.getTime()) {
          previousObj.address = address;
          previousObj.jobs.push(initJob);
        } else {
          upcomingObj.address = address;
          upcomingObj.jobs.push(initJob);
        }
      });

      if (previousObj.address) {
        previous.push(previousObj);
      }
      if (upcomingObj.address) {
        upcoming.push(upcomingObj);
      }
    }
  );
  return { previous, upcoming };
};
