"use client"

import styles from './PopUpAttribution.module.css'
import { usePopUp } from "@/app/context/PopUpContext";
import { montserrat } from "@/lib/fonts";

const attributions = [
  {
    src: "/images/main-page-library.png",
    link: "https://ru.freepik.com/free-photo/side-view-people-recording-podcast_27645376.htm#from_element=detail_alsolike",
    author: "Freepik"
  },
  {
    src: "/images/blogging.png",
    link: "https://ru.freepik.com/free-photo/teenagers-taking-selfie_4143733.htm#fromView=search&page=1&position=4&uuid=163a8540-c620-4416-a208-714971fc5d50&query=%D0%B1%D0%BB%D0%BE%D0%B3%D0%B3%D0%B8%D0%BD%D0%B3+%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%B5+%D0%BB%D1%8E%D0%B4%D0%B8",
    author: "Freepik"
  },
  {
    src: "/images/videotaping.png",
    link: "https://ru.freepik.com/free-photo/man-filming-with-professional-camera_17342873.htm",
    author: "Freepik"
  },
  {
    src: "/images/videotaping-uas.png",
    link: "https://ru.freepik.com/free-photo/medium-shot-smiley-woman-with-drone-outside_25965583.htm#fromView=search&page=6&position=12&uuid=74bf51fc-3fb9-473c-b4bc-f0329bc78214&query=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%81%D1%8A%D0%B5%D0%BC%D0%BA%D0%B0+%D1%81+%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E+%D0%B1%D0%B5%D1%81%D0%BF%D0%B8%D0%BB%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2+%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%B5+%D0%BB%D1%8E%D0%B4%D0%B8",
    author: "Freepik"
  },
  {
    src: "/images/video-editing.png",
    link: "https://ru.freepik.com/free-photo/videographer-home-office-doing-video-montage-using-specialized-software_416761592.htm#fromView=search&page=5&position=12&uuid=6f80f5fc-232f-48a3-8141-032e47181ddd&query=%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6+%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE+",
    author: "DC Studio на Freepik"
  },
  {
    src: "/images/man-working-in-his-studio.png",
    link: "https://ru.freepik.com/free-photo/man-working-his-photography-studio_16138010.htm#fromView=search&page=1&position=33&uuid=6166debf-f592-4f1b-91f7-a6864ec6b117&query=%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5+%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5+%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%B5+%D0%BB%D1%8E%D0%B4%D0%B8",
    author: "Freepik"
  },
  {
    src: "/images/photo-processing.png",
    link: "https://ru.freepik.com/free-photo/people-looking-together-photos-camera_7944401.htm#fromView=search&page=3&position=8&uuid=5da10b28-d8d3-4c95-b714-4d93444fcf4f&query=%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6+%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE+%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%B5+%D0%BB%D1%8E%D0%B4%D0%B8",
    author: "Freepik"
  },
  {
    src: "/images/storytelling.png",
    link: "https://ru.freepik.com/free-photo/vlogger_4458195.htm#fromView=search&page=3&position=27&uuid=5da10b28-d8d3-4c95-b714-4d93444fcf4f&query=%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6+%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE+%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%B5+%D0%BB%D1%8E%D0%B4%D0%B8",
    author: "Freepik"
  },
  {
    src: "/images/interviewing.png",
    link: "https://ru.freepik.com/free-photo/man-filming-with-professional-camera_17342892.htm#fromView=search&page=1&position=35&uuid=a7923066-8519-4521-a632-1e0f7e2342f7&query=%D0%9F%D0%BE%D0%B4%D1%80%D0%BE%D1%81%D1%82%D0%BA%D0%B8+%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%82%D1%81%D1%8F+%D1%81%D1%8A%D0%B5%D0%BC%D0%BA%D0%B5+%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE+%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0",
    author: "Freepik"
  },
  {
    src: "/images/longread.png",
    link: "https://ru.freepik.com/free-photo/people-looking-together-camera_7944008.htm#fromView=search&page=1&position=13&uuid=c6979b31-c321-415a-bb62-608131d97c42&query=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%81%D1%8A%D0%B5%D0%BC%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%B5+%D0%BB%D1%8E%D0%B4%D0%B8",
    author: "Freepik"
  },
  {
    src: "/images/full-length-man.png",
    link: "https://www.freepik.com/free-photo/smiley-man-recording-podcast-medium-shot_27645317.htm?log-in=google",
    author: "Freepik"
  },
];

export default function PopUpAttribution() {
  const { isPopUpOpen, setIsPopUpOpen } = usePopUp();

  if (!isPopUpOpen) return null;

  return (
    <div
      onClick={() => setIsPopUpOpen(false)}
      className={styles.popUpBackground}
    >
      <div
        className={`${styles.popUpWrapper} relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={`absolute cursor-pointer top-4 right-4`}
          onClick={() => setIsPopUpOpen(false)}
          aria-label="Закрыть"
        >
          <img src="/images/cross-pop-up.svg" alt=""/>
        </button>

        <div className={`${montserrat.className} font-normal text-[12px] leading-[130%] flex flex-col gap-5`}>
          {attributions.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <img
                className={`w-15 object-cover ${index === 5 || index === 10 ? 'h-[90px]' : 'h-[40px] brightness-130'}`}
                src={item.src}
                alt={`Изображение от ${item.author}`}
              />
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`self-start`}
              >
                Изображение от {item.author}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
