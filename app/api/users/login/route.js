import bcrypt from 'bcryptjs';
import { getUserByUsername } from '@/lib/db'; // ฟังก์ชันดึง user จาก DB

export async function POST(req) {
  const { username, password } = await req.json();

  // ดึง user จาก DB
  const user = await getUserByUsername(username);
  if (!user) {
    return new Response(
      JSON.stringify({ message: 'ผู้ใช้ไม่ถูกต้อง' }),
      { status: 401 }
    );
  }

  // ตรวจสอบรหัสผ่าน
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response(
      JSON.stringify({ message: 'รหัสผ่านไม่ถูกต้อง' }),
      { status: 401 }
    );
  }

  // ✅ ส่งข้อมูล user กลับพร้อม id สำหรับ profile page
  return new Response(
    JSON.stringify({ id: user.id, username: user.username, token: 'fake-jwt-token' }),
    { status: 200 }
  );
}
