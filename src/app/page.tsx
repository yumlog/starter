import Image from "next/image";
import FileIcon from "/public/images/file.svg";

export default function Home() {
  return (
    <div className="flex items-center gap-x-1">
      <Image
        src="/images/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <FileIcon width={20} height={20} />
      <h1>홈</h1>
    </div>
  );
}
