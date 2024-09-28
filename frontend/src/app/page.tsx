import Image from "next/image";
import Link from "next/link";
import FileClaimButton from "./components/Buttons/FileClaimButton";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8 pb-20 gap-12 sm:p-20 min-h-screen">
        <Image src="/logo.svg" alt="Logo" width={120} height={120} />

        <div className="gap-8">
        <p className="text-6xl font-bold text-center">
          Simplified Literacy and Claim Assistance for Car Incidents
        </p>
        <p className="text-3xl text-center">
          Navigating car incident claims with integrity and transparency, followed by essential insurance education.
        </p>
        </div>
        

        <div className="flex w-fit items-center justify-center gap-4">
          <FileClaimButton />
          <button className="btn btn-wide">Learn more</button>
        </div>
      </div>
      <div className="bg-yellow-100 flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 min-h-screen">

      </div>
    </div>

  );
}
