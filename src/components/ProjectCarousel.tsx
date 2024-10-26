import { AnimatePresence, motion } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '../utils/cn';
import { identifyAssetType } from '../utils/identifyAssetType';
import { wrap } from '../utils/wrap';
import KeyboardKey from './KeyboardKey';
import LazyImage from './LazyImage';
import Video from './Video';

interface ProjectCarouselProps {
  onClick: () => void;
  selectedAsset?: string;
  assets?: string[];
  title: string;
}

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 1,
    opacity: 0
  })
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
};

function ProjectCarousel({ onClick, selectedAsset, assets, title }: ProjectCarouselProps) {
  const selectedAssetIndex = assets?.indexOf(selectedAsset ?? '');
  const [[imageCount, direction], setImageCount] = useState([selectedAssetIndex, 0]);
  const [keyPressed, setKeyPressed] = useState('');

  const activeImageIndex = wrap(0, assets?.length ?? 0, imageCount ?? 0);
  const resetKeyPress = () => setKeyPressed('');
  const keyPressTimer = setTimeout(resetKeyPress, 150);

  useEffect(() => {
    if (selectedAssetIndex) {
      skipToImage(selectedAssetIndex !== -1 ? selectedAssetIndex : 0);
    }
  }, [selectedAssetIndex]);

  const swipeToImage = useCallback(
    (swipeDirection: number) => {
      if (assets) {
        setImageCount([activeImageIndex + swipeDirection, swipeDirection]);
      }
    },
    [assets, activeImageIndex]
  );

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId: number) => {
    let changeDirection = 1;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  // Memoize the handleKeyPress function
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      setKeyPressed(event.key);
      keyPressTimer;

      switch (event.key) {
        case 'Escape':
          onClick();
          break;
        case 'ArrowLeft':
          swipeToImage(-1);
          break;
        case 'ArrowRight':
          swipeToImage(1);
          break;
        default:
          break;
      }
    },
    [onClick, swipeToImage, keyPressTimer]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <AnimatePresence>
      {selectedAsset && assets && (
        <motion.div
          className={cn(
            'z-[10000] fixed inset-0 px-6 flex flex-col items-center justify-center lg:justify-end w-screen h-screen bg-dark select-none overflow-hidden',
            `${title.toLowerCase()}-bg-color`,
            `${title.toLowerCase()}-mesh-gradient`
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.3 }}
        >
          <div className="hidden md:flex absolute z-200 top-8 left-1/2 -translate-x-1/2">
            <KeyboardKey
              onClick={() => {
                swipeToImage(-1);
                setKeyPressed('ArrowLeft');
              }}
              keyValue="ArrowLeft"
              keyPressed={keyPressed === 'ArrowLeft'}
            >
              ◀
            </KeyboardKey>
            <KeyboardKey
              onClick={() => {
                onClick();
                setKeyPressed('Escape');
              }}
              keyValue="Escape"
              keyPressed={keyPressed === 'Escape'}
            >
              esc
            </KeyboardKey>
            <KeyboardKey
              onClick={() => {
                swipeToImage(1);
                setKeyPressed('ArrowRight');
              }}
              keyValue="ArrowRight"
              keyPressed={keyPressed === 'ArrowRight'}
            >
              ▶
            </KeyboardKey>
          </div>

          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            onClick={onClick}
            className="relative flex flex-col items-center justify-end lg:justify-end grow w-auto h-auto max-w-[90vw] max-h-[74vh] lg:max-h-[84vh] object-contain aspect-project-preview lg:-mb-3 cursor-zoom-out"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeImageIndex}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                className="absolute top-0 bottom-0 w-full h-full flex flex-col items-center justify-center lg:justify-end lg:-mb-3"
              >
                {identifyAssetType(assets[activeImageIndex]) === 'video' ? (
                  <Video src={`${import.meta.env.VITE_AWS_BUCKET_URL}/${assets[activeImageIndex]}`} />
                ) : identifyAssetType(assets[activeImageIndex]) === 'image' ? (
                  <LazyImage
                    src={`${import.meta.env.VITE_AWS_BUCKET_URL}/${assets[activeImageIndex]}`}
                    alt={assets[activeImageIndex]}
                  />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectCarousel;
