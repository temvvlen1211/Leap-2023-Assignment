export default function DropDown() {
  return (
    <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
      <rect width="32" height="32" rx="16" fill="#EBE9EC" />
      <rect width="32" height="32" rx="16" fill="url(#pattern0)" />
      <g filter="url(#filter0_i_72_1907)">
        <rect width="32" height="32" rx="16" fill="white" fillOpacity="0.01" />
      </g>
      <g clipPath="url(#clip0_72_1907)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.0799 14.12C39.0029 14.0622 38.9076 14.0341 38.8116 14.041C38.7155 14.0478 38.6252 14.089 38.5571 14.1571C38.489 14.2252 38.4478 14.3156 38.4409 14.4116C38.4341 14.5076 38.4622 14.6029 38.5199 14.68L41.9999 18.168L45.4799 14.68C45.5258 14.6456 45.5637 14.6017 45.5911 14.5514C45.6186 14.5011 45.6349 14.4455 45.6389 14.3883C45.643 14.3312 45.6347 14.2738 45.6147 14.2201C45.5947 14.1664 45.5633 14.1176 45.5228 14.0771C45.4823 14.0366 45.4335 14.0053 45.3798 13.9852C45.3261 13.9652 45.2688 13.9569 45.2116 13.961C45.1544 13.965 45.0988 13.9813 45.0485 14.0088C44.9982 14.0362 44.9543 14.0741 44.9199 14.12L41.9999 17.032L39.0799 14.12Z"
          fill="#706E72"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use />
        </pattern>
        <filter
          id="filter0_i_72_1907"
          x="0"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_72_1907"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_72_1907"
          />
        </filter>
        <clipPath id="clip0_72_1907">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(36 10)"
          />
        </clipPath>
        <image id="image0_72_1907" width="32" height="32" />
      </defs>
    </svg>
  );
}
