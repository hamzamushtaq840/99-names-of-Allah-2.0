const ArabicName = ({ arabicName }: { arabicName: string }) => {
  return (
    <span className="rakkas ml-5 bg-gradient-to-r from-[#FE6F2D] to-[#FDCE38] bg-clip-text text-[96px] leading-[180px] text-transparent">
      {arabicName}
    </span>
  );
};

export default ArabicName;
