export const handleSearchBarValidation = (): any =>
  fetch('https://api.bonvoyage-eco.net/journey?from=48.838944, 2.353358&to=47.217903, -1.567290&start=2021-07-10').then(
    console.log
  );
