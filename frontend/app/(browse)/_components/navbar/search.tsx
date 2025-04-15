"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { SearchIcon, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Search = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery) return;

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: searchQuery },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const onClear = () => {
    setSearchQuery("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative  w-full lg:w-[400px]  flex items-center"
    >
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search Stream"
        className="focus-visible:ring-1 border-1 shadow-sm rounded-r-none focus-visible:ring-white focus-visible:ring-offset-0"
      />
      {searchQuery && (
        <X
          className="cursor-pointer absolute right-14 h-5 w-5 hover:opacity-75 transition-all duration-200"
          onClick={onClear}
        />
      )}
      <Button
        type="submit"
        size="icon"
        variant="outline"
        className="rounded-r-md px-4 py-2     rounded-l-none"
      >
        <SearchIcon className="h-5 w-5 text-white" />
      </Button>
    </form>
  );
};
