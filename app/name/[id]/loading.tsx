const Loading = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center text-white">
      <svg
        width="40"
        height="40"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="62.8"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
