"use client";

import Image from "next/image";
import PlatformNode from "./PlatformNode";
import Connection from "./ConnectionLine";

export default function Network() {
  return (
    <div className="relative flex h-[560px] items-center justify-center">

      {/* SVG CONNECTIONS */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 560"
      >

        <Connection x1={300} y1={65} x2={300} y2={210} />

        <Connection x1={115} y1={220} x2={250} y2={260} />

        <Connection x1={485} y1={220} x2={350} y2={260} />

        <Connection x1={150} y1={430} x2={250} y2={315} />

        <Connection x1={450} y1={430} x2={350} y2={315} />

      </svg>

      {/* Steam */}

      <PlatformNode
        x="45%"
        y="10%"
      >
        <Image
          src="steam logo.svg"
          alt="Steam"
          width={30}
          height={30}
        />
      </PlatformNode>

      {/* Epic */}

      <PlatformNode
        x="10%"
        y="35%"
      >
        <Image
          src="epic games logo.svg"
          alt="Epic"
          width={30}
          height={30}
        />
      </PlatformNode>

      {/* Xbox */}

      <PlatformNode
        x="78%"
        y="35%"
      >
        <Image
          src="xbox logo.svg"
          alt="Xbox"
          width={30}
          height={30}
        />
      </PlatformNode>

      {/* Riot */}

      <PlatformNode
        x="15%"
        y="72%"
      >
        <Image
          src="riot logo.svg"
          alt="Riot"
          width={30}
          height={30}
        />
      </PlatformNode>

      {/* Playstation */}

      <PlatformNode
        x="73%"
        y="72%"
      >
        <Image
          src="playstation logo.svg"
          alt="PlayStation"
          width={30}
          height={30}
        />
      </PlatformNode>

      {/* Center */}

      <div
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          p-[2px]

          bg-gradient-to-r
          from-violet-500
          to-cyan-400

          shadow-[0_0_70px_rgba(83,216,255,.25)]
        "
      >
        <div
          className="
            flex
            h-20
            w-56
            items-center
            justify-center

            rounded-full

            bg-[#090712]

            backdrop-blur-3xl
          "
        >
          <span
            className="
              text-3xl

              font-extralight

              tracking-[0.25em]
            "
          >
            KYNDLE
          </span>
        </div>
      </div>

    </div>
  );
}