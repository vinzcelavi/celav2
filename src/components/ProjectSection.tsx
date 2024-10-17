import { isMobile } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';
import { cn } from '../utils/cn';
import AppIconTooltip from './AppIconTooltip';
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
  medias: Array<{ alt: string; placeholder?: string } & ({ img: string } | { video: string })>;
}

function ProjectSection({ title, subTitle, paragraphs, technos, medias }: ProjectSectionProps) {
  return (
    <section className="mb-52 md:mb-72">
      <div className="md:grid md:grid-cols-33/67 gap-16 mb-10">
        <div className="flex flex-col items-start md:items-end gap-2 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <h3 className="text-xl font-light text-primary mb-4 md:mb-6">{subTitle}</h3>

          <AppIconTooltip items={technos} />
        </div>
        <div className="w-full md:w-10/12">
          {paragraphs.map(
            (paragraph: {
              bold?: boolean;
              white?: boolean;
              bigger?: boolean;
              text: string;
            }) => (
              <Paragraph key={paragraph.text} bold={paragraph.bold} white={paragraph.white} bigger={paragraph.bigger}>
                {paragraph.text}
              </Paragraph>
            )
          )}
        </div>
      </div>
      <div className="relative -mx-7">
        <div className="grid gap-1 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
          {medias.map((media, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1
            });

            return (
              <div
                key={media.alt}
                ref={ref}
                className={cn(
                  'w-full aspect-project-preview rounded-md overflow-hidden col-span-1 transition-all duration-[.75s] ease-out-quad',
                  index === 0 && 'md:col-span-2 2xl:col-span-2',
                  index === 1 && 'md:col-span-1 2xl:col-span-2',
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                )}
                style={{
                  transitionDelay: isMobile ? '0ms' : `${index * 100}ms`
                }}
              >
                <div
                  className={cn('transition-all duration-[1.35s] ease-out-quad', inView ? 'scale-100' : 'scale-110')}
                >
                  {'video' in media ? (
                    <Video src={media.video} />
                  ) : (
                    <LazyImage
                      src={media.img}
                      placeholder={media.placeholder ?? ''}
                      alt={media.alt}
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
