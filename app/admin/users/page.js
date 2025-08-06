'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function UsersPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [checkingLogin, setCheckingLogin] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.replace('/login'); // ยังไม่ล็อกอินให้ไปหน้า login
    } else {
      setCheckingLogin(false); // ผ่านการเช็คล็อกอินแล้ว
    }
  }, [router]);

  useEffect(() => {
    if (checkingLogin) return; // รอเช็คล็อกอินก่อนค่อยโหลดข้อมูล

    async function fetchUsers() {
      setLoading(true);
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }

    fetchUsers();
  }, [checkingLogin]);

  const filteredItems = items.filter(item =>
    item.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: 'คุณแน่ใจไหม?',
      text: "ต้องการลบข้อมูลนี้หรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'ลบเลย!',
      cancelButtonText: 'ยกเลิก'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
            method: 'DELETE',
            headers: { Accept: 'application/json' },
          });
          if (!res.ok) throw new Error('Failed to delete');
          setItems(prev => prev.filter(item => item.id !== id));
          Swal.fire('ลบเรียบร้อย!', '', 'success');
        } catch (error) {
          Swal.fire('เกิดข้อผิดพลาด', 'ไม่สามารถลบข้อมูลได้', 'error');
          console.error(error);
        }
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  if (checkingLogin) {
    return <p>กำลังตรวจสอบสถานะ...</p>;
  }

  return (
    <>
      <br /><br /><br /><br />
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Users List</h4>
          <button onClick={handleLogout} className="btn btn-danger btn-sm">
            ออกจากระบบ
          </button>
        </div>
        <input
          type="text"
          placeholder="ค้นหา firstname, lastname, username"
          className="form-control mb-3"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <table className="table table-striped table-hover align-middle w-100">
            <thead className="table-dark">
              <tr>
                <th className='text-center'>#</th>
                <th>Firstname</th>
                <th>Fullname</th>
                <th>Lastname</th>
                <th>Username</th>
                <th>Password</th>
                <th>Address</th>
                <th>Sex</th>
                <th>Birthday</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={11} className="text-center text-muted">ไม่พบข้อมูล</td>
                </tr>
              ) : filteredItems.map(item => (
                <tr key={item.id} className="align-middle">
                  <td className='text-center'>{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.fullname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.username}</td>
                  <td><code>{item.password}</code></td>
                  <td>{item.address}</td>
                  <td>{item.sex}</td>
                  <td>{item.birthday}</td>
                  <td>
                    <Link href={`/admin/users/edit/${item.id}`} className="btn btn-warning btn-sm">
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fa fa-trash"></i> Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <br /><br />
      <style jsx>{`
        tr:hover {
          background-color: #f1f1f1;
          cursor: pointer;
        }
        code {
          background-color: #f8f9fa;
          padding: 2px 4px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
