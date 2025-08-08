// pages/api/send-sms-code.js

let codeStorage = {}  // ในความจริงควรใช้ DB หรือ cache

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { phone } = req.body
  if (!phone) return res.status(400).json({ error: 'No phone number' })

  // สุ่มรหัส 6 หลัก
  const code = Math.floor(100000 + Math.random() * 900000).toString()

  // เก็บรหัสไว้กับเบอร์โทร (ชั่วคราว)
  codeStorage[phone] = code

  console.log(`ส่ง SMS รหัส ${code} ไปยัง ${phone}`)

  // TODO: integrate บริการส่ง SMS จริง เช่น Twilio

  res.status(200).json({ message: 'Sent SMS code' })
}
