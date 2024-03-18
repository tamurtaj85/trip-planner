import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Link href={'destinations/1'} className="border rounded-lg p-2 ">
        Go to destination page
      </Link>
    </main>
  );
}
