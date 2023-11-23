import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

const PhoneNumberQuestionIcon = (props: any) => {
  const theme = useTheme();
  return createElement(
    SvgIcon,
    props,
    <rect width={24} height={24} fill={theme.palette.sunset['300']} rx={3} />,
    <g clipPath="url(#PhoneIcon_svg__a)">
      <path
        fill={theme.palette.primary.contrastText}
        stroke={theme.palette.primary.contrastText}
        strokeWidth={0.5}
        d="M16.578 18.683a2.47 2.47 0 0 1-1.367-.41A33.765 33.765 0 0 1 5.727 8.79a2.484 2.484 0 0 1 .314-3.122l.84-.841a1.746 1.746 0 0 1 1.243-.515c.47 0 .912.183 1.244.515L10.9 6.358c.685.685.685 1.8 0 2.486l-.31.311a34.14 34.14 0 0 0 4.253 4.254l.31-.31a1.75 1.75 0 0 1 1.244-.515c.47 0 .91.184 1.243.515l1.533 1.534a1.76 1.76 0 0 1 0 2.486l-.84.841a2.466 2.466 0 0 1-1.756.723ZM8.124 4.936c-.303 0-.587.118-.8.332l-.84.84a1.857 1.857 0 0 0-.236 2.335 33.123 33.123 0 0 0 9.309 9.309c.302.2.655.306 1.022.306.497 0 .964-.192 1.313-.54l.841-.841a1.134 1.134 0 0 0 0-1.602L17.2 13.541a1.125 1.125 0 0 0-.8-.332c-.303 0-.587.118-.801.332l-.512.511a.311.311 0 0 1-.42.02C12.944 12.654 11.42 11.227 10 9.5c-.102-.125-.164-.472-.05-.586l.51-.513a1.136 1.136 0 0 0 0-1.603l-1.534-1.53a1.126 1.126 0 0 0-.802-.332Z"
      />
    </g>,
    <defs>
      <clipPath id="PhoneIcon_svg__a">
        <path fill={theme.palette.primary.contrastText} d="M5 4h15v15H5z" />
      </clipPath>
    </defs>
  );
};
export default PhoneNumberQuestionIcon;
