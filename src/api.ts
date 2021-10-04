import { delay } from './utils';

const fetchRequestId = async (from: string, to: string, at: number, numberOfPassenger: number) => {
  return await fetch(
    // `https://api.bonvoyage-eco.net/journey?from=${from}&to=${to}&start=${at}&nb_passenger=${numberOfPassenger}`,
    `https://api.bonvoyage-eco.net/journey?from=48.838944,2.353358&to=47.217518,-1.589960&start=1634716085&nb_passenger=1`,
    {
      method: 'POST',
    }
  ).then((res) => res.json());
};

const fetchTravels = async (uuid: string) => {
  return await fetch(`https://api.bonvoyage-eco.net/results?request_id=${uuid}`, {
    method: 'GET',
  }).then((res) => res.json());
};

export const getTravels = async (from: string, to: string, at: Date, numberOfPassenger: number) => {
  try {
    const requestId = await fetchRequestId(from, to, Math.round(at.valueOf() / 1000), numberOfPassenger);

    await delay(3000);

    let travelsResponse = await fetchTravels(requestId.uuid).catch((err) => err);

    let numberOfRetry = 0;
    while (numberOfRetry <= 10) {
      travelsResponse = await fetchTravels(requestId.uuid).catch((err) => err);

      if (travelsResponse.status === 'success') {
        return travelsResponse.journeys;
      }

      await delay(3000);

      numberOfRetry++;
    }

    return travelsResponse;
  } catch (err) {
    console.trace({ err });
  }
};
