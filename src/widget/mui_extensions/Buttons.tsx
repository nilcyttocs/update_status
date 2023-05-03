import React from 'react';

import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/system';

const TOGGLE_SELECT_COLOR = '#5AACF6';

const DownloadIcon = (props: any): JSX.Element => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g id="download">
        <path
          id="download"
          d="m12,22c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm1.8,-14.9l-3.6,0l0,3.6l-2.4,0l4.2,4.2l4.2,-4.2l-2.4,0l0,-3.6zm-1.8,14.9c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm-4.2,-6.1l8.4,0l0,1.2l-8.4,0l0,-1.2zm4.2,6.1c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

interface DownloadButtonProps extends IconButtonProps {
  tooltip?: string;
}

export const DownloadButton = ({
  tooltip = 'Download',
  sx,
  ...downloadButtonProps
}: DownloadButtonProps) => {
  return (
    <Tooltip title={tooltip}>
      <div
        style={{
          width: '40px',
          height: '40px',
          ...(sx as any)
        }}
      >
        <IconButton sx={{ padding: '0px' }} {...downloadButtonProps}>
          <SvgIcon color="primary" sx={{ fontSize: '2.5rem' }}>
            <DownloadIcon />
          </SvgIcon>
        </IconButton>
      </div>
    </Tooltip>
  );
};

const FilterIcon = (props: any): JSX.Element => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g id="filter">
        <path
          id="filter"
          d="m12,22c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm4.085,-14.045c-0.0319,-0.0614 -0.0799,-0.113 -0.139,-0.1491c-0.059,-0.0362 -0.1268,-0.0555 -0.196,-0.0559l-7.5,0c-0.0692,0.0004 -0.137,0.0197 -0.196,0.0559c-0.0591,0.0361 -0.1071,0.0877 -0.139,0.1491c-0.0318,0.0616 -0.0454,0.131 -0.0392,0.2001c0.0062,0.0691 0.0319,0.1349 0.0742,0.1899l2.675,3.655l0,3.875c0.0013,0.0991 0.0412,0.1937 0.1113,0.2638c0.07,0.07 0.1646,0.1099 0.2637,0.1112l2,0c0.0991,-0.0013 0.1937,-0.0412 0.2637,-0.1112c0.0701,-0.0701 0.11,-0.1647 0.1113,-0.2638l0,-3.875l2.675,-3.655c0.0423,-0.055 0.068,-0.1208 0.0742,-0.1899c0.0062,-0.0691 -0.0074,-0.1385 -0.0392,-0.2001z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

interface FilterButtonProps extends IconButtonProps {
  tooltip?: string;
}

export const FilterButton = ({
  tooltip = 'Filter',
  sx,
  ...filterButtonProps
}: FilterButtonProps) => {
  return (
    <Tooltip title={tooltip}>
      <div
        style={{
          width: '40px',
          height: '40px',
          ...(sx as any)
        }}
      >
        <IconButton sx={{ padding: '0px' }} {...filterButtonProps}>
          <SvgIcon color="primary" sx={{ fontSize: '2.5rem' }}>
            <FilterIcon />
          </SvgIcon>
        </IconButton>
      </div>
    </Tooltip>
  );
};

const HorizontalFlipIcon = (props: any): JSX.Element => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g id="h_flip">
        <path
          id="h_flip"
          d="m12,22c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm-5,-6.3334c-0.1763,0 -0.3396,-0.0929 -0.4298,-0.2445c-0.0902,-0.1515 -0.0938,-0.3394 -0.0096,-0.4942l4.1666,-7.6666c0.1092,-0.201 0.3409,-0.3022 0.5626,-0.2458c0.2216,0.0563 0.3768,0.2559 0.3768,0.4846l0,7.6666c0,0.2762 -0.2238,0.5 -0.5,0.5l-4.1666,0l0,-0.0001zm10.4298,-0.2445c-0.0902,0.1516 -0.2534,0.2445 -0.4298,0.2445l-4.1666,0c-0.2762,0 -0.5,-0.2238 -0.5,-0.5l0,-7.6666c0,-0.2286 0.1552,-0.4282 0.3768,-0.4846c0.2217,-0.0563 0.4534,0.045 0.5626,0.2458l4.1666,7.6666c0.0842,0.155 0.0806,0.3427 -0.0096,0.4942l0,0.0001zm-4.0964,-5.9551l0,5.1996l2.8258,0l-2.8258,-5.1996z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

const VerticalFlipIcon = (props: any): JSX.Element => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-90,12,12)" id="v_flip">
        <path
          id="v_flip"
          d="m12,22c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm-5,-6.3334c-0.1763,0 -0.3396,-0.0929 -0.4298,-0.2445c-0.0902,-0.1515 -0.0938,-0.3394 -0.0096,-0.4942l4.1666,-7.6666c0.1092,-0.201 0.3409,-0.3022 0.5626,-0.2458c0.2216,0.0563 0.3768,0.2559 0.3768,0.4846l0,7.6666c0,0.2762 -0.2238,0.5 -0.5,0.5l-4.1666,0l0,-0.0001zm10.4298,-0.2445c-0.0902,0.1516 -0.2534,0.2445 -0.4298,0.2445l-4.1666,0c-0.2762,0 -0.5,-0.2238 -0.5,-0.5l0,-7.6666c0,-0.2286 0.1552,-0.4282 0.3768,-0.4846c0.2217,-0.0563 0.4534,0.045 0.5626,0.2458l4.1666,7.6666c0.0842,0.155 0.0806,0.3427 -0.0096,0.4942l0,0.0001zm-4.0964,-5.9551l0,5.1996l2.8258,0l-2.8258,-5.1996z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

interface FlipToggleProps extends IconButtonProps {
  horizontal: boolean;
  flip: boolean;
  tooltip?: string;
}

export const FlipToggle = ({
  horizontal,
  flip,
  tooltip = horizontal ? 'Horizontal Flip' : 'Vertical Flip',
  sx,
  ...hFlipToggleProps
}: FlipToggleProps) => {
  return (
    <Tooltip title={tooltip}>
      <div
        style={{
          width: '40px',
          height: '40px',
          ...(sx as any)
        }}
      >
        <IconButton sx={{ padding: '0px' }} {...hFlipToggleProps}>
          <SvgIcon
            color="primary"
            sx={{
              fontSize: '2.5rem',
              fill: flip ? TOGGLE_SELECT_COLOR : 'currentColor'
            }}
          >
            {horizontal ? <HorizontalFlipIcon /> : <VerticalFlipIcon />}
          </SvgIcon>
        </IconButton>
      </div>
    </Tooltip>
  );
};

interface PauseRunToggleProps extends IconButtonProps {
  running: boolean;
  tooltip?: string;
}

export const PauseRunToggle = ({
  running,
  tooltip = running ? 'Pause' : 'Run',
  sx,
  ...pauseRunToggleProps
}: PauseRunToggleProps) => {
  return (
    <Tooltip title={tooltip}>
      <div
        style={{
          width: '40px',
          height: '40px',
          ...(sx as any)
        }}
      >
        <IconButton
          color="primary"
          sx={{
            padding: '0px',
            '& .MuiSvgIcon-root': {
              fontSize: '2.5rem'
            }
          }}
          {...pauseRunToggleProps}
        >
          {running ? <PauseCircleIcon /> : <PlayCircleIcon />}
        </IconButton>
      </div>
    </Tooltip>
  );
};

const blink = keyframes`
  0% { color: red; }
  33% { color: transparent; }
  66% { color: red; }
  100% { color: red; }
`;

const RecordIconOuter = (props: any): JSX.Element => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g id="record_outer">
        <path
          id="record_outer"
          d="m12,22c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm0,-6c-2.2099,0 -4,-1.7901 -4,-4c0,-2.2099 1.7901,-4 4,-4c2.2099,0 4,1.7901 4,4c0,2.2099 -1.7901,4 -4,4z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

const RecordIconInner = (props: any): JSX.Element => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g>
        <ellipse ry="4" rx="4" cy="12" cx="12" fill="currentColor" />
      </g>
    </svg>
  );
};

interface RecordToggleProps extends IconButtonProps {
  recording: boolean;
  tooltip?: string;
}

export const RecordToggle = ({
  recording,
  tooltip = 'Record',
  sx,
  ...recordToggleProps
}: RecordToggleProps) => {
  return (
    <Tooltip title={tooltip}>
      <div
        style={{
          width: '40px',
          height: '40px',
          ...(sx as any)
        }}
      >
        <IconButton
          sx={{
            padding: '0px',
            position: 'relative'
          }}
          {...recordToggleProps}
        >
          <SvgIcon color="primary" sx={{ fontSize: '2.5rem' }}>
            <RecordIconOuter />
          </SvgIcon>
          <SvgIcon
            sx={{
              position: 'absolute',
              fontSize: '2.5rem',
              color: 'transparent',
              animation: recording ? `${blink} 1.5s linear infinite` : null
            }}
          >
            <RecordIconInner />
          </SvgIcon>
        </IconButton>
      </div>
    </Tooltip>
  );
};

interface ResetButtonProps extends IconButtonProps {
  tooltip?: string;
}

export const ResetButton = ({
  tooltip = 'Reset',
  sx,
  ...resetButtonProps
}: ResetButtonProps) => {
  return (
    <Tooltip title={tooltip}>
      <div
        style={{
          width: '40px',
          height: '40px',
          ...(sx as any)
        }}
      >
        <IconButton
          color="primary"
          sx={{
            padding: '0px',
            '& .MuiSvgIcon-root': {
              fontSize: '2.5rem'
            }
          }}
          {...resetButtonProps}
        >
          <ChangeCircleIcon />
        </IconButton>
      </div>
    </Tooltip>
  );
};

interface StopButtonProps extends IconButtonProps {
  tooltip?: string;
}

export const StopButton = ({
  tooltip = 'Stop',
  sx,
  ...stopButtonProps
}: StopButtonProps) => {
  return (
    <Tooltip title={tooltip}>
      <div
        style={{
          width: '40px',
          height: '40px',
          ...(sx as any)
        }}
      >
        <IconButton
          color="primary"
          sx={{
            padding: '0px',
            '& .MuiSvgIcon-root': {
              fontSize: '2.5rem'
            }
          }}
          {...stopButtonProps}
        >
          <StopCircleIcon />
        </IconButton>
      </div>
    </Tooltip>
  );
};

interface SwitchButtonProps extends IconButtonProps {
  tooltip?: string;
}

export const SwitchButton = ({
  tooltip = 'Switch',
  sx,
  ...switchButtonProps
}: SwitchButtonProps) => {
  return (
    <Tooltip title={tooltip}>
      <div
        style={{
          width: '40px',
          height: '40px',
          ...(sx as any)
        }}
      >
        <IconButton
          color="primary"
          sx={{
            padding: '0px',
            '& .MuiSvgIcon-root': {
              fontSize: '2.5rem'
            }
          }}
          {...switchButtonProps}
        >
          <SwapHorizontalCircleIcon />
        </IconButton>
      </div>
    </Tooltip>
  );
};

const PositionViewIcon = (props: any): JSX.Element => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g id="position_view">
        <path
          id="position_view"
          d="m12,22c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm-0.375,-12.8125c-0.8978,0 -1.625,-0.7831 -1.625,-1.75c0,-0.9668 0.7272,-1.75 1.625,-1.75c0.8978,0 1.625,0.7832 1.625,1.75c0,0.9669 -0.7272,1.75 -1.625,1.75zm0.375,12.8125c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm-3.75,-8.0625c-0.8978,0 -1.625,-0.7831 -1.625,-1.75c0,-0.9669 0.7272,-1.75 1.625,-1.75c0.8978,0 1.625,0.7831 1.625,1.75c0,0.9669 -0.7272,1.75 -1.625,1.75zm3.75,8.0625c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm3,-4.5625c-0.8978,0 -1.625,-0.7831 -1.625,-1.75c0,-0.9669 0.7272,-1.75 1.625,-1.75c0.8978,0 1.625,0.7831 1.625,1.75c0,0.9669 -0.7272,1.75 -1.625,1.75z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

const TraceViewIcon = (props: any): JSX.Element => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g id="trace_view">
        <path
          id="trace_view"
          d="m12,22c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm6.7841,-8.3268c-0.0695,-0.0835 -1.2839,-1.5141 -3.3499,-2.3156c-0.1182,-0.998 -0.498,-1.9075 -1.0985,-2.6106c-0.8421,-0.9859 -2.0565,-1.507 -3.5117,-1.507c-2.8854,0 -4.7659,2.5863 -4.8445,2.6964a0.448,0.448 90 0 0 0.7287,0.5214c0.0166,-0.0233 1.6973,-2.3218 4.1158,-2.3218c1.185,0 2.1638,0.4125 2.8304,1.193a3.8728,3.8728 90 0 1 0.8229,1.7243a7.668,7.668 90 0 0 -1.8613,-0.2293c-1.4594,0 -2.6846,0.3813 -3.543,1.1027c-0.7593,0.6382 -1.1949,1.5272 -1.1949,2.4392a2.665,2.665 90 0 0 0.7769,1.9071c0.541,0.5384 1.291,0.823 2.169,0.823c1.4125,0 2.6146,-0.5587 3.4762,-1.6156c0.684,-0.839 1.1005,-1.9654 1.1647,-3.1305c1.6454,0.743 2.617,1.8803 2.631,1.8969a0.448,0.448 90 1 0 0.6882,-0.5736zm-7.9601,2.5268c-1.416,0 -2.0499,-0.9212 -2.0499,-1.8341c0,-1.2743 1.2023,-2.6459 3.8419,-2.6459a6.7201,6.7201 90 0 1 1.9616,0.2953c0,0.0061 0.0001,0.0123 0.0001,0.0185c0,2.0703 -1.2894,4.1662 -3.7537,4.1662z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

interface TouchViewToggleProps extends IconButtonProps {
  traceView: boolean;
  tooltip?: string;
}

export const TouchViewToggle = ({
  traceView,
  tooltip = traceView ? 'Position View' : 'Trace View',
  sx,
  ...touchViewToggleProps
}: TouchViewToggleProps) => {
  return (
    <Tooltip title={tooltip}>
      <div
        style={{
          width: '40px',
          height: '40px',
          ...(sx as any)
        }}
      >
        <IconButton sx={{ padding: '0px' }} {...touchViewToggleProps}>
          <SvgIcon color="primary" sx={{ fontSize: '2.5rem' }}>
            {traceView ? <PositionViewIcon /> : <TraceViewIcon />}
          </SvgIcon>
        </IconButton>
      </div>
    </Tooltip>
  );
};

const UploadIcon = (props: any): JSX.Element => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g id="upload">
        <path
          id="upload"
          d="m12,22c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm-1.8,-7.3l3.6,0l0,-3.6l2.4,0l-4.2,-4.2l-4.2,4.2l2.4,0l0,3.6zm1.8,7.3c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10zm-4.2,-6.1l8.4,0l0,1.2l-8.4,0l0,-1.2zm4.2,6.1c-5.5248,0 -10,-4.4752 -10,-10c0,-5.5248 4.4752,-10 10,-10c5.5248,0 10,4.4752 10,10c0,5.5248 -4.4752,10 -10,10z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

interface UploadButtonProps {
  input: JSX.Element;
  cloud?: boolean;
  disabled?: boolean;
  tooltip?: string;
  sx?: any;
}

export const UploadButton = ({
  input,
  cloud = false,
  disabled = false,
  tooltip = 'Upload File',
  sx
}: UploadButtonProps) => {
  return (
    <Tooltip title={tooltip}>
      <div
        style={{
          width: '40px',
          height: '40px',
          ...(sx as any)
        }}
      >
        <IconButton
          color="primary"
          component="label"
          disabled={disabled}
          sx={{
            padding: '0px',
            '& .MuiSvgIcon-root': {
              fontSize: '2.5rem'
            }
          }}
        >
          {input}
          {cloud ? (
            <CloudUploadIcon />
          ) : (
            <SvgIcon color="primary">
              <UploadIcon />
            </SvgIcon>
          )}
        </IconButton>
      </div>
    </Tooltip>
  );
};

export const BackButton = ({ sx, ...backButtonProps }: ButtonProps) => {
  return (
    <Button variant="text" sx={{ padding: 0, ...sx }} {...backButtonProps}>
      <KeyboardArrowLeft />
      Prev
    </Button>
  );
};

export const NextButton = ({ sx, ...nextButtonProps }: ButtonProps) => {
  return (
    <Button variant="text" sx={{ padding: 0, ...sx }} {...nextButtonProps}>
      Next
      <KeyboardArrowRight />
    </Button>
  );
};

interface ProgressButtonProps extends ButtonProps {
  progress: number | undefined;
  onDoneClick: () => void;
  onCancelClick?: () => void;
  onResetClick?: () => void;
  progressMessage?: string | null;
}

export const ProgressButton = ({
  progress,
  onClick,
  onDoneClick,
  onCancelClick,
  onResetClick,
  progressMessage = null,
  sx,
  ...progressButtonProps
}: ProgressButtonProps) => {
  const theme = useTheme();
  return (
    <div style={{ position: 'relative' }}>
      <Button
        disabled={
          onCancelClick === undefined &&
          progress !== undefined &&
          progress !== 100
        }
        onClick={
          progress === undefined
            ? onClick
            : progress === 100
            ? onDoneClick
            : onCancelClick
        }
        sx={{
          width: '125px',
          padding: '5px 15px',
          position: 'relative',
          border: '1px solid',
          borderColor:
            progress === undefined || progress === 100
              ? 'rgba(0, 0, 0, 0)'
              : theme.palette.primary.main,
          color: progress !== undefined && progress !== 100 ? 'black' : null,
          backgroundColor:
            progress !== undefined && progress !== 100
              ? 'rgba(0, 0, 0, 0.12)'
              : null,
          '&:hover': {
            backgroundColor:
              progress !== undefined && progress !== 100
                ? 'rgba(0, 0, 0, 0.12)'
                : null
          },
          ...sx
        }}
        {...progressButtonProps}
      >
        {progress !== undefined && progress !== 100 && (
          <>
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
              }}
            >
              <Box
                sx={{
                  width: progress + '%',
                  height: '100%',
                  borderRadius: '4px',
                  backgroundColor: 'custom.progress',
                  transition: 'width 0.5s'
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Typography
                variant="button"
                sx={{ color: 'black', textTransform: 'none' }}
              >
                {onCancelClick !== undefined
                  ? 'Cancel'
                  : progressMessage
                  ? progressMessage
                  : 'Processing...'}
              </Typography>
            </div>
          </>
        )}
        {progress !== undefined ? (
          progress === 100 ? (
            'Done'
          ) : (
            <>&nbsp;</>
          )
        ) : (
          progressButtonProps.children
        )}
      </Button>
      {onResetClick !== undefined && progress === 100 && (
        <IconButton
          onClick={event => {
            onResetClick();
          }}
          sx={{
            padding: 0,
            position: 'absolute',
            bottom: 16,
            right: -32,
            color: theme.palette.primary.main
          }}
        >
          <RestartAltIcon />
        </IconButton>
      )}
    </div>
  );
};
