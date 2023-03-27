import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

const SelectOneQuestion = (props: any) => {
  const theme = useTheme();

  return createElement(
    SvgIcon,
    props,
    <rect width={24} height={24} rx={3} fill={theme.palette.sky['400']} />,
    <g clipPath="url(#select-one_svg__a)">
      <circle cx={11.999} cy={12} r={5.833} fill={theme.palette.sky['400']} />
      <path
        d="M12 8.666A3.335 3.335 0 1 0 15.334 12a3.335 3.335 0 0 0-3.332-3.333Zm0-3.333A6.67 6.67 0 0 0 5.335 12a6.67 6.67 0 0 0 6.667 6.666A6.669 6.669 0 0 0 18.667 12a6.669 6.669 0 0 0-6.666-6.667Zm0 12A5.332 5.332 0 0 1 6.668 12a5.332 5.332 0 0 1 5.334-5.334A5.332 5.332 0 0 1 17.334 12a5.332 5.332 0 0 1-5.333 5.333Z"
        fill={theme.palette.primary.contrastText}
      />
    </g>,
    <defs>
      <clipPath id="select-one_svg__a">
        <path
          fill={theme.palette.primary.contrastText}
          transform="translate(2 2)"
          d="M0 0h20v20H0z"
        />
      </clipPath>
    </defs>
  );
};

export default SelectOneQuestion;
