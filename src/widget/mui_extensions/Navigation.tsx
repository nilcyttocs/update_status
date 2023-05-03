import React, { useEffect, useState } from 'react';

import CircleIcon from '@mui/icons-material/Circle';
import BottomNavigation, {
  BottomNavigationProps
} from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import { StepIconProps } from '@mui/material/StepIcon';
import StepLabel from '@mui/material/StepLabel';
import Stepper, { StepperProps } from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { CAROUSEL_ATTRS, STEPPER_ATTRS } from './constants';

const HOVERED_COLOR_LIGHT = 'rgba(0, 0, 0, 0.53)';
const HOVERED_COLOR_DARK = 'rgba(255, 255, 255, 0.65)';

let verticalStepperIconSize: number;

const VerticalStepIconRoot = styled('div')<{
  ownerState: { strict: boolean; active?: boolean; completed?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.5)'
      : 'rgba(0, 0, 0, 0.38)',
  width: verticalStepperIconSize,
  height: verticalStepperIconSize,
  zIndex: 1,
  color: '#fff',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': !ownerState.strict &&
    !ownerState.active && {
      cursor: 'pointer',
      backgroundColor:
        theme.palette.mode === 'dark' ? HOVERED_COLOR_DARK : HOVERED_COLOR_LIGHT
    },
  ...(ownerState.active && { backgroundColor: '#007dc3' })
}));

const VerticalStepIcon = (props: StepIconProps) => {
  const { strict, active, completed, className } = props;
  return (
    <VerticalStepIconRoot
      ownerState={{ strict, active, completed }}
      className={className}
      onClick={() => {
        if (props.stepClick) {
          props.stepClick(props.icon as number);
        }
      }}
      onMouseOver={() => {
        if (props.stepHover) {
          props.stepHover(props.icon as number);
        }
      }}
      onMouseOut={() => {
        if (props.stepUnhover) {
          props.stepUnhover();
        }
      }}
    >
      {String(props.icon)}
    </VerticalStepIconRoot>
  );
};

type Steps = {
  label: string;
  content?: JSX.Element;
}[];

interface VerticalStepperProps extends StepperProps {
  steps: Steps;
  strict?: boolean;
  iconSize?: number;
  connectorMinHeight?: number;
  onStepClick?: (clickedStep: number) => void;
}

export const VerticalStepper = ({
  steps,
  activeStep,
  strict = false,
  iconSize = STEPPER_ATTRS.ICON_SIZE,
  connectorMinHeight = STEPPER_ATTRS.CONNECTOR_MIN_HEIGHT,
  onStepClick = undefined,
  sx,
  ...verticalStepperProps
}: VerticalStepperProps) => {
  const [activeVerticalStep, setActiveVerticalStep] = useState<number>(1);
  const [hoveredVerticalStep, setHoveredVerticalStep] = useState<number>(0);

  const theme = useTheme();

  verticalStepperIconSize = iconSize;

  useEffect(() => {
    setActiveVerticalStep(activeStep!);
  }, [activeStep]);

  return (
    <Stepper
      activeStep={activeVerticalStep - 1}
      orientation="vertical"
      connector={null}
      sx={{
        whiteSpace: 'normal',
        '& .MuiStepContent-root': {
          minHeight: connectorMinHeight + 'px',
          marginLeft: iconSize / 2 + 'px'
        },
        ...sx
      }}
      {...verticalStepperProps}
    >
      {steps.map((step, index) => (
        <Step key={step.label}>
          <StepLabel
            StepIconComponent={VerticalStepIcon}
            StepIconProps={{
              strict: strict,
              stepClick: (clickedStep: number) => {
                if (strict) {
                  return;
                }
                setActiveVerticalStep(clickedStep);
                if (onStepClick !== undefined) {
                  onStepClick(clickedStep);
                }
              },
              stepHover: (hoveredStep: number) => {
                if (strict) {
                  return;
                }
                setHoveredVerticalStep(hoveredStep);
              },
              stepUnhover: () => {
                if (strict) {
                  return;
                }
                setHoveredVerticalStep(0);
              }
            }}
          >
            <Typography
              sx={{
                color:
                  index !== activeVerticalStep - 1
                    ? index === hoveredVerticalStep - 1
                      ? theme.palette.mode === 'dark'
                        ? HOVERED_COLOR_DARK
                        : HOVERED_COLOR_LIGHT
                      : theme.palette.text.disabled
                    : theme.palette.text.primary,
                fontWeight: index === activeVerticalStep - 1 ? 'bold' : 'normal'
              }}
            >
              {step.label}
            </Typography>
          </StepLabel>
          <StepContent>{step.content}</StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

interface CarouselNavigationProps extends BottomNavigationProps {
  steps?: number;
  disabled?: boolean;
  onStepClick?: (clickedStep: number) => void;
}

export const CarouselNavigation = ({
  steps = CAROUSEL_ATTRS.STEPS,
  disabled = false,
  onStepClick = undefined,
  sx,
  ...carouselNavigationProps
}: CarouselNavigationProps) => {
  const [step, setStep] = useState(1);

  const generateButtons = (): JSX.Element[] => {
    const output: JSX.Element[] = [];
    for (let i = 1; i <= steps; i++) {
      output.push(
        <BottomNavigationAction
          key={i}
          value={i}
          icon={<CircleIcon sx={{ fontSize: '16px' }} />}
          disableRipple
          disabled={disabled}
          sx={{
            minWidth: '24px',
            maxWidth: '24px',
            padding: 0,
            margin: '0px 2px',
            '&.Mui-selected': {
              paddingTop: 0
            }
          }}
        />
      );
    }
    return output;
  };

  return (
    <BottomNavigation
      value={step}
      onChange={(event, clickedStep: number) => {
        setStep(clickedStep);
        if (onStepClick !== undefined) {
          onStepClick(clickedStep);
        }
      }}
      sx={{ height: '24px', ...sx }}
      {...carouselNavigationProps}
    >
      {generateButtons()}
    </BottomNavigation>
  );
};
