import { apiSlice } from "./apiSlice";
import { LOCATIONS_URL } from "./../constants";

export const locationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => ({
        url: LOCATIONS_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Locations"],
    }),
    getLocation: builder.query({
      query: (locationId) => ({
        url: `${LOCATIONS_URL}/${locationId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetLocationsQuery, useGetLocationQuery } = locationsApiSlice;
