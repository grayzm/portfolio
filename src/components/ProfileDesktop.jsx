import React from 'react';
import '../styles/ProfileDesktop.css';
import { useTheme } from './Theme.jsx';
import { useSoundFX } from './useSoundFX.jsx';
import { motion, AnimatePresence } from 'motion/react';
import Window from '../components/Window.jsx';

import { FolderIcon } from '@heroicons/react/24/outline';
import { FolderClosed } from 'lucide-react';
import { FileText } from 'lucide-react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import emailIcon from '../assets/icons/email.png';
import linkedInIcon from '../assets/icons/linkedin.png';
import instagramIcon from '../assets/icons/instagram.png';
import soundCloudIcon from '../assets/icons/soundcloud.png';
import emailIconDark from '../assets/icons/email-dark.png';
import linkedInIconDark from '../assets/icons/linkedin-dark.png';
import githubIcon from '../assets/icons/github.png';
import githubIconDark from '../assets/icons/github-dark.png';
import instagramIconDark from '../assets/icons/instagram-dark.png';
import soundCloudIconDark from '../assets/icons/soundcloud-dark.png';

export default function ProfileDesktop() {
  const sounds = useSoundFX();

  const folderContents = {
    about: AboutContents,
    'education-awards-honors': EducationContents,
    tools: ToolsContents,
    interests: InterestsContents,
    'contact-socials': ContactContents,
  };

  const folders = [
    { 
      id: 1, 
      name: 'about', 
      type: 'file', 
      defaultPosition: { top: '5%', left: '10%' }, 
      defaultSize: { width: '516px', height: '260px' } 
    },
    { 
      id: 2, 
      name: 'education-awards-honors', 
      type: 'file', 
      defaultPosition: { top: '12%', left: '65%' }, 
      defaultSize: { width: '360px', height: '360px' } 
    },
    { 
      id: 3, 
      name: 'tools', 
      type: 'file', 
      defaultPosition: { top: '22%', left: '42%' }, 
      defaultSize: { width: '270px', height: '386px' } 
    },
    { 
      id: 4, 
      name: 'interests', 
      type: 'file', 
      defaultPosition: { top: '45%', left: '7%' }, 
      defaultSize: { width: '460px', height: '240px' } 
    },
    { 
      id: 5, 
      name: 'contact-socials', 
      type: 'folder', 
      defaultPosition: { top: '65%', left: '60%' }, 
      defaultSize: { width: '442px', height: '160px' } 
    },
  ];

  const [openFolders, setOpenFolders] = React.useState([
    { 
      id: 1, 
      name: 'about', 
      type: 'file', 
      defaultPosition: { top: '5%', left: '10%' }, 
      defaultSize: { width: '516px', height: '260px' } 
    },
    { 
      id: 5, 
      name: 'contact-socials', 
      type: 'folder', 
      defaultPosition: { top: '65%', left: '60%' }, 
      defaultSize: { width: '442px', height: '160px' } 
    },
  ]);

  const openFolder = (folder) => {
    if (!openFolders.some((f) => f.name === folder.name)) {
      setOpenFolders((prev) => [...prev, folder]);
      sounds.playClick();
    }
  };

  const closeFolder = (folderName) => {
    setOpenFolders((prev) => prev.filter((folder) => folder.name !== folderName));
  };

  React.useEffect(() => {
    console.log("State updated successfully:", openFolders);
  }, [openFolders]);

  return (
    <div className='profile-desktop'>
      <div className='folder-container'>
        {folders.map((folder) => (
          <div
            className='hover-container'
            key={folder.id}
            onClick={() => {
              openFolder(folder);
            }}
          >
            {folder.type === 'file' ? (
              <FileText className='folder-icon' size={56} strokeWidth={0.8} />
            ) : (
              <FolderClosed className='folder-icon' size={56} strokeWidth={0.8} />
            )}
            <p>{folder.name}</p>
          </div>
        ))}
      </div>

      <div className='window-container'>
      <AnimatePresence>
        {openFolders.map((folder) => {
          const SelectedContent = folderContents[folder.name];

          return (
            <Window 
              key={folder.name}
              id={folder.id}
              title={folder.name}
              onClose={() => {
                closeFolder(folder.name);
                sounds.playClick();
              }}
              defaultPosition={folder.defaultPosition}
              defaultSize={folder.defaultSize}
            >
              <SelectedContent />
            </Window>
          );
        })}
        </AnimatePresence>
      </div>
    </div>
  );
}

function AboutContents() {
  return (
    <div className='full p-4 hidden title-bg'>
      <div className='scroll-container flex-column g-10 p-10 text-bg border'>
        <h1>Graciella Michelle S</h1>
        <p>
          My creative journey began in fashion design before expanding into app
          development and UI/UX design. Along the way, I discovered game
          development, which sparked a growing interest in creating interactive
          experiences and eventually led me to frontend development.
          <br></br>
          <br></br>Today, I aspire to become a designer-developer hybrid who can
          shape both the vision and implementation of digital products. I enjoy
          building purposeful experiences that feel playful, immersive, and
          intentional that leaves a lasting impression.
        </p>
      </div>
    </div>
  );
}

function EducationContents() {
  const educationList = [
    {
      name: 'Universitas Ciputra',
      year: '2020-2024',
      desc: 'Bachelor in Fashion Design & Business',
    },
    {
      name: 'Hanyang University',
      year: '2023',
      desc: 'Digital Marketing Nano-degree',
    },
    {
      name: 'Indonesian International Student Mobility Awards (IISMA)',
      year: '2023',
      desc: 'Fully funded scholarship program from the government',
    },
    {
      name: 'Apple Developer Academy',
      year: '2025',
      desc: '9-month app development journey',
    },
  ];
  return (
    <div className='full p-4 hidden title-bg'>
      <div className='scroll-container flex-column g-16 p-10 text-bg border'>
        {educationList.map((list, index) => (
          <div className='flex-column g-4' key={index}>
            <h2>{list.name}</h2>
            <p>
              {list.year}
              <br></br>
              {list.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolsContents() {
  const toolList = [
    { category: 'Design', tools: ['Figma', 'Framer', 'AI', 'PS', 'Fresco'] },
    { category: 'Frontend', tools: ['SwiftUI', 'HTML', 'CSS', 'JS', 'React'] },
    { category: 'Game', tools: ['Blender', 'Aseprite', 'Unity', 'Logic Pro'] },
    { category: 'Development', tools: ['Git', 'GitHub', 'VS Code', 'Xcode'] },
  ];

  return (
    <div className='full p-4 hidden title-bg'>
      <div className='scroll-container flex-column g-16 p-10 text-bg border'>
        {toolList.map((category, index) => (
          <div className='flex-column g-4' key={index}>
            <h2>{category.category}</h2>
            <div className='flex wrap g-6' key={index}>
              {category.tools.map((tool, index) => (
                <div className='toolList-tools' key={index}>
                  <p>{tool}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InterestsContents() {
  return (
    <div className='full p-4 hidden title-bg'>
      <div className='scroll-container p-10 text-bg border'>
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
      </div>
    </div>
  );
}

function ContactContents() {
  const { theme } = useTheme();
  const sounds = useSoundFX();
  const socialsList = [
    { name: 'email', imgLight: emailIcon, imgDark: emailIconDark, link: 'mailto:graciellams38@gmail.com' },
    { name: 'linkedIn', imgLight: linkedInIcon, imgDark: linkedInIconDark, link: 'https://www.linkedin.com/in/graciella-michelle/' },
    { name: 'instagram', imgLight: instagramIcon, imgDark: instagramIconDark, link: 'https://www.instagram.com/graciella.michelle_/' },
    { name: 'gitHub', imgLight: githubIcon, imgDark: githubIconDark, link: 'https://github.com/grayzm' },
    { name: 'sound cloud', imgLight: soundCloudIcon, imgDark: soundCloudIconDark, link: 'https://soundcloud.com/graciella-782512333' },
  ];

  return (
    <div className='full p-4 hidden flex title-bg'>
      <div className='scroll-container-x p-10 text-bg border'>
        {socialsList.map((item, index) => (
          <div className='socials-list' key={index} onClick={() => sounds.playClick()}>
            <a href={item.link}>
              <img
                src={theme === 'dark' ? item.imgDark : item.imgLight}
                alt={item.imgLight}
              ></img>
            </a>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
