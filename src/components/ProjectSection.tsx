import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
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
  active: boolean;
}

function ProjectSection({ title, type, descriptionEn, descriptionFr, skills, assets }: ProjectSectionProps) {
  const { locale } = useLocale();
  const [showMore, setShowMore] = useState(false);
  const [description, setDescription] = useState<string>(descriptionEn);
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  useEffect(() => {
    if (locale === 'en') {
      setDescription(descriptionEn);
    } else {
      setDescription(descriptionFr);
    }
    setParagraphs(splitIntoParagraphs(description));
  }, [locale, descriptionEn, descriptionFr, description]);

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
            {showMore ? 'Read less' : 'Read more'}
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
              <div
                key={asset}
                ref={ref}
                className={cn(
                  'w-full aspect-project-preview rounded-md overflow-hidden col-span-1 will-change-transform transition-all duration-[.7s] ease-out-quad',
                  index === 0 && 'md:col-span-2',
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                )}
                style={{
                  transitionDelay: isMobile ? '0ms' : `${index * 100}ms`
                }}
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
    </section>
  );
}

export default ProjectSection;
