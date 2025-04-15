export default function RouteSection() {
  return (
    <section id="Route" className="py-24 bg-background/90 relative">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Lorem Ipsum</h2>

        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sapien eget urna finibus
              commodo. Donec tincidunt libero quis magna varius, sed efficitur justo malesuada. Suspendisse
              potenti. Praesent vestibulum magna nec purus bibendum maximus. Etiam vel magna id est convallis
              vestibulum. Curabitur volutpat metus et urna tempus, ac vulputate dolor sagittis.
            </p>
          </div>

          {/* Map container - placeholder for now */}
          <div className="w-full h-96 bg-main/10 rounded-lg flex items-center justify-center">
            <p className="text-xl text-center">
              Lorem Ipsum Map Placeholder<br />
              <span className="text-sm text-gray-300">(Lorem ipsum dolor sit amet)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
