import * as React from 'react';
import { NavigationActions } from 'react-navigation';

export const navigationRef = React.createRef();

// This function allows for navigating screens outside of
// components, in any file.
export function navigate(routeName, params, key) {
  navigationRef.current?.dispatch(
    NavigationActions.navigate({ routeName, params, key })
  );
}

export function goBack(routeKey = '') {
  navigationRef.current?.dispatch(NavigationActions.back(routeKey));
}
