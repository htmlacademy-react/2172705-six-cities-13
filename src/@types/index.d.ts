//! TS Core

type Nullable<T> = T | null;

//! Redux

type State = import('../store').State

type AppDispatch = import('../store').AppDispatch;
