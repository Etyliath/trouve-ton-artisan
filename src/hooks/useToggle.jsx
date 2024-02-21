import { useState } from 'react';

/**
 * 
 * @param {boolean} initial 
 * @returns {Array}
 */
export function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState((v) => !v);

  return [state, toggle];
}
