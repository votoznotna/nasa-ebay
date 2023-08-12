import Image from "next/image";
const Loading: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/spinner.svg"
        width={200}
        height={200}
        style={{
          maxWidth: "100%",
          height: "100%",
        }}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="loading..."
      ></Image>
    </div>
  );
};
export default Loading;
