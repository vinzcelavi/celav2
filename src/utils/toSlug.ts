// Turns a project title into a safe CSS class prefix ("Gusto" -> "gusto", "Foo Bar" -> "foo-bar")
function toSlug(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export { toSlug };
