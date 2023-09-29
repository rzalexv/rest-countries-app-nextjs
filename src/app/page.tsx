import { Suspense } from "react";
import { Filter, Search, Countries } from "@/components";

export interface SearchParams {
  filter: string;
  search: string;
}

export interface Params {
  searchParams: SearchParams;
}

export default async function Home({ searchParams }: Params) {
  return (
    <>
      <div className="container mt-8">
        <div className="flex flex-col gap-8 md:flex-row lg:justify-between">
          <Search />
          <Filter />
        </div>

        <div className="mt-16 grid gap-12 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center">
          <Suspense fallback={<h3 className="text-2xl font-semibold">Loading...</h3>}>
            <Countries searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
