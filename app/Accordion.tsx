"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { ITip } from "../typings";

interface TipProps {
  tip: ITip;
}

export default function Accordion({ tip }: TipProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className=" mb-1 flex w-full align-center justify-between rounded-lg bg-sky-100 px-5 py-4 text-left text-xl font-medium text-blue-900 hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-200 focus-visible:ring-opacity-75">
            <span>
              {tip.id}. {tip.title}
            </span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-7 w-7 text-blue-900`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 py-4 mb-4 text-xl text-gray-700">
            {tip.text}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
