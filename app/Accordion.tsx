"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Tip } from "../typings";

interface TipProps {
  tip: Tip;
}

export default function Accordion({ tip }: TipProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="mb-1 flex w-full align-center justify-between rounded-lg bg-sky-100 dark:bg-sky-600 px-5 py-4 text-left text-xl font-medium text-blue-900 dark:text-white hover:bg-sky-200 dark:hover:bg-sky-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-200 focus-visible:ring-opacity-75">
            <span>
              {tip.id}. {tip.title}
            </span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-7 w-7 text-blue-900 dark:text-white`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 py-4 mb-4 text-xl text-gray-700 dark:text-gray-100">
            {tip.text}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
