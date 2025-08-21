import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// Mock DB (สำหรับทดสอบ)
let users = [
  {
    id: '1',
    firstname: 'นาย',
    fullname: 'Bird',
    lastname: 'Phatthadon',
    username: 'bird',
    password: '$2a$10$hG3B1PQ4fQTxDxjXxq3BheHT5e/4ZT0v9Y9G8VGqX6TjnyE32A8dK', // 123 hashed
    address: 'Thailand',
    sex: 'ชาย',
    birthday: '2000-01-01',
  },
];

// GET user by id
export async function GET(req, { params }) {
  const user = users.find((u) => u.id === params.id);
  if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 });

  const { password, ...rest } = user; // ไม่ส่ง password
  return NextResponse.json(rest);
}

// PUT update user
export async function PUT(req, { params }) {
  const id = params.id;
  const body = await req.json();

  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) return NextResponse.json({ message: 'User not found' }, { status: 404 });

  // ถ้ามี password ให้ hash ก่อน
  if (body.password) {
    body.password = await bcrypt.hash(body.password, 10);
  }

  users[userIndex] = { ...users[userIndex], ...body };

  const { password, ...rest } = users[userIndex];
  return NextResponse.json({ message: 'User updated', user: rest });
}
