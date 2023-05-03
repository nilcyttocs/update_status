import '@mui/material/StepIcon';
import '@mui/material/Typography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    underline: true;
  }
}

declare module '@mui/material/StepIcon' {
  interface StepIconProps {
    strict: boolean;
    stepClick: (clickedStep: number) => void;
    stepHover: (hoveredStep: number) => void;
    stepUnhover: () => void;
  }
}
