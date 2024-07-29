import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useMediaQuery } from '@mui/material';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLS3C9FhNvOKai52gW7H3huIsm4xxKEXUGQ&s',
  },
  {
    label: 'Bird',
    imgPath:
      'https://srmap.edu.in/wp-content/uploads/2023/05/IMG_2231-min-1024x683.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://srmap.edu.in/wp-content/uploads/2024/01/DSC00019-scaled.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://srmap.edu.in/wp-content/uploads/2024/01/IMG_6553-1024x683.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1000, flexGrow: 1, position: 'relative'}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: {
                    sm:300,
                    md:500
                  },
                  display: 'block',
                  maxWidth: 1000,
                  overflow: 'hidden',
                  width: '100%'
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        backButton={null}
        nextButton={null}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'transparent',
          width: '100%',
        }}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
