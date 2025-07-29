import { Suspense } from "react";
import SearchPageClient from "./SearchPageClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>กำลังโหลดผลการค้นหา...</div>}>
      <SearchPageClient />
    </Suspense>
  );
}
