import Navbar from "@/components/navbar";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiMapPinSimpleFill } from "react-icons/pi";

const AboutPage = () => {
  return (
    <div className="relative bg-white">
      <Navbar dark />

      {/* HERO */}
      <div className="h-[800px] bg-black/70 w-full absolute" />
      <Image
        src="/vasteras.jpg"
        alt=""
        width={2000}
        height={2000}
        className="object-cover h-[800px]"
      />
      <div className="absolute top-36 left-0 right-0 flex flex-col items-center justify-center max-w-screen-lg mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-10">
          Bakom kuliserna
        </h1>

        {/* ABOUT SECTION */}
        <div className="p-10 grid grid-cols-2 gap-10 max-w-screen-md mx-auto text-start bg-white rounded-xl">
          <div>
            <h3 className="text-red-900 text-2xl font-serif font-bold mb-4">
              Om mig
            </h3>
            <p>
              Välkommen till min webbsida om vin och mat. Jag söker ständigt
              kulinarisk insikt i traditionella- och nya upplevelser. <br /><br />
              Året 2025 börjar jag kockskola och kommer ständigt dokumentera min utveckling här. 
            </p>
            <div className="text-red-900 text-sm text-start flex flex-col items-start mt-6">
              <div className="flex gap-1 mb-1 items-center">
                <PiMapPinSimpleFill /> Västerås, Sverige
              </div>
              <div className="flex gap-1 mb-1 items-center">
                <IoIosSchool /> Tranellska skolan
              </div>
              <div className="flex gap-1 mb-1 items-center">
                <MdEmail /> saraohman97@gmail.com
              </div>
              <div className="flex gap-1 mb-1 items-center">
                <FaPhoneAlt /> 070 493 73 54
              </div>
            </div>
          </div>

          <Image
          src="/hero.jpg"
          alt=""
          width={2000}
          height={2000}
          className="object-cover max-h-80"
        />
        </div>
      </div>

      {/* CONTACT FORM */}

      {/* 
        <div className="bg-amber-950 py-10">
            <div className="w-96 mx-auto">

          <h3 className="font-serif font-bold text-xl text-red-900 mb-6">
            Kontakt
          </h3>
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xs font-bold font-serif">
              För- och efternamn
            </label>
            <input type="text" className="border rounded p-1 w-96" />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xs font-bold font-serif">Email</label>
            <input type="text" className="border rounded p-1 w-96" />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xs font-bold font-serif">Meddelande</label>
            <textarea className="border rounded p-1 w-96 h-40" />
          </div>

          <button className="bg-red-900 hover:bg-red-900/80 p-2 rounded text-white font-serif font-bold text-xs">
            Skicka
          </button>
            </div>
        </div> */}

      {/* RECENSIONS SECTION */}
      {/* <div className="max-w-screen-xl mx-auto p-10">
        <h3 className="text-red-900 text-2xl font-serif font-bold mb-4 text-center">
          Mina recensioner
        </h3>
        <div className="grid grid-cols-4 gap-10 text-gray-700">
          <div>
            <h4 className="text-xl mb-2 text-black">Nya Hattfabriken</h4>
            <p className="tracking-wide leading-relaxed">
              Min bästa matupplevelse hittils är på Nya hattfabriken
              &quot;Hattis&quot; i kärnan av Västerås City. Ett spång från
              torget in i en mindre stengata. De har veckans långkok uppskrivet
              på en tavla på kåken och insidan är litet och något högljut. För
              en ännu mer kulinarisk tillställning kan du besöka grannen FRANK
              som ingår i samma kedja och överses av samma ägare. Det kommer
              kosta en tusenlapp, ej inklusive dryck, men har sagts vara en
              festlig kulinarisk händelse.
            </p>
          </div>

          <div>
            <h4 className="text-xl mb-2 text-black">Marcel P.</h4>
            <p className="tracking-wide leading-relaxed">
              Min bästa matupplevelse hittils är på Nya hattfabriken
              &quot;Hattis&quot; i kärnan av Västerås City. Ett spång från
              torget in i en mindre stengata. De har veckans långkok uppskrivet
              på en tavla på kåken och insidan är litet och något högljut. För
              en ännu mer kulinarisk tillställning kan du besöka grannen FRANK
              som ingår i samma kedja och överses av samma ägare. Det kommer
              kosta en tusenlapp, ej inklusive dryck, men har sagts vara en
              festlig kulinarisk händelse.
            </p>
          </div>

          <div>
            <h4 className="text-xl mb-2 text-black">Vinoteket</h4>
            <p className="tracking-wide leading-relaxed">
              Min bästa matupplevelse hittils är på Nya hattfabriken
              &quot;Hattis&quot; i kärnan av Västerås City. Ett spång från
              torget in i en mindre stengata. De har veckans långkok uppskrivet
              på en tavla på kåken och insidan är litet och något högljut. För
              en ännu mer kulinarisk tillställning kan du besöka grannen FRANK
              som ingår i samma kedja och överses av samma ägare. Det kommer
              kosta en tusenlapp, ej inklusive dryck, men har sagts vara en
              festlig kulinarisk händelse.
            </p>
          </div>

          <div>
            <h4 className="text-xl mb-2 text-black">Mocca Deli</h4>
            <p className="tracking-wide leading-relaxed">
              Min bästa matupplevelse hittils är på Nya hattfabriken
              &quot;Hattis&quot; i kärnan av Västerås City. Ett spång från
              torget in i en mindre stengata. De har veckans långkok uppskrivet
              på en tavla på kåken och insidan är litet och något högljut. För
              en ännu mer kulinarisk tillställning kan du besöka grannen FRANK
              som ingår i samma kedja och överses av samma ägare. Det kommer
              kosta en tusenlapp, ej inklusive dryck, men har sagts vara en
              festlig kulinarisk händelse.
            </p>
          </div>
        </div>
      </div> */}

      {/* IMAGE GALLARY */}
      {/* <div className="grid grid-cols-2 mt-6">
        <Image
          src="/vasteras.jpg"
          alt=""
          width={2000}
          height={2000}
          className="object-cover aspect-square"
        />
        <Image
          src="/hero-2.jpg"
          alt=""
          width={2000}
          height={2000}
          className="object-cover aspect-square"
        />
        <Image
          src="/hero-3.jpg"
          alt=""
          width={2000}
          height={2000}
          className="object-cover aspect-square"
        />
        <Image
          src="/hero.jpg"
          alt=""
          width={2000}
          height={2000}
          className="object-cover aspect-square"
        />
      </div> */}



    </div>
  );
};

export default AboutPage;
