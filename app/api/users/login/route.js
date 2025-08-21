import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// ใช้ users เดียวกับ [id]/route.js
let users = [
  {
    id: '1',
    username: 'bird',
    password: '$2a$10$hG3B1PQ4fQTxDxjXxq3BheHT5e/4ZT0v9Y9G8VGqX6TjnyE32A8dK', // 123 hashed
  },
];

export async function POST(req) {
  const { username, password } = await req.json();
  const user = users.find((u) => u.username === username);

  if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return NextResponse.json({ message: 'Incorrect password' }, { status: 401 });

  return NextResponse.json({ message: 'Login successful', user: { id: user.id, username: user.username } });
}
