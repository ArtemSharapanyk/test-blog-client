"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/Pagination";
import { usePagination } from "@/shared/hooks/usePagination";
import { FC } from "react";
import { cn } from "@/shared/lib/tw-merge";
import { Meta } from "@/shared/api/types/Meta";

export const BasePagination: FC<{ meta: Meta }> = ({ meta }) => {
  const {
    currentPage,
    nextPage,
    prevPage,
    totalPages,
    goToPage,
    isFirstPage,
    isLastPage,
  } = usePagination(meta);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination className="mt-[20px]">
      <PaginationContent>
        <PaginationItem
          className={cn("text-black", {
            "opacity-50 pointer-events-none cursor-not-allowed": isFirstPage,
          })}
        >
          <PaginationPrevious href={prevPage()} />
        </PaginationItem>

        {totalPages > 1 &&
          [...Array(totalPages)].map((_, index) => {
            const page = index + 1;

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href={goToPage(page)}
                  isActive={page === currentPage}
                  className="text-black"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        <PaginationItem
          className={cn("text-black", {
            "opacity-50 pointer-events-none cursor-not-allowed": isLastPage,
          })}
        >
          <PaginationNext href={nextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
