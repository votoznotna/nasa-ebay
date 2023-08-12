export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import { MARS_ROVERS_PHOTOS_URL } from "@/utils/constants";
import { MarsPhoto } from "@/types";
import MarsCarousel from "@/components/MarsCarousel";
import ErrorAlert from "@/components/ErrorAlert";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || process.env.API_KEY;

export default async function Home() {
  const mars_rover_photos_url = `${MARS_ROVERS_PHOTOS_URL}${
    API_KEY || "DEMO_KEY"
  }`;
  const res = await fetch(mars_rover_photos_url);

  if (!res.ok) {
    return <ErrorAlert />;
  }

  const data = await res.json();
  const photoData = data.photos as Array<MarsPhoto>;

  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-medium text-black-600">About The Program</h2>
      <div className="w-full flex flex-col">
        <div className="w-full">
          <div className="pt-2 flex flex-col md:flex-row items-center content-center text-sm font-small max-w-6xl mx-auto md:space-x-6">
            <div className="md:w-1/2 content-center flex flex-col mx-auto">
              <Image
                src={`/msl_banner.jpg`}
                width={500}
                height={300}
                className="rounded-lg"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                placeholder="blur"
                blurDataURL="/spinner.svg"
                alt="Curiosity rover"
              ></Image>
              <h5 className="mt-2 text-sm text-center font-small text-black-600">
                Curiosity rover image
              </h5>
            </div>
            <div className="md:w-1/2 p-2">
              <div className="flex flex-col justify-between">
                <div>
                  <p className="mb-3">
                    The goal of the Mars Exploration Program is to explore Mars
                    and to provide a continuous flow of scientific information
                    and discovery through a carefully selected series of robotic
                    orbiters, landers and mobile laboratories interconnected by
                    a high-bandwidth Mars/Earth communications network.
                  </p>
                  <p className="mb-3">
                    The plan is intended to look toward the next 20 years and
                    center on community-responsive science themes. The draft
                    plan suggests a new strategic paradigm designed to: send
                    low-cost, high-value science missions to Mars at a higher
                    frequency; develop new mission-enabling technologies; and
                    address critical infrastructure at Mars.
                  </p>
                </div>
                <div className="mt-3">
                  <Link
                    href="/images"
                    className="mars-button-colors color-gray py-2 px-4 rounded"
                  >
                    View Images By Date
                  </Link>
                  <Link
                    href="/weather"
                    className="mars-button-colors color-gray mx-4 py-2 px-4 rounded"
                  >
                    View Images By Date
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {photoData && <MarsCarousel images={photoData} />}
      </div>
    </div>
  );
}
