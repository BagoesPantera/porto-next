const personalCode = `const projects = [
  {
    name: "Mardi",
    stack: ["React", "Tailwind CSS"],
    note: "Markdown editor with live preview",
    url: "https://bagoespantera.github.io/markdown-editor-react",
  },
  {
    name: "CCTV Bali",
    stack: ["Flutter"],
    note: "Unofficial viewer for the Dishub Bali public CCTV API",
    url: "https://github.com/BagoesPantera/cctv-bali",
  },
  {
    name: "Nether Calculator",
    stack: ["Nuxt"],
    note: "Link Minecraft Overworld and Nether portal coordinates",
    url: "https://bagoespantera.github.io/nether-calculator-nuxt",
  },
  {
    name: "SoCloudy",
    stack: ["Flutter"],
    note: "Weather application for Android",
    url: "https://github.com/BagoesPantera/socloudy",
  },
  {
    name: "IP Tracker",
    stack: ["Vue.js", "Tailwind CSS"],
    note: "IPv4 & IPv6 tracker with OpenStreetMap and Leaflet",
    url: "https://bagoespantera.github.io/ip-tracking-vue",
  },
  {
    name: "Ruma",
    stack: ["Discord.js"],
    note: "Anime-themed Discord bot",
    url: "https://github.com/neophrastic/ruma-discordjs",
  },
  {
    name: "Foot Loot Mod",
    stack: ["Fabric 1.20.1"],
    note: "Minecraft mod that drops loot when stepping on blocks",
    url: "https://github.com/BagoesPantera/foot-loot-mc",
  },
];

export default function PersonalProjects() {
  return projects.map((project) => <ProjectCard key={project.name} {...project} />);
}

function ProjectCard({ name, stack, note, url }) {
  return (
    <div>
      <b>{"name"}: {name}</b>
      <span>{stack.join(" + ")}</span>
      <p>{note}</p>
      <a href={url}>Visit</a>
    </div>
  );
}
`
export default personalCode;