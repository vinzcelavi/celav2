import type { RefObject } from 'react';
import { cn } from '../utils/cn';
import { identifyAssetType } from '../utils/identifyAssetType';
import LazyImage from './LazyImage';
import Video from './Video';

type ProjectGridAssetProps = {
  index: number;
  forwardedRef: RefObject<HTMLDivElement>;
  asset: string;
  title: string;
  inView: boolean;
  handleImageClick: (asset: string) => void;
};

export default function ProjectGridAsset({
  index,
  forwardedRef,
  asset,
  title,
  inView,
  handleImageClick
}: ProjectGridAssetProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      ref={forwardedRef}
      className={cn(
        'relative flex flex-col items-center justify-end w-full mb-2 pt-4 px-6 md:pt-10 md:px-16 rounded-md col-span-1 will-change-transform transition-all duration-[.7s] ease-out-quad cursor-zoom-in overflow-hidden',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
        `${title.toLowerCase()}-bg-color`,
        `${title.toLowerCase()}-mesh-gradient`
      )}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
      onClick={() => handleImageClick(asset)}
    >
      <div
        className={cn(
          'will-change-transform transition-all duration-[1.35s] ease-out-quad',
          inView ? 'scale-100' : 'scale-110'
        )}
      >
        {identifyAssetType(asset) === 'video' ? (
          <Video src={`${import.meta.env.VITE_AWS_BUCKET_URL}/${asset}`} />
        ) : identifyAssetType(asset) === 'image' ? (
          <LazyImage src={`${import.meta.env.VITE_AWS_BUCKET_URL}/${asset}`} alt={asset} width={105} height={87} />
        ) : null}
      </div>
    </div>
  );
}
