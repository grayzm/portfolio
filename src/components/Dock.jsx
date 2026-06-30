import "../styles/Dock.css";
import { useSoundFX } from "./useSoundFX";

import { IdCard } from "lucide-react";
import { FolderOpen } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { LibraryBig } from "lucide-react";
import { Lock } from "lucide-react";

export default function Dock() {
  const sounds = useSoundFX();

  const desktops = [
    { name: "about", icon: IdCard },
    { name: "projects", icon: FolderOpen },
    { name: "playground", icon: Gamepad2 },
    { name: "documentations", icon: LibraryBig },
  ];

  return (
    <div className="dock">
      <div className="navigation-stack">
        {desktops.map((desktop, index) => (
          <div
            className="nav"
            key={index}
            onClick={() => {
              sounds.playClick();
            }}
          >
            <desktop.icon size={24} strokeWidth={1.3} />
          </div>
        ))}
      </div>
      <div className="nav" onClick={sounds.playClick}>
        <Lock size={24} strokeWidth={1.3} />
      </div>
    </div>
  );
}
