
  import {
  hardened04DualAmsProfile,
} from "./printerProfiles.js";
  export const printers = [
  {
    id: 1,
    name: "Bambu P1S",
    model: "P1S",

  
      capabilities: {
  ...hardened04DualAmsProfile,
},

    // Legacy/demo fields
    material: "ASA",
    utilization: 92,
    completedToday: 4,
  },
  {
    id: 2,
    name: "Bambu X1C",
    model: "X1C",

 
     capabilities: {
  ...hardened04DualAmsProfile,
},

    // Legacy/demo fields
    material: "PETG-CF",
    utilization: 81,
    completedToday: 3,
  },
  {
    id: 3,
    name: "Bambu P2S",
    model: "P2S",

    capabilities: {
  ...hardened04DualAmsProfile,
},

    // Legacy/demo fields
    material: "PLA",
    utilization: 38,
    completedToday: 2,
  },
  {
    id: 4,
    name: "Bambu H2D",
    model: "H2D",

    capabilities: {
  ...hardened04DualAmsProfile,
},

    // Legacy/demo fields
    material: "-",
    utilization: 0,
    completedToday: 0,
  },
];