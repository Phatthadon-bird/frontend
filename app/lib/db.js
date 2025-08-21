// /lib/db.js
let users = []; // singleton shared database

export const db = {
  getUsers: () => users,
  getUserById: (id) => users.find(u => u.id === parseInt(id)),
  addUser: (user) => { users.push(user); return user; },
  updateUser: (id, data) => {
    const index = users.findIndex(u => u.id === parseInt(id));
    if (index === -1) return null;
    if (data.username) users[index].username = data.username;
    if (data.passwordHash) users[index].passwordHash = data.passwordHash;
    return users[index];
  },
  deleteUser: (id) => { users = users.filter(u => u.id !== parseInt(id)); return true; }
};
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client'; // หรือ MongoDB, MySQL ตาม DB

const prisma = new PrismaClient();

export const getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id } });
}

export const getUserByUsername = async (username) => {
  return await prisma.user.findUnique({ where: { username } });
}

export const updateUser = async (id, data) => {
  return await prisma.user.update({ where: { id }, data });
}
