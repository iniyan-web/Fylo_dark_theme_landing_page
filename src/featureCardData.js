import accessAnywhereImg from "./images/icon-access-anywhere.svg";
import securityImg from "./images/icon-security.svg";
import collaborationImg from "./images/icon-collaboration.svg";
import anyFileImg from "./images/icon-any-file.svg";

const featureCardData = [
  {
    id: `1`,
    img: { imgSrc: accessAnywhereImg },
    heading: `Access your files, anywhere`,
    info: `The ability to use a smartphone, tablet, or computer to access your
    account means your files follow you everywhere.`,
  },
  {
    id: `2`,
    img: { imgSrc: securityImg },
    heading: `Security you can trust`,
    info: `2-factor authentication and user-controlled encryption are just a couple of the security
    features we allow to help secure your files.`,
  },
  {
    id: `3`,
    img: { imgSrc: collaborationImg },
    heading: `Real-time collaboration`,
    info: `Securely share files and folders with friends, family and colleagues for live collaboration.
    No email attachments required.`,
  },
  {
    id: `4`,
    img: { imgSrc: anyFileImg },
    heading: `Store any type of file`,
    info: `Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for 
    all file types to be securely stored and shared.`,
  },
];

export default featureCardData;
