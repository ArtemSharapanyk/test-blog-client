"use client";
import { cn } from "@/shared/lib/tw-merge";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, {
  ChangeEvent,
  FC,
  HTMLAttributes,
  KeyboardEvent,
  useState,
} from "react";

export const Search: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const queryParams = useSearchParams();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchHandler = () => {
    if (!search) return;

    const newUrl = new URL(pathname, window.location.origin);
    newUrl.searchParams.set("search", search);
    router.push(newUrl.toString());
  };

  const clearSearch = () => {
    const newUrl = new URL(pathname, window.location.origin);
    newUrl.searchParams.delete("search");
    router.push(newUrl.toString());

    setSearch("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div {...props} className={cn("flex mb-[20px]", props.className)}>
      <Input
        onKeyDown={handleKeyDown}
        className="text-black"
        value={search}
        onChange={onChange}
        placeholder="Type article title"
      />
      {(search || queryParams.get("search")) && (
        <Button
          variant={"outline"}
          onClick={clearSearch}
          className="ml-[20px] text-black"
        >
          Clear
        </Button>
      )}
      <Button onClick={searchHandler} className="ml-[5px]">
        Search
      </Button>
    </div>
  );
};
