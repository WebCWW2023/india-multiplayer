import * as THREE from "three";
import { bannerNameArray } from "../game.js";

var texture1 = new THREE.TextureLoader().load("../static/texture/banner.jpg");
texture1.flipY = false;
texture1.minFilter = THREE.LinearFilter;
var texture2 = new THREE.TextureLoader().load("../static/texture/banner2.jpg");
texture2.flipY = false;
texture2.minFilter = THREE.LinearFilter;

let glassColor = new THREE.Color(0x575757);
const wallGlassMaterial = new THREE.MeshBasicMaterial({
  transparent: true,
  opacity: 0.5,
  color: glassColor,
});
const banner1_material1 = new THREE.MeshBasicMaterial({
  map: texture1,
  side: THREE.DoubleSide,
});
const banner1_material2 = new THREE.MeshBasicMaterial({
  map: texture1,
  side: THREE.DoubleSide,
});
const banner1_material3 = new THREE.MeshBasicMaterial({
  map: texture1,
  side: THREE.DoubleSide,
});
const banner1_material4 = new THREE.MeshBasicMaterial({
  map: texture1,
  side: THREE.DoubleSide,
});
const banner1_material5 = new THREE.MeshBasicMaterial({
  map: texture1,
  side: THREE.DoubleSide,
});
const banner1_material6 = new THREE.MeshBasicMaterial({
  map: texture1,
  side: THREE.DoubleSide,
});
const banner1_material7 = new THREE.MeshBasicMaterial({
  map: texture1,
  side: THREE.DoubleSide,
});
const banner1_material8 = new THREE.MeshBasicMaterial({
  map: texture1,
  side: THREE.DoubleSide,
});
const banner1_material9 = new THREE.MeshBasicMaterial({
  map: texture1,
  side: THREE.DoubleSide,
});

const UpdateMaterial = (object) => {
  let type;
  switch (object.material.name) {
    /*-----------------banner-------------------*/
    case "_B2_d1.001":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B2_d2.001":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B2_d3.001":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B2_d4.001":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B2_d5":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B2_d6":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B2_d7.001":
      object.material = new THREE.MeshBasicMaterial({
        map: texture2,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;

    case "B1_d1":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B1_d2":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B1_d3":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B1_d4":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B1_d5":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B1_d7":
      object.material = new THREE.MeshBasicMaterial({
        map: texture2,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;
    case "B1_d6":
      object.material = new THREE.MeshBasicMaterial({
        map: texture1,
        side: THREE.DoubleSide,
      });
      bannerNameArray.push(object.name);
      break;

    /*-----------------hoardings-------------------*/
    case "borad_1":
      object.material = banner1_material1;
      bannerNameArray.push(object.name);
      break;
    case "borad_2":
      object.material = banner1_material2;
      bannerNameArray.push(object.name);
      break;
    case "borad_3":
      object.material = banner1_material3;
      bannerNameArray.push(object.name);
      break;
    case "borad_4":
      object.material = banner1_material4;
      bannerNameArray.push(object.name);
      break;
    case "borad_5":
      object.material = banner1_material5;
      bannerNameArray.push(object.name);
      break;
    case "vray_vray_borad_5":
      object.material = banner1_material5;
      bannerNameArray.push(object.name);
      break;
    case "borad_6":
      object.material = banner1_material6;
      bannerNameArray.push(object.name);
      break;
    case "borad_7":
      object.material = banner1_material7;
      bannerNameArray.push(object.name);
      break;
    case "borad_8":
      object.material = banner1_material8;
      bannerNameArray.push(object.name);
      break;
    case "borad_9":
      object.material = banner1_material9;
      bannerNameArray.push(object.name);
      break;

    default:
      break;
  }
};

export { UpdateMaterial };
