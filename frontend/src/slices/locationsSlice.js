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
    addLocation: builder.mutation({
      query: (data) => ({
        url: LOCATIONS_URL,
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(data), // Stringify the data to JSON format
      }),
      keepUnusedDataFor: 5,
      invalidatesTags: ["Location"],
    }),
    getSavedLocations: builder.query({
      query: () => ({
        url: `${LOCATIONS_URL}/saved`,
      }),
      keepUnusedDataFor: 5,
    }),
    deleteLocation: builder.mutation({
      query: (locationId) => ({
        url: `${LOCATIONS_URL}/${locationId}`,
        method: "DELETE",
      }),
      providesTags: ["Location"],
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetLocationQuery,
  useAddLocationMutation,
  useGetSavedLocationsQuery,
  useDeleteLocationMutation,
} = locationsApiSlice;
