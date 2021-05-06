import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaruant) => {
    return {
      ...restaruant,
      isOpenNow: restaruant.opening_hours && restaruant.opening_hours.open_now,
      isClosedTemporarily: restaruant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
