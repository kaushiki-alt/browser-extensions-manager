import devlens from "./src/assets/images/logo-devlens.svg";
import stylespy from "./src/assets/images/logo-style-spy.svg";
import speedboost from "./src/assets/images/logo-speed-boost.svg";
import jsonwizard from "./src/assets/images/logo-json-wizard.svg";
import tabmaster from "./src/assets/images/logo-tab-master-pro.svg";
import viewport from "./src/assets/images/logo-viewport-buddy.svg";
import markup from "./src/assets/images/logo-markup-notes.svg";
import gridguides from "./src/assets/images/logo-grid-guides.svg";
import palette from "./src/assets/images/logo-palette-picker.svg";
import linkchecker from "./src/assets/images/logo-link-checker.svg";
import domsnapshot from "./src/assets/images/logo-dom-snapshot.svg";
import consoleplus from "./src/assets/images/logo-console-plus.svg";

const data = [
  {
    logo: devlens,
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true
  },
  {
    logo: stylespy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true
  },
  {
    logo: speedboost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false
  },
  {
    logo: jsonwizard,
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true
  },
  {
    logo: tabmaster,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true
  },
  {
    logo: viewport,
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    isActive: false
  },
  {
    logo: markup,
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true
  },
  {
    logo: gridguides,
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false
  },
  {
    logo: palette,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true
  },
  {
    logo: linkchecker,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true
  },
  {
    logo: domsnapshot,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false
  },
  {
    logo: consoleplus,
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    isActive: true
  }
];

export default data;