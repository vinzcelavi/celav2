import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocale } from '../contexts/LocaleContext';
import { cn } from '../utils/cn';
import { identifyAssetType } from '../utils/identifyAssetType';
import { splitIntoParagraphs } from '../utils/splitIntoParagraphs';
import AppIconTooltip from './AppIconTooltip';
import Icon from './Icon';
import LazyImage from './LazyImage';
import Paragraph from './Paragraph';
import ProjectCarousel from './ProjectCarousel';
import Video from './Video';

interface ProjectSectionProps {
  title: string;
  type: string;
  descriptionEn: string;
  descriptionFr: string;
  url: string;
  skills: string[];
  assets: string[];
  bgColor?: string;
  meshGradient?: string;
  active: boolean;
}

interface I18nStrings {
  readMoreButtonText: string;
  readLessButtonText: string;
}

const frenchI18n: I18nStrings = {
  readMoreButtonText: 'En lire plus',
  readLessButtonText: 'En lire moins'
};

const englishI18n = {
  readMoreButtonText: 'Read more',
  readLessButtonText: 'Read less'
};

function ProjectSection({
  title,
  type,
  descriptionEn,
  descriptionFr,
  url,
  skills,
  assets,
  bgColor,
  meshGradient
}: ProjectSectionProps) {
  const { locale } = useLocale();
  const [isMounted, setIsMounted] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [description, setDescription] = useState<string>(descriptionEn);
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [i18n, setI18n] = useState<I18nStrings>(englishI18n);
  const [selectedAsset, setSelectedAsset] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (locale === 'en') {
      setDescription(descriptionEn);
      setI18n(englishI18n);
    } else {
      setDescription(descriptionFr);
      setI18n(frenchI18n);
    }
    setParagraphs(splitIntoParagraphs(description));
  }, [locale, descriptionEn, descriptionFr, description]);

  const handleImageClick = ({ asset }: { asset: string }) => {
    document.body.classList.toggle('overflow-hidden');
    setSelectedAsset(asset);
  };

  const closeGallery = () => {
    document.body.classList.remove('overflow-hidden');
    setSelectedAsset(undefined);
  };

  return (
    <section className={cn('mb-52 md:mb-72', !isMounted ? 'opacity-0' : 'opacity-100')}>
      <div className="md:grid md:grid-cols-33/67 gap-16 mb-10">
        <div className="flex flex-col items-start md:items-end gap-2 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <h3 className="mb-4 md:mb-6 text-xl font-light text-primary capitalize">{type}</h3>

          <AppIconTooltip items={skills} />

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${locale === 'en' ? 'Open project' : 'Ouvrir le projet'} - ${title}`}
              className="mt-6 flex items-center gap-2 text-light text-base font-semibold cursor-pointer transition-all duration-500 hover:opacity-80"
            >
              <span>{locale === 'en' ? 'Open project' : 'Ouvrir le projet'}</span>
              <Icon className="w-4 h-4" name="open-in-new" />
            </a>
          )}
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
              'inline-flex px-[0.5rem] py-[0.125rem] text-sm leading-normal font-semibold rounded-[0.25rem] md:hidden',
              showMore ? 'bg-slate-800 text-slate-400' : 'bg-slate-800 text-slate-300'
            )}
          >
            {showMore ? i18n.readLessButtonText : i18n.readMoreButtonText}
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
                onClick={() => handleImageClick({ asset })}
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
                      height={87}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ProjectCarousel selectedAsset={selectedAsset} assets={assets} title={title} onClick={closeGallery} />

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
