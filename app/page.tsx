import { sleep } from './lib/sleep';

export default async function Home() {
  await sleep(400);
  return (
    <main className="p-8">
      <h1 className="mb-6 text-center text-3xl font-bold">My Blog</h1>
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-sm">
        <p className="text-center text-lg text-gray-700">
          Welcome to My Blog, a small Next.js project built to explore routing, dynamic pages,
          client components, and form handling.
        </p>
      </div>
    </main>
  );
}
