export function NigerianCoatOfArms({ width = 120, height = 120 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nigerian Coat of Arms"
    >
      {/* Shield Base */}
      <path
        d="M256 32L32 160v192l224 128 224-128V160L256 32z"
        fill="#008751" /* Nigerian Green */
        stroke="#000"
        strokeWidth="4"
      />

      {/* White Y-shape */}
      <path
        d="M256 32L128 160h256L256 32zM256 480l128-128H128l128 128zM32 160l96 96v96l-96-96v-96zM384 256l96-96v192l-96-96v-96z"
        fill="#fff"
        stroke="#000"
        strokeWidth="2"
      />

      {/* Red Eagles */}
      <path
        d="M160 192c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM416 192c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32z"
        fill="#E30A17" /* Nigerian Red */
      />

      {/* Supporters - Horses */}
      <path
        d="M96 288c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM416 288c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
        fill="#804000" /* Brown for horses */
      />

      {/* Base - Flowers */}
      <path
        d="M224 448c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zM288 448c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z"
        fill="#FFD700" /* Gold for flowers */
      />

      {/* Banner */}
      <path d="M160 400h192v32H160z" fill="#008751" />

      {/* Banner Text - "Unity and Faith, Peace and Progress" */}
      <text
        x="256"
        y="420"
        textAnchor="middle"
        fill="#fff"
        fontFamily="Arial"
        fontSize="14"
        fontWeight="bold"
      >
        UNITY AND FAITH, PEACE AND PROGRESS
      </text>

      {/* Central Shield Details */}
      <circle cx="256" cy="256" r="40" fill="#E30A17" />
      <circle cx="256" cy="256" r="30" fill="#fff" />
      <circle cx="256" cy="256" r="20" fill="#E30A17" />
    </svg>
  );
}
