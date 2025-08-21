import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { username, password } = await req.json();
  const user = await getUserByUsername(username);

  if (!user) return new Response(JSON.stringify({ message: 'ผู้ใช้ไม่ถูกต้อง' }), { status: 401 });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return new Response(JSON.stringify({ message: 'รหัสผ่านไม่ถูกต้อง' }), { status: 401 });

  return new Response(JSON.stringify({ username: user.username, token: 'fake-jwt-token' }));
}
