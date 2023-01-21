import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import MobilCard from "./component/MobilCard";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";


function App() {
  const [mobile, setMobile] = useState( [
    {
      image:
        "https://www.att.com/idpassets/global/devices/phones/alcatel/axel/defaultimage/graphite-metallic-wave-hero-zoom.png",
      description:
        "All monthly pricing req's 0% APR, 36-mo. Installment agmt. $0 down for well-qual. customers. Tax on full price due at sale. Credit card may be req'd (except MA, PA, ND). Restrictions apply",
      prix: 2.89,
      type: "Alcatel Axel",
    },
    {
      image:
        "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x5-pro-en/listpage/findx5-pro-black-v3.png",
      description:
        "La complexité du corps en céramique de l'OPPO Find X5 Pro est complétée par sa durabilité. Avec une résistance à l'eau et à la poussière IP68.",
      prix: 400.0,
      type: "Oppo find X5",
    },
    {
      image:
        "https://www.alephksa.com/wp-content/uploads/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_EN-1-scaled.jpg",
      description:
        "Les iPhone 14 Pro sont officiels. Avec ses smartphones haut de gamme, Apple inaugure un nouveau design sans encoche, un appareil photo amélioré et un écran équipé d’une fonction always-on. On fait le point sur les nouveautés",
      prix: 900.0,
      type: "iphone 14 pro Max",
    },
    {
      image:
        "https://selectshop.tn/17583-medium_default/smartphone-tecno-spark-7p-64go-4go-noir.jpg",

      description:
        "Écran : 6.8 HD IPS LCD 90Hz Résolution : 720 x 1640 pixels (~263 ppi density) Processeur : Mediatek Helio G70 Octa-core (2x2.0 GHz Cortex-A75 & 6x1.7 ",
      prix: 459.0,
      type: "smartphone tecno spark 7p 64GO 4Go bleu",
    },
    {
      image:
        "https://lofficielshop.tn/868-large_default/telephone-portable-nokia-c1-ds-16go-nena2.jpghttps://lofficielshop.tn/868-large_default/telephone-portable-nokia-c1-ds-16go-nena2.jpg",
      description:
        "Double SIM - Ecran: 5.45 FWVGA+ IPS - Résolution: 960 x 480 pixels - Systéme dexploitation: Android 9.0 Pie - Processeur: Mediatek MT6739WW Quad-Core 1.3 GHz - RAM: 1 Go - Stockage: 16 Go Extensible Jusqu à 64 Go - Appareil Photo Arriére: 5.0 MégaPixels autofocus, flash LED, Appareil Photo Frontale: 5.0 Mégapixels - Connctivité: 3G, Wifi et Bluetooth - Autonomie de Batterie: 2500 mAh - Couleur: Rouge",
      prix: 1379.0,
      type: "telephone-portable-nokia-c1-ds-16go-nena2",
    },
  ])
  return (
    <div className="App">
      <Navbar />
      <Header />
    
      <Routes>
        <Route path="/" element={<h1>WELCOME</h1>}/>
        <Route path="/déposer une annence" element={<h1>DEPOSER MON ANNOCE</h1>}/>
        <Route path="/mon compte" element={
          <form>
            <input type="text" placeholder="nom"/>
            <input type="text" placeholder="prenon"/>
            <input type="text" placeholder="adresse"/>
            <button>validez</button>
           </form>
        }/>
       </Routes>        

{mobile.map(el=><MobilCard mobil={el}/>)}

    </div>
  );
}
export default App;
