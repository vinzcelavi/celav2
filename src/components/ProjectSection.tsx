import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocale } from '../contexts/LocaleContext';
import { cn } from '../utils/cn';
import { identifyAssetType } from '../utils/identifyAssetType';
import { splitIntoParagraphs } from '../utils/splitIntoParagraphs';
import AppIconTooltip from './AppIconTooltip';
import LazyImage from './LazyImage';
import Paragraph from './Paragraph';
import Video from './Video';

interface ProjectSectionProps {
  title: string;
  type: string;
  descriptionEn: string;
  descriptionFr: string;
  skills: string[];
  assets: string[];
  bgColor?: string;
  meshGradient?: string;
  active: boolean;
}

function ProjectSection({
  title,
  type,
  descriptionEn,
  descriptionFr,
  skills,
  assets,
  bgColor,
  meshGradient
}: ProjectSectionProps) {
  const { locale } = useLocale();
  const [showMore, setShowMore] = useState(false);
  const [description, setDescription] = useState<string>(descriptionEn);
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [readMoreButtonText, setReadMoreButtonText] = useState<string>('Read more');
  const [readLessButtonText, setReadLessButtonText] = useState<string>('Read less');
  const [fullscreenAsset, setFullscreenAsset] = useState<string | null>(null);

  useEffect(() => {
    if (locale === 'en') {
      setDescription(descriptionEn);
      setReadMoreButtonText('Read more');
      setReadLessButtonText('Read less');
    } else {
      setDescription(descriptionFr);
      setReadMoreButtonText('En lire plus');
      setReadLessButtonText('En lire moins');
    }
    setParagraphs(splitIntoParagraphs(description));
  }, [locale, descriptionEn, descriptionFr, description]);

  const handleImageClick = ({ asset }: { asset: string }) => {
    setFullscreenAsset(asset);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <section className="mb-52 md:mb-72">
      <div className="md:grid md:grid-cols-33/67 gap-16 mb-10">
        <div className="flex flex-col items-start md:items-end gap-2 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <h3 className="mb-4 md:mb-6 text-xl font-light text-primary capitalize">{type}</h3>

          <AppIconTooltip items={skills} />
        </div>
        <div className="w-full md:w-10/12">
          {paragraphs.length > 0 && (
            <Paragraph bold white bigger>
              {paragraphs[0] ?? ''}
            </Paragraph>
          )}

          <div className={cn('hidden md:block', showMore ? 'block' : 'hidden')}>
            {paragraphs.slice(1).map((paragraph: string) => (
              <Paragraph key={paragraph.slice(0, 10)}>{paragraph}</Paragraph>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className={cn(
              'inline-flex px-2 py-0.5 text-sm leading-normal font-semibold rounded-[0.25rem] md:hidden',
              showMore ? 'bg-slate-800 text-slate-400' : 'bg-slate-800 text-slate-300'
            )}
          >
            {showMore ? readLessButtonText : readMoreButtonText}
          </button>
        </div>
      </div>
      <div className="relative -mx-4">
        <div className="grid gap-1 grid-cols-1 md:grid-cols-2">
          {assets.map((asset, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1
            });

            return (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                key={asset}
                ref={ref}
                className={cn(
                  'relative flex flex-col items-center justify-end w-full pt-4 px-6 md:pt-10 md:px-16 rounded-md col-span-1 will-change-transform transition-all duration-[.7s] ease-out-quad cursor-zoom-in overflow-hidden',
                  index === 0 && 'md:col-span-2',
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
                  `${title.toLowerCase()}-bg-color`,
                  `${title.toLowerCase()}-mesh-gradient`
                )}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                onClick={() => handleImageClick({ asset: asset })}
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
                    <LazyImage
                      src={`${import.meta.env.VITE_AWS_BUCKET_URL}/${asset}`}
                      alt={asset}
                      width={105}
                      height={75}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {fullscreenAsset && (
          <motion.div
            className={cn(
              'z-[10000] fixed inset-0 px-6 flex flex-col items-center justify-center lg:justify-end w-screen h-screen bg-dark cursor-zoom-out overflow-hidden',
              `${title.toLowerCase()}-bg-color`,
              `${title.toLowerCase()}-mesh-gradient`
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            onClick={() => {
              document.body.classList.remove('overflow-hidden');
              setFullscreenAsset(null);
            }}
          >
            <div className="max-w-[94vw] h-auto lg:w-auto lg:max-h-[94vh] object-contain aspect-project-preview lg:-mb-1.5 shadow-3xl rounded-t-[8px]">
              {identifyAssetType(fullscreenAsset) === 'video' ? (
                <Video src={`${import.meta.env.VITE_AWS_BUCKET_URL}/${fullscreenAsset}`} />
              ) : identifyAssetType(fullscreenAsset) === 'image' ? (
                <LazyImage src={`${import.meta.env.VITE_AWS_BUCKET_URL}/${fullscreenAsset}`} alt={fullscreenAsset} />
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          .${title.toLowerCase()}-bg-color {
            background-color: ${bgColor};
          }
          .${title.toLowerCase()}-mesh-gradient {
            background-image: ${meshGradient};
          }
        `}
      </style>
    </section>
  );
}

export default ProjectSection;
