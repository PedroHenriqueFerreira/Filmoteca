import * as React from 'react';
import { useTheme } from 'styled-components';

const LogoImage = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={219}
      height={48}
      viewBox="0 0 219 48"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
      {...props}
    >
      <path
        fill={theme.primaryColor}
        d="M-.5-.5h33v10h-24v7h17v11h-17v20h-9v-48Z"
        style={{
          opacity: 0.932,
        }}
      />
      <path
        fill={theme.secondaryColor}
        d="M50.5 47.5h-8v-37h8v37Z"
        style={{
          opacity: 0.998,
        }}
      />
      <path
        fill={theme.secondaryColor}
        d="M29.5 14.5c8.024-1.235 10.024 1.598 6 8.5-6.719.726-8.719-2.108-6-8.5Z"
        style={{
          opacity: 0.888,
        }}
      />
      <path
        fill={theme.secondaryColor}
        d="M131.5 47.5h-8v-15h-4v-7h4v-8h8v8h4v7h-4v15Z"
        style={{
          opacity: 0.952,
        }}
      />
      <path
        fill={theme.secondaryColor}
        d="M37.5 47.5h-9v-22h9v22Z"
        style={{
          opacity: 0.984,
        }}
      />
      <path
        fill={theme.secondaryColor}
        d="M90.5 47.5h-8v-15h-5a61.278 61.278 0 0 1-1 15h-8v-15c-1.644-.214-3.144.12-4.5 1a40.83 40.83 0 0 0-1.5 14h-8v-22c2.947-.277 5.78.056 8.5 1 4.038-2.608 7.871-2.275 11.5 1 4.058-2.965 8.391-3.465 13-1.5a6.975 6.975 0 0 1 2.5 3.5c.5 5.99.666 11.99.5 18Z"
        style={{
          opacity: 0.959,
        }}
      />
      <path
        fill={theme.secondaryColor}
        d="M111.5 47.5h-11c-7.4-4.765-8.9-11.098-4.5-19 2.827-2.461 6.16-3.461 10-3 10.722.074 14.722 5.407 12 16a53.848 53.848 0 0 1-6.5 6Zm-8-15a26.512 26.512 0 0 0 6 3.5c-4.945 5.165-6.945 3.998-6-3.5Z"
        style={{
          opacity: 0.933,
        }}
      />
      <path
        fill={theme.secondaryColor}
        d="M155.5 47.5h-12c-5.65-3.827-7.484-9.16-5.5-16 2.348-5.072 6.348-7.405 12-7 8.42.253 12.586 4.586 12.5 13a64.873 64.873 0 0 0-16 1c1.98 3.77 4.314 3.936 7 .5a32.438 32.438 0 0 1 8-.5c-.432 4.09-2.432 7.09-6 9Zm-7-17c1.984-.117 3.65.55 5 2-2.333 1.333-4.667 1.333-7 0a30.968 30.968 0 0 0 2-2Z"
        style={{
          opacity: 0.919,
        }}
      />
      <path
        fill={theme.secondaryColor}
        d="M181.5 47.5h-11c-5.65-3.827-7.484-9.16-5.5-16 2.103-4.767 5.77-7.1 11-7 7.024-.136 11.19 3.198 12.5 10-4.409.466-8.409-.534-12-3-2.834 1.94-3.668 4.607-2.5 8 1.775 2.544 3.608 2.544 5.5 0a21.12 21.12 0 0 1 9-1c-.666 4.346-2.999 7.346-7 9Z"
        style={{
          opacity: 0.907,
        }}
      />
      <path
        fill={theme.secondaryColor}
        d="M215.5 47.5h-8c-.333-1.333-.667-1.333-1 0h-10c-6.02-4.706-7.52-10.706-4.5-18 4.273-4.82 9.273-5.82 15-3 3.057-.95 6.223-1.284 9.5-1 .297 7.42-.036 14.754-1 22Zm-15-15c6.645-.523 8.311 1.977 5 7.5-5.691.484-7.357-2.016-5-7.5Z"
        style={{
          opacity: 0.927,
        }}
      />
    </svg>
  );
};

export default LogoImage;
