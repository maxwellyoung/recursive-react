"use client";
import {
  ChevronRightIcon,
  DocumentIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

type Folder = {
  name: string;
  folders?: Folder[];
};

let folders: Folder[] = [
  {
    name: "Home",
    folders: [
      {
        name: "Movies",
        folders: [
          {
            name: "Action",
            folders: [
              {
                name: "2000s",
                folders: [
                  { name: "Gladiator.mp4" },
                  { name: "American-Beauty.mp4" },
                ],
              },
              { name: "2010s", folders: [] },
            ],
          },
          {
            name: "Comedy",
            folders: [
              { name: "2000s", folders: [] },
              { name: "2010s", folders: [] },
            ],
          },
        ],
      },
      {
        name: "Music",
        folders: [
          { name: "Pop", folders: [] },
          { name: "Rock", folders: [] },
        ],
      },
      { name: "Picture", folders: [] },
      { name: "Documents", folders: [] },
      { name: "passwords.txt" },
    ],
  },
];

export default function Home() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        <ul className="pl-6">
          {folders.map((folder) => (
            <Folder folder={folder} key={folder.name} />
          ))}
        </ul>
      </ul>
    </div>
  );
}

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1.5">
        {folder.folders && folder.folders.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronRightIcon
              className={`size-4 text-gray-500 ${!isOpen ? "" : "rotate-90"}`}
            />
          </button>
        )}
        {folder.folders ? (
          <FolderIcon
            className={`size-6 text-sky-500 ${
              folder.folders.length === 0 ? "ml-[22px]" : ""
            }`}
          />
        ) : (
          <DocumentIcon className=" ml-[22px] size-6 text-gray-900" />
        )}
        {folder.name}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <Folder folder={folder} key={folder.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
