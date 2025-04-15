interface CrewMember {
  id: string;
  name: string;
  role: string;
  bio: string[];
  imageUrl?: string;
}

const crewMembers: CrewMember[] = [
  {
    id: "lorem-ipsum-1",
    name: "Lorem Ipsum",
    role: "Lorem Ipsum Dolor Sit Amet",
    bio: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sapien eget urna finibus commodo. Donec tincidunt libero quis magna varius, sed efficitur justo malesuada.",
      "Suspendisse potenti. Praesent vestibulum magna nec purus bibendum maximus. Etiam vel magna id est convallis vestibulum. Curabitur volutpat metus et urna tempus, ac vulputate dolor sagittis.",
      "Mauris vestibulum, est non commodo efficitur, velit orci sodales arcu, nec sagittis metus lacus eget quam. Fusce tincidunt diam id felis vulputate, eu euismod lacus volutpat."
    ],
    imageUrl: "/placeholder-william.jpg"
  },
  {
    id: "lorem-ipsum-2",
    name: "Dolor Sit Amet",
    role: "Consectetur Adipiscing Elit",
    bio: [
      "Maecenas fermentum felis et dignissim malesuada. Nunc vel semper dui. Cras egestas purus nec leo tincidunt, a volutpat libero posuere.",
      "Suspendisse molestie eros sed dolor consequat, eget vestibulum risus faucibus. Integer at condimentum enim. Nullam feugiat nibh id ligula commodo, id molestie lectus scelerisque.",
      "In quis malesuada mi, ut sollicitudin nulla. Praesent eleifend ante ut nisi aliquet, sit amet eleifend magna finibus. Sed sit amet augue vitae sapien euismod sodales a non purus."
    ],
    imageUrl: "/placeholder-dean.jpg"
  },
  {
    id: "lorem-ipsum-3",
    name: "Consectetur Elit",
    role: "Nullam Vel Sapien",
    bio: [
      "Vivamus tincidunt metus eu felis facilisis hendrerit. Curabitur aliquet dolor et sem fermentum, eu pellentesque massa lobortis. Pellentesque habitant morbi tristique senectus et netus.",
      "Et malesuada fames ac turpis egestas. Cras semper arcu in nisl vulputate, vel dictum eros porta. Duis vestibulum dolor id magna dapibus, vel sodales nulla consectetur.",
      "Praesent sollicitudin est a nisi lobortis, in facilisis leo tincidunt. Vestibulum consequat a magna vitae hendrerit. Quisque dictum velit vitae tellus imperdiet, nec maximus purus vehicula."
    ],
    imageUrl: "/placeholder-jason.jpg"
  }
];

export default function CrewSection() {
  return (
    <section id="Crew" className="py-24 bg-background relative">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Lorem Ipsum</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crewMembers.map((member) => (
            <div key={member.id} className="bg-background/50 border border-white/10 rounded-lg overflow-hidden">
              {/* Image placeholder */}
              <div className="aspect-[1/1] bg-main/20 relative">
                {/* The actual image will be placed here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl text-white/70">[Lorem Ipsum]</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-main mb-4">{member.role}</p>

                {member.bio.map((paragraph) => (
                  <p key={`${member.id}-${paragraph.substring(0, 20).replace(/\s+/g, "-")}`} className="mb-3 text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
