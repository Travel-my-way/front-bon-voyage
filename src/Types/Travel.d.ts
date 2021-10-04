type TravelCategory = 'Carpooling' | 'Car' | 'Train' | 'Plane' | 'Bus';

interface TravelStep {
  arrival_date: number;
  arrival_point: [number, number];
  arrival_stop_name: string;
  booking_link?: string;
  departure_date: number;
  departure_point: [number, number];
  departure_stop_name: string;
  distance_m: number | string;
  duration_s: number;
  gCO2: string;
  id: string | number;
  label: string;
  price_EUR: number[];
  trip_code: string;
  type: TravelCategory;
}

interface Travel {
  arrival_date: number;
  arrival_point: [number, number];
  category: TravelCategory[];
  departure_date: number;
  departure_point: [number, number];
  id: string | number;
  is_real_journey: boolean;
  journey_steps: TravelStep[];
  label: string;
  score: string;
  total_distance: number;
  total_duration: number;
  total_gCO2: number;
  total_price_EUR: string;
}

type AlgoliaResponse = {
  name: string;
  latlng: {
    lat: number;
    lng: number;
  };
};
