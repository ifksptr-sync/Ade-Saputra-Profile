const API_URL = "https://coretax-backend-production.up.railway.app";

async function apiLogin(licenseKey, machineId) {
  const res = await fetch(API_URL + '/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ license_key: licenseKey, machine_id: machineId }),
  });
  const data = await res.json();
  if (!res.ok) return { success: false, error: data.detail || 'Login gagal' };
  return data;
}

async function apiGet(path) {
  const token = localStorage.getItem('token');
  const res = await fetch(API_URL + path, {
    headers: { 'Authorization': 'Bearer ' + token },
  });
  if (!res.ok) throw new Error(res.status + ': ' + res.statusText);
  return res.json();
}
