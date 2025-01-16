"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Meta } from "../api/types/Meta";

export const usePagination = (meta: Meta) => {
  const serachParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = Number(
    serachParams.get("page") ?? meta?.pagination?.page
  );
  const totalPages = meta?.pagination?.pageCount;

  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  const nextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      const newUrl = new URL(pathname, window.location.origin);
      newUrl.searchParams.set("page", nextPage.toString());
      return newUrl.toString();
    }
    return "";
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const nextPage = currentPage - 1;
      const newUrl = new URL(pathname, window.location.origin);
      newUrl.searchParams.set("page", nextPage.toString());

      return newUrl.toString();
    }

    return "";
  };

  const goToPage = (page: number) => {
    const newUrl = new URL(pathname, window.location.origin);
    newUrl.searchParams.set("page", page.toString());
    return newUrl.toString();
  };

  return {
    currentPage,
    nextPage,
    prevPage,
    totalPages,
    goToPage,
    isLastPage,
    isFirstPage,
  };
};
