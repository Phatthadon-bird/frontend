export async function GET() {
  const res = await fetch("http://itdev.cmtc.ac.th:3000/api/users");
  const data = await res.json();
  return Response.json(data);
}
