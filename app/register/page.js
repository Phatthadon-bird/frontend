export default function register() {
  return (

<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>หน้าลงทะเบียน</title>
  <style dangerouslySetInnerHTML={{__html: "\n    body {\n      margin: 0;\n      padding: 0;\n      font-family: Arial, sans-serif;\n      background-color: #f5f5f5;\n    }\n\n    .register-box {\n      max-width: 500px;\n      margin: 50px auto;\n      padding: 30px;\n      background-color: #fff;\n      border-radius: 10px;\n      border: 1px solid #ccc;\n      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n    }\n\n    .register-box h2 {\n      text-align: center;\n      margin-bottom: 20px;\n    }\n\n    .form-group {\n      margin-bottom: 15px;\n    }\n\n    label {\n      display: block;\n      margin-bottom: 5px;\n      font-weight: bold;\n    }\n\n    input[type=\"text\"],\n    input[type=\"password\"],\n    input[type=\"date\"],\n    select,\n    textarea {\n      width: 100%;\n      padding: 10px;\n      font-size: 16px;\n      border: 1px solid #ccc;\n      border-radius: 5px;\n    }\n\n    textarea {\n      resize: vertical;\n      height: 80px;\n    }\n\n    .gender-group {\n      display: flex;\n      gap: 15px;\n      align-items: center;\n    }\n\n    .checkbox-group {\n      display: flex;\n      align-items: center;\n    }\n\n    .checkbox-group input {\n      margin-right: 10px;\n    }\n\n    button {\n      width: 100%;\n      padding: 12px;\n      font-size: 16px;\n      background-color: #333;\n      color: white;\n      border: none;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n\n    button:hover {\n      background-color: #555;\n    }\n\n    .message {\n      text-align: center;\n      color: red;\n      margin-top: 10px;\n    }\n  " }} />
  <div className="register-box">
    <h2>ลงทะเบียน</h2>
    <div className="form-group">
      <label htmlFor="username">ชื่อผู้ใช้</label>
      <input type="text" id="username" />
    </div>
    <div className="form-group">
      <label htmlFor="password">รหัสผ่าน</label>
      <input type="password" id="password" />
    </div>
    <div className="form-group">
      <label htmlFor="prefix">คำนำหน้าชื่อ</label>
      <select id="prefix">
        <option value>-- เลือก --</option>
        <option value="นาย">นาย</option>
        <option value="นางสาว">นางสาว</option>
        <option value="นาง">นาง</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="fullname">ชื่อ</label>
      <input type="text" id="fullname" />
    </div>
    <div className="form-group">
      <label htmlFor="address">ที่อยู่</label>
      <textarea id="address" defaultValue={""} />
    </div>
    <div className="form-group">
      <label>เพศ</label>
      <div className="gender-group">
        <label><input type="radio" name="gender" defaultValue="ชาย" /> ชาย</label>
        <label><input type="radio" name="gender" defaultValue="หญิง" /> หญิง</label>
        <label><input type="radio" name="gender" defaultValue="อื่นๆ" /> อื่นๆ</label>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="birthdate">วันเกิด</label>
      <input type="date" id="birthdate" />
    </div>
    <div className="form-group checkbox-group">
      <input type="checkbox" id="accept" />
      <label htmlFor="accept">ฉันยอมรับเงื่อนไข</label>
    </div>
    <button onclick="register()">สมัครสมาชิก</button>
    <div className="message" id="message" />
  </div>
</div> 
  );
}
