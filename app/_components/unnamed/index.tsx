import Image from "next/image";

const Unnamed = () => {
  return (
    <div className="mx-24 mb-20 flex items-center justify-between">
      <div className="flex flex-col gap-6 pr-20">
        <h1 className="readex mt-0 text-5xl font-semibold leading-[120%] text-white">
          I provide artistic <span className="text-[#FB5322]">solutions</span>{" "}
          to meet your business requirements.
        </h1>
        <span className="readex text-xl font-[300] text-[#a4a4a4]">
          Direct your energy towards growing your business, and entrust me with
          the task of efficiently presenting your business in the digital world,
          setting it apart from competitors.
        </span>
      </div>
      <div className="relative h-[649px] min-w-[449px] overflow-hidden rounded-xl">
        {/* "https://i.pinimg.com/originals/f2/35/01/f235016367d4708d2b1e851a338dc51b.jpg" */}
        {/* "https://i.pinimg.com/originals/c6/42/9c/c6429ca185919142ff176c3be02ea4f1.jpg" */}
        <Image
          src={
            "https://i.pinimg.com/originals/b3/e1/46/b3e1465360a979b69676242154ed86d3.jpg"
          }
          alt="My Image"
          fill
        />
      </div>
    </div>
  );
};

export default Unnamed;
