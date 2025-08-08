// pages/api/verify-sms-code.js

import codeStorage from './send-sms-code' // หรือวิธีเก็บอื่น

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { phone, code } = req.body
  if (!phone || !code) return res.status(400).json({ error: 'Missing phone or code' })

  const validCode = codeStorage[phone]
  if (validCode === code) {
    delete codeStorage[phone]  // ลบรหัสหลังยืนยัน
    return res.status(200).json({ verified: true })
  } else {
    return res.status(400).json({ verified: false })
  }
}
