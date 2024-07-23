import { FolderIcon } from "@heroicons/react/24/solid";

export default function Home() {
  let folders = [
    {
      name: "Home",
      folders: [
        {
          name: "Movies",
          folders: [
            {
              name: "Action",
              folders: [
                { name: "2000s", folders: [{ name: "Popular " }] },
                { name: "2010s" },
              ],
            },
            { name: "Comedy", folders: [{ name: "2000s" }, { name: "2010s" }] },
          ],
        },
        { name: "Music", folders: [{ name: "Pop" }, { name: "Rock" }] },
        { name: "Picture" },
        { name: "Documents" },
      ],
    },
  ];

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

function Folder({ folder }) {
  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1.5">
        <FolderIcon className="size-6 text-sky-500" />
        {folder.name}
      </span>
      <ul className="pl-6">
        {folder.folders?.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </li>
  );
}
