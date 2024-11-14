import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocale } from '../contexts/LocaleContext';
import { cn } from '../utils/cn';
import { splitIntoParagraphs } from '../utils/splitIntoParagraphs';
import AppIconTooltip from './AppIconTooltip';
import Paragraph from './Paragraph';
import ProjectCarousel from './ProjectCarousel';
import ProjectGridAsset from './ProjectGridAsset';

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
        {(() => {
          const asset = assets[0];
          if (!asset) return null;

          const { ref: inViewRef, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1
          });

          return (
            <ProjectGridAsset
              forwardedRef={inViewRef as unknown as RefObject<HTMLDivElement>}
              key={asset}
              index={0}
              asset={asset}
              inView={inView}
              title={title}
              handleImageClick={setSelectedAsset}
            />
          );
        })()}

        <div className="columns-1 gap-2 md:columns-2">
          {assets.slice(1).map((asset, index) => {
            const { ref: inViewRef, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1
            });

            return (
              <ProjectGridAsset
                forwardedRef={inViewRef as unknown as RefObject<HTMLDivElement>}
                key={asset}
                index={index}
                asset={asset}
                title={title}
                inView={inView}
                handleImageClick={setSelectedAsset}
              />
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
