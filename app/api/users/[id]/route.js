export async function DELETE(request, { params }) {
  const { id } = params;
  const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
    method: "DELETE",
    headers: { Accept: "application/json" },
  });
  const data = await res.json();
  return Response.json(data);
}
