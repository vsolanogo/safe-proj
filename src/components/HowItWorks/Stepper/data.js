import Position from "../../../assets/svg/position.inline.svg"
import Attachment from "../../../assets/svg/attachment.inline.svg"
import ShieldCheck from "../../../assets/svg/shield-check.inline.svg"

export const steps = [
  {
    timeToShow: { m: 0, s: 0, ms: 15 },
    content: {
      icon: Position,
      contentSide: "left",
      title: "product.howItWork.step1.title",
      text: "product.howItWork.step1.text",
    },
  },
  {
    timeToShow: { m: 0, s: 4, ms: 45 },
    content: {
      contentSide: "right",
      icon: ShieldCheck,
      title: "product.howItWork.step1.title",
      text: "product.howItWork.step1.text",
    },
  },
  {
    timeToShow: { m: 0, s: 8, ms: 33 },
    content: {
      contentSide: "left",
      icon: Attachment,
      title: "product.howItWork.step1.title",
      text: "product.howItWork.step1.text",
    },
  },
  {
    timeToShow: { m: 0, s: 12, ms: 30 },
    content: {
      contentSide: "right",
      icon: ShieldCheck,
      title: "product.howItWork.step1.title",
      text: "product.howItWork.step1.text",
    },
  },
  {
    timeToShow: { m: 0, s: 16, ms: 20 },
    content: {
      contentSide: "left",
      icon: Attachment,
      title: "product.howItWork.step1.title",
      text: "product.howItWork.step1.text",
    },
  },
  {
    timeToShow: { m: 0, s: 20, ms: 50 },
    content: {
      contentSide: "right",
      icon: Attachment,
      title: "product.howItWork.step1.title",
      text: "product.howItWork.step1.text",
    },
  },
]
