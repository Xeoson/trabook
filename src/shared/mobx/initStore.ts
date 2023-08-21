const stores = new Map<{}, {}>()

export default (Store: new () => any) => {
	const existing = stores.get(Store);
  const _store = existing ?? new Store();

  if (typeof window === "undefined") return _store;

  if (!existing) stores.set(Store, _store)

  return _store;
}
