export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-1 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Kingsley Osayande, {new Date().getFullYear()}</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
