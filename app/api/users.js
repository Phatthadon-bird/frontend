// pages/api/users.js

let users = []  // เก็บข้อมูลผู้ใช้ชั่วคราว (ในหน่วยความจำ)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const {
    username,
    password,
    firstname,
    fullname,
    lastname,
    address,
    sex,
    birthday,
    phone,
  } = req.body

  // ตรวจสอบข้อมูลที่จำเป็น
  if (!username || !password || !firstname || !fullname || !lastname || !address || !sex || !birthday || !phone) {
    return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' })
  }

  // เช็ค username ซ้ำ
  const existingUser = users.find(u => u.username === username)
  if (existingUser) {
    return res.status(409).json({ message: 'ชื่อเล่นนี้ถูกใช้งานแล้ว' })
  }

  // สร้าง user object ใหม่
  const newUser = {
    id: users.length + 1,
    username,
    password, // password ต้องเป็น hashed แล้ว (frontend ทำ bcrypt มาแล้ว)
    firstname,
    fullname,
    lastname,
    address,
    sex,
    birthday,
    phone,
    createdAt: new Date(),
  }

  users.push(newUser)

  console.log('User registered:', newUser) // ดูข้อมูลใน console

  return res.status(201).json({ message: 'สมัครสมาชิกสำเร็จ' })
}
