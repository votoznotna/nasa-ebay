"use client";

import { MarsPhoto } from "@/types";
import Image from "next/image";

interface IMarsImageProps {
  photo: MarsPhoto;
}

const MarsImage: React.FC<IMarsImageProps> = ({ photo }) => {
  const photoName = photo.camera?.full_name;
  return (
    <div className="flex flex-col justify-between sm:p-2 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Image
        src={`${photo.img_src}`}
        width={500}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="image is not available"
      ></Image>
      {photoName && (
        <div className="pt-1 px-1">
          <h3 className="text-sm mb-1 font-bold">{photo.camera?.full_name}</h3>
        </div>
      )}
    </div>
  );
};

export default MarsImage;
