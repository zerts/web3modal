import { svg } from 'lit'

export const CLOSE_ICON = svg`
  <svg width="12" height="12">
    <path
      d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z"
      fill="#fff"
    />
  </svg>
`

export const NOISE_TEXTURE = svg`
  <svg id="w3m-transparent-noise">
    <filter id="w3m-noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" />
    </filter>

    <rect width="100%" height="100%" filter="url(#w3m-noise)" />
  </svg>
`

export const WALLET_CONNECT_ICON = svg`
  <svg width="28" height="20">
    <g clip-path="url(#a)">
      <path
        d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z"
        fill="#000000"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z" /></clipPath>
    </defs>
  </svg>
`

export const WALLET_CONNECT_LOGO = svg`
  <svg width="178" height="29">
    <path
      d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z"
      fill="#fff"
    />
  </svg>
`

export const WALLET_CONNECT_RAINBOW = svg`
  <svg width="96" height="64">
    <g clip-path="url(#a)">
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="#03ACDA"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#b)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#c)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#d)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#e)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#f)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#g)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#h)"
      />
    </g>
    <defs>
      <radialGradient
        id="b"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-127.117 45.926 11.462) scale(23.2002 37.853)"
      >
        <stop stop-color="#70D75B" />
        <stop offset=".477" stop-color="#7CD94E" />
        <stop offset="1" stop-color="#7CD94E" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="c"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-6.00004 9.99997 -27.2315 -16.33906 53 27)"
      >
        <stop stop-color="#4567FB" />
        <stop offset=".924" stop-color="#4567FB" />
        <stop offset="1" stop-color="#4567FB" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="d"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-16.4999 23.00013 -57.24754 -41.06839 55.5 7)"
      >
        <stop stop-color="#C4397E" />
        <stop offset=".322" stop-color="#C6397F" />
        <stop offset="1" stop-color="#C6397F" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="e"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-12.99987 17.00005 -18.4666 -14.12134 76.5 27.5)"
      >
        <stop stop-color="#F651CC" />
        <stop offset=".681" stop-color="#F64ECC" />
        <stop offset="1" stop-color="#F64ECC" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="f"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(135 31.997 21.748) scale(13.435 14.9028)"
      >
        <stop stop-color="#C251FB" />
        <stop offset=".873" stop-color="#C251FB" />
        <stop offset="1" stop-color="#C251FB" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="g"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(24.49996 11.49999 -18.76319 39.97372 8.5 31)"
      >
        <stop stop-color="#8551EC" />
        <stop offset=".72" stop-color="#8551EC" />
        <stop offset="1" stop-color="#8551EC" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="h"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(8.49998 8.99999 -14.68422 13.86842 26.5 16)"
      >
        <stop stop-color="#10937D" />
        <stop offset=".48" stop-color="#10937D" />
        <stop offset="1" stop-color="#10937D" stop-opacity="0" />
      </radialGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h96v64H0z" />
      </clipPath>
    </defs>
  </svg>
`

export const WALLET_CONNECT_ICON_GRADIENT = svg`
  <svg width="96" height="64">
    <g clip-path="url(#a)">
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="#03ACDA"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#b)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#c)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#d)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#e)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#f)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#g)"
      />
      <path
        d="M25.323 17.597c12.524-12.262 32.83-12.262 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.049a.814.814 0 0 1-1.133 0L63.82 24.31c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0L48.284 40.633a.407.407 0 0 0-.567 0L33.03 55.012a1.628 1.628 0 0 1-2.268 0L10.07 34.751a1.547 1.547 0 0 1 0-2.221l4.589-4.493a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.152.41.152.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
        fill="url(#h)"
      />
    </g>
    <defs>
      <radialGradient
        id="b"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-127.117 45.926 11.462) scale(23.2002 37.853)"
      >
        <stop stop-color="#70D75B" />
        <stop offset=".477" stop-color="#7CD94E" />
        <stop offset="1" stop-color="#7CD94E" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="c"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-6.00004 9.99997 -27.2315 -16.33906 53 27)"
      >
        <stop stop-color="#4567FB" />
        <stop offset=".924" stop-color="#4567FB" />
        <stop offset="1" stop-color="#4567FB" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="d"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-16.4999 23.00013 -57.24754 -41.06839 55.5 7)"
      >
        <stop stop-color="#C4397E" />
        <stop offset=".322" stop-color="#C6397F" />
        <stop offset="1" stop-color="#C6397F" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="e"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-12.99987 17.00005 -18.4666 -14.12134 76.5 27.5)"
      >
        <stop stop-color="#F651CC" />
        <stop offset=".681" stop-color="#F64ECC" />
        <stop offset="1" stop-color="#F64ECC" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="f"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(135 31.997 21.748) scale(13.435 14.9028)"
      >
        <stop stop-color="#C251FB" />
        <stop offset=".873" stop-color="#C251FB" />
        <stop offset="1" stop-color="#C251FB" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="g"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(24.49996 11.49999 -18.76319 39.97372 8.5 31)"
      >
        <stop stop-color="#8551EC" />
        <stop offset=".72" stop-color="#8551EC" />
        <stop offset="1" stop-color="#8551EC" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="h"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(8.49998 8.99999 -14.68422 13.86842 26.5 16)"
      >
        <stop stop-color="#10937D" />
        <stop offset=".48" stop-color="#10937D" />
        <stop offset="1" stop-color="#10937D" stop-opacity="0" />
      </radialGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h96v64H0z" />
      </clipPath>
    </defs>
  </svg>
`
