// src/context/projects/context.tsx

// First, I'll import the createContext, useContext and useReducer from React

import React, { createContext, useContext, useReducer } from "react";

// I'll import the reducer, initialState, ProjectsState and ProjectsActions
// from the reducer.ts file

import {
  reducer,
  initialState,
  ProjectsState,
  ProjectsActions,
} from "./reducer";

// Next, using createContext function, we will create a context for
// `Projects State` object. The shape of this new context object is
// ProjectsState and here I've set the default value to undefined.

const ProjectsStateContext = createContext<ProjectsState | undefined>(
  undefined
);

type ProjectsDispatch = React.Dispatch<ProjectsActions>;

const ProjectsDispatchContext = createContext<ProjectsDispatch | undefined>(
  undefined
);

// Next, I'll define our ProjectsProvider component, and make this
// ProjectsStateContext available using context Provider.

export const useProjectsState = () => useContext(ProjectsStateContext);

export const useProjectsDispatch = () => useContext(ProjectsDispatchContext);

export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Here, I'll use the useReducer hook to manage state. I've passed the `reducer`
  // function and the `initialState` that I've defined in the reducer.ts file.

  const [state, dispatch] = useReducer(reducer, initialState);

  // Then, I'll pass the `state` object as value of this ProjectsStateContext

  return (
    <ProjectsStateContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsStateContext.Provider>
  );
};
