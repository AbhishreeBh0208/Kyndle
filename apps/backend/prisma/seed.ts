import {
  PrismaClient,
  GameStatus,
  PlatformType,
  ExternalProvider,
  IntegrationType,
  IntegrationStatus,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting Kyndle database seed...");

  // ------------------------------------------------------------
  // PLATFORMS
  // ------------------------------------------------------------

  const pc = await prisma.platform.upsert({
    where: {
      slug: "pc",
    },
    update: {},
    create: {
      name: "PC",
      slug: "pc",
      type: PlatformType.PC,
    },
  });

  // ------------------------------------------------------------
  // GENRES
  // ------------------------------------------------------------

  const tacticalShooter = await prisma.genre.upsert({
    where: {
      slug: "tactical-shooter",
    },
    update: {},
    create: {
      name: "Tactical Shooter",
      slug: "tactical-shooter",
      description: "Competitive shooters focused on tactical gameplay.",
    },
  });

  const fps = await prisma.genre.upsert({
    where: {
      slug: "fps",
    },
    update: {},
    create: {
      name: "FPS",
      slug: "fps",
      description: "First-person shooter games.",
    },
  });

  const actionRpg = await prisma.genre.upsert({
    where: {
      slug: "action-rpg",
    },
    update: {},
    create: {
      name: "Action RPG",
      slug: "action-rpg",
      description: "Role-playing games focused on real-time action.",
    },
  });

  const openWorld = await prisma.genre.upsert({
    where: {
      slug: "open-world",
    },
    update: {},
    create: {
      name: "Open World",
      slug: "open-world",
      description: "Games built around freely explorable worlds.",
    },
  });

  const rhythm = await prisma.genre.upsert({
    where: {
      slug: "rhythm",
    },
    update: {},
    create: {
      name: "Rhythm",
      slug: "rhythm",
      description: "Games centered around timing, music and rhythm.",
    },
  });

  // ------------------------------------------------------------
  // VALORANT
  // ------------------------------------------------------------

  const valorant = await prisma.game.upsert({
    where: {
      slug: "valorant",
    },
    update: {},
    create: {
      name: "VALORANT",
      slug: "valorant",
      description:
        "A competitive tactical first-person shooter developed by Riot Games.",
      developer: "Riot Games",
      publisher: "Riot Games",
      status: GameStatus.ACTIVE,

      genres: {
        create: [
          {
            genre: {
              connect: {
                id: tacticalShooter.id,
              },
            },
          },
          {
            genre: {
              connect: {
                id: fps.id,
              },
            },
          },
        ],
      },

      platforms: {
        create: {
          platform: {
            connect: {
              id: pc.id,
            },
          },
        },
      },

      integrations: {
        create: {
          provider: ExternalProvider.RIOT,
          integrationType: IntegrationType.API,
          status: IntegrationStatus.DEVELOPMENT,
        },
      },
    },
  });

  // ------------------------------------------------------------
  // GENSHIN IMPACT
  // ------------------------------------------------------------

  const genshin = await prisma.game.upsert({
    where: {
      slug: "genshin-impact",
    },
    update: {},
    create: {
      name: "Genshin Impact",
      slug: "genshin-impact",
      description:
        "An open-world action RPG developed by HoYoverse.",
      developer: "HoYoverse",
      publisher: "HoYoverse",
      status: GameStatus.ACTIVE,

      genres: {
        create: [
          {
            genre: {
              connect: {
                id: actionRpg.id,
              },
            },
          },
          {
            genre: {
              connect: {
                id: openWorld.id,
              },
            },
          },
        ],
      },

      platforms: {
        create: {
          platform: {
            connect: {
              id: pc.id,
            },
          },
        },
      },

      integrations: {
        create: {
          provider: ExternalProvider.HOYOVERSE,
          integrationType: IntegrationType.API,
          status: IntegrationStatus.DEVELOPMENT,
        },
      },
    },
  });

  // ------------------------------------------------------------
// OSU!
// ------------------------------------------------------------

const osu = await prisma.game.upsert({
  where: {
    slug: "osu",
  },

  update: {},

  create: {
    name: "osu!",
    slug: "osu",
    description:
      "A rhythm game based around music, timing and precision.",
    developer: "ppy",
    publisher: "ppy",
    status: GameStatus.ACTIVE,

    genres: {
      create: {
        genre: {
          connect: {
            id: rhythm.id,
          },
        },
      },
    },

    platforms: {
      create: {
        platform: {
          connect: {
            id: pc.id,
          },
        },
      },
    },

    integrations: {
      create: {
        provider: ExternalProvider.OSU,
        integrationType: IntegrationType.API,
        status: IntegrationStatus.DEVELOPMENT,
      },
    },
  },
});

  console.log("✅ Seed completed.");
  console.log(`🎮 Games: ${[valorant.name, genshin.name, osu.name].join(", ")}`);
  console.log(`🖥️ Platform: ${pc.name}`);
  console.log("🌱 Kyndle catalog is ready.");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });