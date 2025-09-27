export function pathImageTmdb(path?: string) {
  return path ? `https://image.tmdb.org/t/p/w342${path}` : undefined;
}
