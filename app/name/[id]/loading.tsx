const Loading = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34+0 0">
        <circle
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="2"
          r="15"
          cx="30"
          cy="100"
        >
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2"
            values="30;120;120;30;30"
            keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
        <circle
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="2"
          opacity=".8"
          r="15"
          cx="30"
          cy="100"
        >
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2"
            values="30;120;120;30;30"
            keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
            repeatCount="indefinite"
            begin="0.05"
          ></animate>
        </circle>
        <circle
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="2"
          opacity=".6"
          r="15"
          cx="30"
          cy="100"
        >
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2"
            values="30;120;120;30;30"
            keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
            repeatCount="indefinite"
            begin=".1"
          ></animate>
        </circle>
        <circle
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="2"
          opacity=".4"
          r="15"
          cx="30"
          cy="100"
        >
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2"
            values="30;120;120;30;30"
            keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
            repeatCount="indefinite"
            begin=".15"
          ></animate>
        </circle>
        <circle
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="2"
          opacity=".2"
          r="15"
          cx="30"
          cy="100"
        >
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2"
            values="30;120;120;30;30"
            keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
            repeatCount="indefinite"
            begin=".2"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
