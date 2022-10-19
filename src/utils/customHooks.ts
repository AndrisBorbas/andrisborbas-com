import { useMemo, useState } from "react";

// https://gist.github.com/kyleshevlin/08a2deb904b79077e46966567ccabf06

// One of my new favorite React Hook patternms is to create handler
// functions for a custom hook using `React.useMemo` instead of
// `React.useCallback`, like so:

// eslint-disable-next-line import/prefer-default-export
export function useBool(initialState = false) {
	const [state, setState] = useState(initialState);

	// Instead of individual React.useCallbacks gathered into an object
	// Let's memoize the whole object. Then, we can destructure the
	// methods we need in our consuming component.
	const handlers = useMemo(
		() => ({
			setTrue: () => {
				setState(true);
			},
			setFalse: () => {
				setState(false);
			},
			toggle: () => {
				setState((s) => !s);
			},
			reset: () => {
				setState(initialState);
			},
		}),
		[initialState],
	);

	return [state, handlers];
}

// Makes it super simple to make a whole bunch of methods stable,
// preventing unnecessary rerenders
