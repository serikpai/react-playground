import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  //reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3002'
  }),
  endpoints: builder => ({
    getTasks: builder.query({
      query: () => '/tasks'
    }),
    createTask: builder.mutation({
      query: (task) => ({
        url: '/tasks',
        method: 'POST',
        body: task
      }),
      onQueryStarted(arg, api) {
        console.log({arg, api});
      }
    }),
    deleteTask: builder.mutation({
      query: ({id}) => ({
        url: `/tasks/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation
} = apiSlice;