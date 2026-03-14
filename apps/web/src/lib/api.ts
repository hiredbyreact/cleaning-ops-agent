export async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(path, { ...options, credentials: 'include' });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
