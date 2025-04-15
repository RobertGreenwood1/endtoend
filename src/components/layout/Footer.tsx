import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6 bg-black">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-white/70">
              Lorem Ipsum Dolor Sit Amet
            </p>
            <p className="text-xs text-white/50 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sapien eget urna finibus commodo.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-white/70 mb-2">Lorem Ipsum</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://williamgoodge.komi.io/"
                className="text-xs text-white/50 hover:text-main transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lorem
              </Link>
              <Link
                href="https://www.instagram.com/williamgoodge/"
                className="text-xs text-white/50 hover:text-main transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ipsum
              </Link>
              <Link
                href="https://www.strava.com/athletes/41740194"
                className="text-xs text-white/50 hover:text-main transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dolor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
