export default function MissionSection() {
  return (
    <section id="Mission" className="py-24 bg-background relative">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Lorem Ipsum</h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-1/2">
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sapien eget urna finibus
              commodo. Donec tincidunt libero quis magna varius, sed efficitur justo malesuada.
              Suspendisse potenti. Praesent vestibulum magna nec purus bibendum maximus.
            </p>

            <p className="text-lg mb-6">
              Maecenas fermentum felis et dignissim malesuada. Nunc vel semper dui. Cras egestas
              purus nec leo tincidunt, a volutpat libero posuere. Suspendisse molestie eros sed dolor
              consequat, eget vestibulum risus faucibus. Integer at condimentum enim. Nullam feugiat
              nibh id ligula commodo, id molestie lectus scelerisque. In quis malesuada mi, ut sollicitudin
              nulla. Praesent eleifend ante ut nisi aliquet, sit amet eleifend magna finibus.
            </p>

            <p className="text-lg mb-6">
              Etiam vel magna nec purus bibendum maximus. Curabitur volutpat metus et urna tempus,
              ac vulputate dolor sagittis. Mauris vestibulum, est non commodo efficitur, velit orci
              sodales arcu, nec sagittis metus lacus eget quam. Fusce tincidunt diam id felis vulputate,
              eu euismod lacus volutpat. Sed sit amet augue vitae sapien euismod sodales a non purus.
              Vivamus tincidunt metus eu felis facilisis hendrerit.
            </p>

            <p className="text-lg">
              Integer at condimentum enim. Nullam feugiat nibh id ligula commodo, id molestie lectus
              scelerisque. In quis malesuada mi, ut sollicitudin nulla. Praesent eleifend ante ut nisi
              aliquet, sit amet eleifend magna finibus. Sed sit amet augue vitae sapien euismod sodales.
            </p>
          </div>

          <div className="lg:w-1/2 bg-main/10 p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2 font-twk uppercase text-white">
                Lorem <br /> Ipsum <br /> Dolor
              </h3>
              <p className="text-lg font-medium mt-6">
                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
              </p>
              <p className="mt-2 text-gray-300">
                Nullam vel sapien eget urna finibus commodo. Donec tincidunt libero quis magna varius,
                sed efficitur justo malesuada. Suspendisse potenti. Praesent vestibulum magna.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="https://www.justgiving.com/page/williamgoodge"
                  className="bg-white/10 text-white px-6 py-2 rounded-md hover:bg-white/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lorem Ipsum
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
