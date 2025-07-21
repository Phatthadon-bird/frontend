export default function login() {
  return (
<div>
    
<div>
  <meta charSet="UTF-8" />
  <title>หน้าล็อกอิน</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page with Top Navbar</title>
  <style dangerouslySetInnerHTML={{__html: "\n    body {\n      margin: 0;\n      font-family: Arial, sans-serif;\n      background: #f4f4f4;\n    }\n\n    /* Navbar */\n    .navbar {\n      position: fixed;\n      top: 0;\n      width: 100%;\n      background-color: #333;\n      color: white;\n      padding: 15px 0;\n      display: flex;\n      justify-content: center; /* จัดให้อยู่กลางแนวนอน */\n      box-shadow: 0 2px 5px rgba(0,0,0,0.2);\n      z-index: 1000;\n    }\n" }} /></div>

  <style dangerouslySetInnerHTML={{__html: "\n    body {\n      font-family: Arial, sans-serif;\n      background-color: #f0f2f5;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100vh;\n    }\n\n    .login-container {\n      background-color: #ffffff;\n      padding: 30px;\n      border-radius: 10px;\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n      width: 300px;\n    }\n\n    input[type=\"text\"],\n    input[type=\"password\"] {\n      width: 100%;\n      padding: 10px;\n      margin-top: 10px;\n      margin-bottom: 15px;\n      border: 1px solid #ccc;\n      border-radius: 5px;\n    }\n\n    button {\n      width: 100%;\n      padding: 10px;\n      background-color: #007bff;\n      color: white;\n      border: none;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n\n    button:hover {\n      background-color: #0056b3;\n    }\n\n    .error {\n      color: red;\n      margin-top: 10px;\n    }\n  " }} />
  <div className="login-container">
    <h2>เข้าสู่ระบบ</h2>
    <input type="text" id="username" placeholder="ชื่อผู้ใช้" />
    <input type="password" id="password" placeholder="รหัสผ่าน" />
    <div className="form-check">
  <input className="form-check-input" type="checkbox" defaultValue id="checkChecked" defaultChecked />
  <label className="form-check-label" htmlFor="checkChecked">
    Checked checkbox
  </label>
</div>

    <button onclick="login()">ล็อกอิน</button>
    <div id="errorMsg" className="error" />
  </div>
  
</div>


  )
}
