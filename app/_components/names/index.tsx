"use client";
import { fetchNames } from "@/app/lib/actions";
import { NameAttr } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Heading2 from "../ui/Heading2";
import { Spinner } from "../ui/Spinner";
import NameCards from "./NameCards";

const Names = () => {
  const [displayedNames, setDisplayedNames] = useState<NameAttr[]>([]);
  const [page, setPage] = useState(1); // Initialize page state to 1

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreNames = async () => {
    await delay(2000);
    const newNames = await fetchNames(page);
    console.log(newNames);
    setDisplayedNames((prevNames: NameAttr[]) => [...prevNames, ...newNames]);
    setPage(page + 1); // Update page state for the next page
  };

  useEffect(() => {
    if (inView && displayedNames.length !== 6) {
      loadMoreNames();
    }
  }, [inView]);

  return (
    <section id="names" className="mt-24 text-black">
      <Heading2 content="Names" />
      <NameCards names={displayedNames} />

      {displayedNames.length !== 6 && (
        <div
          className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
          ref={ref}
        >
          <Spinner />
        </div>
      )}
    </section>
  );
};

export default Names;
