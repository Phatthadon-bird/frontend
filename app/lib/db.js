// lib/db.js
export let users = []; // Mock database

export async function getUserById(id) {
  return users.find(u => u.id === Number(id));
}

export async function updateUser(id, data) {
  const index = users.findIndex(u => u.id === Number(id));
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
}
