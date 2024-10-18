import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';
import { cn } from '../utils/cn';
import AppIconTooltip from './AppIconTooltip';
import Icon from './Icon';
import LazyImage from './LazyImage';
import Paragraph from './Paragraph';
import Video from './Video';

interface ProjectSectionProps {
  active: boolean;
  title: string;
  subTitle: string;
  paragraphs: {
    bold?: boolean;
    white?: boolean;
    bigger?: boolean;
    text: string;
  }[];
  technos: { id: number; name: string; image: string }[];
  assets: Array<{ alt: string; placeholder?: string } & ({ img: string } | { video: string })>;
}

function ProjectSection({ title, subTitle, paragraphs, technos, assets }: ProjectSectionProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="mb-52 md:mb-72">
      <div className="md:grid md:grid-cols-33/67 gap-16 mb-10">
        <div className="flex flex-col items-start md:items-end gap-2 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <h3 className="text-xl font-light text-primary mb-4 md:mb-6">{subTitle}</h3>

          <AppIconTooltip items={technos} />
        </div>
        <div className="w-full md:w-10/12">
          {paragraphs.length > 0 && (
            <Paragraph bold white bigger>
              {paragraphs[0].text}
            </Paragraph>
          )}

          <div className={cn('hidden md:block', showMore ? 'block' : 'hidden')}>
            {paragraphs.slice(1).map((paragraph) => (
              <Paragraph key={paragraph.text}>{paragraph.text}</Paragraph>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-1 text-slate-500 text-base font-bold md:hidden"
          >
            <Icon name={showMore ? 'minus' : 'plus'} className="w-6 h-6 -translate-y-[1px]" />
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
                key={asset.alt}
                ref={ref}
                className={cn(
                  'w-full aspect-project-preview rounded-md overflow-hidden col-span-1 will-change-transform transition-all duration-[.75s] ease-out-quad',
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
                  {'video' in asset ? (
                    <Video src={asset.video} />
                  ) : (
                    <LazyImage
                      src={asset.img}
                      placeholder={asset.placeholder ?? ''}
                      alt={asset.alt}
                      width={105}
                      height={75}
                    />
                  )}
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
