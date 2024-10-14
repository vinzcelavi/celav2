import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
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
  const [visibleMedias, setVisibleMedias] = useState<{ [key: number]: boolean }>({});
  const mediasRefs = useRef<HTMLDivElement[] | null[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.id;
            if (id) {
              setVisibleMedias((prev) => ({ ...prev, [id]: true }));
            }
          }
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the video is visible
    );

    for (const media of mediasRefs.current) {
      if (media) observer.observe(media);
    }

    return () => {
      for (const media of mediasRefs.current) {
        if (media) observer.unobserve(media);
      }
    };
  }, []);

  return (
    <section className="mb-52 md:mb-72">
      <div className="md:grid md:grid-cols-2 gap-2 mb-20">
        <div className="flex flex-col items-start md:items-end gap-2 mb-16 md:pb-0 md:pr-8">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <h3 className="text-xl font-light text-primary mb-4 md:mb-6">{subTitle}</h3>

          <AppIconTooltip items={technos} />
        </div>
        <div className="max-w-[42rem] md:pl-8">
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
      <div className="flex flex-col gap-2">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
          {medias.map((media, index) => (
            <div
              key={media.alt}
              ref={(el) => {
                if (mediasRefs.current[index] !== el) {
                  mediasRefs.current[index] = el;
                }
              }}
              data-id={index}
              className={cn(
                'w-full aspect-project-preview rounded-md overflow-hidden col-span-1 transition-all duration-1000 ease-in-out',
                index === 0 && 'md:col-span-2 2xl:col-span-2',
                index === 1 && 'md:col-span-1 2xl:col-span-2',
                visibleMedias[index] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              )}
              style={{
                transitionDelay: isMobile ? '0ms' : `${index * 100}ms`
              }}
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
