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
    uploadLocationImage: builder.mutation({
      query: (data) => ({
        url: `/api/upload`,
        method: "POST",
        body: data,
      }),
    }),
    addFavourite: builder.mutation({
      query: (locationId) => ({
        url: `${LOCATIONS_URL}/${locationId}/favourites`,
        method: "POST",
        body: { locationId }, // Wrap locationId in an object to match req.body in the backend
      }),
    }),
    getFavouriteLocations: builder.query({
      query: () => ({
        url: `${LOCATIONS_URL}/favourites`,
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
    removeFavourite: builder.mutation({
      query: (locationId) => ({
        url: `${LOCATIONS_URL}/${locationId}/favourites`,
        method: "DELETE",
        body: { locationId }, // Wrap locationId in an object to match req.body in the backend
      }),
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${LOCATIONS_URL}/${data.locationId}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Location"],
    }),
    deleteReview: builder.mutation({
      query: (data) => ({
        url: `${LOCATIONS_URL}/${data.locationId}/reviews/${data.reviewId}`,
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
  useUploadLocationImageMutation,
  useGetSavedLocationsQuery,
  useAddFavouriteMutation,
  useGetFavouriteLocationsQuery,
  useDeleteLocationMutation,
  useRemoveFavouriteMutation,
  useCreateReviewMutation,
  useDeleteReviewMutation,
} = locationsApiSlice;
