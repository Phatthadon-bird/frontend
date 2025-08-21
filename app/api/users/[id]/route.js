// /app/api/users/[id]/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getUserById, updateUser } from '@/lib/db';

// ตัวอย่าง Mock DB
let users = [
  { id: 1, username: 'bird', password: '$2b$10$abc', fullname: 'Bird Phatthadon' },
  { id: 2, username: 'cat', password: '$2b$10$xyz', fullname: 'Cat Meow' },
];

// GET /api/users/:id
export async function GET(req, { params }) {
  const { id } = params;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 });
  
  // ลบ password ก่อนส่งกลับ
  const { password, ...userData } = user;
  return NextResponse.json(userData);
}

// PUT /api/users/:id (แก้ไข user)
export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) return NextResponse.json({ message: 'User not found' }, { status: 404 });

  // ถ้ามี password ให้ hash ก่อน
  if (body.password) {
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);
  }

  users[userIndex] = { ...users[userIndex], ...body };

  const { password, ...userData } = users[userIndex];
  return NextResponse.json(userData);
}

// DELETE /api/users/:id
export async function DELETE(req, { params }) {
  const { id } = params;
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) return NextResponse.json({ message: 'User not found' }, { status: 404 });

  users.splice(userIndex, 1);
  return NextResponse.json({ message: 'User deleted successfully' });
}
