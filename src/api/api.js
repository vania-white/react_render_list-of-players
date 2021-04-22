// eslint-disable-next-line
const API_URL = `https://www.ag-grid.com/example-assets/olympic-winners.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}
