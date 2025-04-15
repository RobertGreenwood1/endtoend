export default function SponsorsSection() {
  const sponsors = [
    { id: 'oe', name: 'OE Logo' },
    { id: 'paak', name: 'The Paak Logo' },
    { id: 'toogether', name: 'Toogether Logo' },
    { id: 'cadence', name: 'Cadence Logo' },
    { id: 'headstrong', name: 'Headstrong Logo' },
    { id: 'rizkia', name: 'Rizkia Logo' }
  ];

  return (
    <section className="py-16 bg-background relative">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Sponsors</h2>

        <div className="flex flex-wrap items-center justify-center md:justify-between gap-10">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="w-32 h-16 bg-white/5 rounded flex items-center justify-center"
            >
              <span className="text-sm text-white/50">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
