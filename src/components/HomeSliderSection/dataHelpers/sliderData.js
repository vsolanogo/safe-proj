import { ImgWithMap } from "../components/ImageCards/ImgWithMap"
import { ImgWithEmergencyMessage } from "../components/ImageCards/ImgWithEmergencyMessage"
import { ImgWithAudioWave } from "../components/ImageCards/ImgWithAudioWave"
import { ImgWithAudioWave2 } from "../components/ImageCards/ImgWithAudioWave2"

export const slideData = [
  {
    id: 1,
    title: "home.section3.slide1.title",
    text: "home.section3.slide1.text",
    image: "slide-screen1.png",
    dotPositions: {
      x: 555,
      y: 70,
    },
    component: ImgWithMap,
    shapes: {
      topShape: {
        image: "slide-light-cube.png",
        width: "32%",
        top: "-5%",
        right: "14%",
        zIndex: 2,
      },
      bottomShape: {
        image: "slide-tube.png",
        width: "35.4%",
        bottom: "7%",
        left: "-12%",
        zIndex: -1,
      }
    }
  },
  {
    id: 2,
    title: "home.section3.slide2.title",
    text: "home.section3.slide2.text",
    image: "slide-screen2.png",
    dotPositions: {
      x: 675,
      y: 235,
    },
    component: ImgWithEmergencyMessage,
    shapes: {
      topShape: {
        image: "slide-triangle.png",
        width: "43.5%",
        top: "-10%",
        right: "7%",
        zIndex: 2,
      },
      bottomShape: {
        image: "slide-black-cube.png",
        width: "20%",
        bottom: "7%",
        left: "-5%",
        zIndex: -1,
      }
    }
  },
  {
    id: 3,
    title: "home.section3.slide3.title",
    text: "home.section3.slide3.text",
    image: "slide-screen3.png",
    dotPositions: {
      x: 680,
      y: 440,
    },
    component: ImgWithAudioWave,
    shapes: {
      topShape: {
        image: "slide-light-cube.png",
        width: "32%",
        top: "-5%",
        left: "-10%",
        zIndex: 2,
      },
      bottomShape: {
        image: "slide-triangle.png",
        width: "43.5%",
        bottom: "0",
        right: "7%",
        zIndex: -1,
      }
    }
  },
  {
    id: 4,
    title: "home.section3.slide4.title",
    text: "home.section3.slide4.text",
    image: "slide-screen4.png",
    dotPositions: {
      x: 605,
      y: 575,
    },
    component: ImgWithAudioWave2,
    shapes: {
      topShape: {
        image: "slide-black-cube.png",
        width: "32%",
        top: "-5%",
        left: "-11%",
        zIndex: 2,
      },
      bottomShape: {
        image: "slide-tube.png",
        width: "35.4%",
        bottom: "4%",
        right: "12%",
        zIndex: -1,
      }
    }
  }
];