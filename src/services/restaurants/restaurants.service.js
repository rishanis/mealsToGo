import { mockImages, mocks } from "./mock";
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

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaruant) => {
    restaruant.photos = restaruant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaruant,
      isOpenNow: restaruant.opening_hours && restaruant.opening_hours.open_now,
      isClosedTemporarily: restaruant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
