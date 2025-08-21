import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
let users = [];

export async function POST(req) {
  try {
    const { firstname, lastname, fullname, username, password, address, sex, birthday } = await req.json();

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      return NextResponse.json({ message: 'Username นี้มีผู้ใช้แล้ว' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      firstname,
      lastname,
      fullname,
      username,
      password: hashedPassword,
      address,
      sex,
      birthday
    };

    users.push(newUser);

    return NextResponse.json({ message: 'สมัครสมาชิกสำเร็จ', user: { ...newUser, password: undefined } });
  } catch (err) {
    return NextResponse.json({ message: 'Error', error: err.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const { id, firstname, lastname, fullname, username, password, address, sex, birthday } = await req.json();

    const userIndex = users.findIndex(u => u.id === Number(id));
    if (userIndex === -1) {
      return NextResponse.json({ message: 'ไม่พบผู้ใช้' }, { status: 404 });
    }

    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    users[userIndex] = {
      ...users[userIndex],
      firstname,
      lastname,
      fullname,
      username,
      address,
      sex,
      birthday,
      password: password ? hashedPassword : users[userIndex].password
    };

    return NextResponse.json({ message: 'แก้ไขข้อมูลสำเร็จ', user: { ...users[userIndex], password: undefined } });
  } catch (err) {
    return NextResponse.json({ message: 'Error', error: err.message }, { status: 500 });
  }
}
