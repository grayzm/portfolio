import React from "react";
import "../styles/ProfileDesktop.css";
import { useTheme } from "./Theme.jsx";
import { useSoundFX } from "./useSoundFX.jsx";
import { motion, AnimatePresence } from "motion/react";

import { FolderIcon } from "@heroicons/react/24/outline";
import { FolderClosed } from "lucide-react";
import { FileText } from "lucide-react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import emailIcon from "../assets/icons/email.png";
import linkedInIcon from "../assets/icons/linkedin.png";
import instagramIcon from "../assets/icons/instagram.png";
import soundCloudIcon from "../assets/icons/soundcloud.png";
import emailIconDark from "../assets/icons/email-dark.png";
import linkedInIconDark from "../assets/icons/linkedin-dark.png";
import instagramIconDark from "../assets/icons/instagram-dark.png";
import soundCloudIconDark from "../assets/icons/soundcloud-dark.png";

export default function ProfileDesktop() {
  const sounds = useSoundFX();

  const folderContents = {
    about: AboutContents,
    "education-awards-honors": EducationContents,
    tools: ToolsContents,
    interests: InterestsContents,
    "contact-socials": ContactContents,
  };

  const folders = [
    { id: 1, name: "about", type: "file" },
    { id: 2, name: "education-awards-honors", type: "file" },
    { id: 3, name: "tools", type: "file" },
    { id: 4, name: "interests", type: "file" },
    { id: 5, name: "contact-socials", type: "folder" },
  ];

  const [openFolders, setOpenFolders] = React.useState([]);

  const openFolder = (folderName) => {
    if (!openFolders.includes(folderName)) {
      setOpenFolders((prev) => [...prev, folderName]);
      sounds.playClick();
    }
  };

  const closeFolder = (folderName) => {
    setOpenFolders((prev) => prev.filter((name) => name !== folderName));
  };

  React.useEffect(() => {
    console.log("State updated successfully:", openFolders);
  }, [openFolders]);

  return (
    <div className="profile-desktop">
      <div className="folder-container">
        {folders.map((folder) => (
          <div
            className="hover-container"
            key={folder.id}
            onClick={() => {
              openFolder(folder.name);
            }}
          >
            {folder.type === "file" ? (
              <FileText className="folder-icon" size={56} strokeWidth={0.8} />
            ) : (
              <FolderClosed
                className="folder-icon"
                size={56}
                strokeWidth={0.8}
              />
            )}
            <p>{folder.name}</p>
          </div>
        ))}
      </div>

      <div className="window-container">
        {openFolders.map((folderName, index) => {
          const SelectedContent = folderContents[folderName.toLowerCase()];

          return (
            <AnimatePresence>
              <motion.div
                className={`${folderName}-window`}
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <div className="window-title">
                  <p>{folderName}</p>
                  <div
                    className="window-btn"
                    onClick={() => {
                      closeFolder(folderName);
                      sounds.playClick();
                    }}
                  >
                    <XMarkIcon width={14} height={14} strokeWidth={2} />
                  </div>
                </div>
                <div className="window-contents">
                  <div className={`${folderName}-scroll-container`}>
                    <SelectedContent />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
}

function AboutContents() {
  return (
    <>
      <div className="about-name-desc">
        <h1>Graciella Michelle S</h1>
        <p>
          My creative journey began in fashion design before expanding into app
          development and UI/UX design. Along the way, I discovered game
          development, which sparked a growing interest in creating interactive
          experiences and eventually led me to front-end development.
          <br></br>
          <br></br>Today, I aspire to become a designer-developer hybrid who can
          shape both the vision and implementation of digital products. I enjoy
          building purposeful experiences that feel playful, immersive, and
          intentional that leaves a lasting impression.
        </p>
      </div>
    </>
  );
}

function EducationContents() {
  const educationList = [
    {
      name: "Universitas Ciputra",
      year: "2020-2024",
      desc: "Bachelor in Fashion Design & Business",
    },
    {
      name: "Hanyang University",
      year: "2023",
      desc: "Digital Marketing Nano-degree",
    },
    {
      name: "Indonesian International Student Mobility Awards (IISMA)",
      year: "2023",
      desc: "Fully funded scholarship program from the government",
    },
    {
      name: "Apple Developer Academy",
      year: "2025",
      desc: "9-month app development journey",
    },
  ];
  return (
    <>
      {educationList.map((list, index) => (
        <div className="education-list" key={index}>
          <h2>{list.name}</h2>
          <p>
            {list.year}
            <br></br>
            {list.desc}
          </p>
        </div>
      ))}
    </>
  );
}

function ToolsContents() {
  const toolList = [
    { category: "Design", tools: ["Figma", "Framer", "AI", "PS", "Fresco"] },
    { category: "Front-end", tools: ["SwiftUI", "HTML", "CSS", "JS", "React"] },
    { category: "Game", tools: ["Blender", "Aseprite", "Unity", "Logic Pro"] },
    { category: "Development", tools: ["Git", "GitHub", "VS Code", "Xcode"] },
  ];

  return (
    <>
      {toolList.map((category, index) => (
        <div className="toolList-category" key={index}>
          <h2>{category.category}</h2>
          <div className="toolList-tools-container" key={index}>
            {category.tools.map((tool, index) => (
              <div className="toolList-tools">
                <p>{tool}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function InterestsContents() {
  return (
    <>
      <p>
        <strong>Music</strong> has always been something I hold dear. I always
        find myself playing the piano and whenever I feel emotional. I've only
        recently started exploring DAWs, but you can find me here.
        <br></br>
        <br></br>I wouldn't say I'm obsessed, but my gallery is quite filled
        with <strong>photos</strong> of the sky, mainly the moon. You can view
        the photos in my gallery.
        <br></br>
        <br></br>Other than that, I enjoy playing <strong>games</strong> with my
        close friends on the weekends :)
      </p>
    </>
  );
}

function ContactContents() {
  const { theme } = useTheme();
  const socialsList = [
    { name: "email", imgLight: emailIcon, imgDark: emailIconDark },
    { name: "linkedIn", imgLight: linkedInIcon, imgDark: linkedInIconDark },
    { name: "instagram", imgLight: instagramIcon, imgDark: instagramIconDark },
    {
      name: "soundCloud",
      imgLight: soundCloudIcon,
      imgDark: soundCloudIconDark,
    },
  ];

  return (
    <>
      {socialsList.map((item, index) => (
        <div className="socials-list" key={index}>
          <img
            src={theme === "dark" ? item.imgDark : item.imgLight}
            alt={item.imgLight}
          ></img>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
}
