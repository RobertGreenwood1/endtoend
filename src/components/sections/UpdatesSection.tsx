export default function UpdatesSection() {
  // Create fixed IDs for instagram posts to avoid array index as key
  const instagramPosts = [
    { id: 'post-1', title: 'Lorem Ipsum 1' },
    { id: 'post-2', title: 'Lorem Ipsum 2' },
    { id: 'post-3', title: 'Lorem Ipsum 3' },
    { id: 'post-4', title: 'Lorem Ipsum 4' },
    { id: 'post-5', title: 'Lorem Ipsum 5' },
    { id: 'post-6', title: 'Lorem Ipsum 6' },
    { id: 'post-7', title: 'Lorem Ipsum 7' },
    { id: 'post-8', title: 'Lorem Ipsum 8' }
  ];

  return (
    <section className="py-24 bg-background/90 relative">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Lorem Ipsum</h2>

        {/* Instagram feed grid - placeholder for now */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="aspect-square bg-main/10 rounded-md flex items-center justify-center p-4"
            >
              <div className="text-center">
                <div className="w-10 h-10 mx-auto bg-white/10 rounded-full mb-3" />
                <p className="text-sm text-white/70">{post.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/williamgoodge/"
            className="text-main hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lorem ipsum dolor sit amet
          </a>
        </div>
      </div>
    </section>
  );
}
