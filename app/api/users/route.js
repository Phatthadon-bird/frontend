// /api/users/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';

export async function GET() {
  return NextResponse.json(db.getUsers());
}

export async function POST(req) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), username, passwordHash };
  db.addUser(newUser);

  return NextResponse.json({ message: 'User created', user: newUser });
}
