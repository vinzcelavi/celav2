// Turns a project title into a safe CSS class prefix ("Dashboard test client" -> "dashboard-test-client")
function toSlug(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export { toSlug };
