import Link from "next/link";

export default function Home() {
  return (
    <div className="text-2xl">
      <div>
        <Link href={"/hello"}>Hello</Link>
      </div>
      <div>
        <Link href={"/env"}>View all ENV</Link>
      </div>
      <div>
        <Link href={"/demo"}>Demo</Link>
      </div>
    </div>
  );
}
