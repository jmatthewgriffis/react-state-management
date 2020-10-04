export const clearLocalStorageAndReload = (): void => {
  window.localStorage.clear();
  window.location.reload();
};
