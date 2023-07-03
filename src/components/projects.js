import { uuid } from "../utils/helpers";


const projects = [
  {
    id: uuid(),
    img: "./src/images/asset-mgt-sys-kevinrhode.herokuapp.com_.png",
    title: "Asset Management",
    desp:'MVC Handlebars App',
    linkToApp: "https://asset-mgt-sys-kevinrhode.herokuapp.com/",
    linkToRepo: "https://github.com/KevinRhode/asset-management-system",
  },
  {
    id: uuid(),
    img: "../images/asset-mgt-sys-kevinrhode.herokuapp.com_.png",
    title: "PWA-Text-Editor",
    desp:'Progressive Web App',
    linkToApp: "https://pwa-text-editor-kevinrhode-e341d0818889.herokuapp.com/",
    linkToRepo: "https://github.com/KevinRhode/PWA-Text-Editor",
  },
];

export default projects;