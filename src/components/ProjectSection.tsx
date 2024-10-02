import { Key } from 'react';
import Paragraph from './Paragraph';
import AppIcon from './AppIcon';
import { cn } from '../utils/cn';
interface ProjectSectionProps {
  active: boolean;
  title: string;
  subTitle: string;
  paragraphs: { bold?: boolean; white?: boolean; bigger?: boolean; text: string }[];
  technos: string[];
  medias: Array<{ alt: string } & ({ img: string } | { video: string })>;
}

function ProjectSection({ title, subTitle, paragraphs, technos, medias }: ProjectSectionProps) {

  return (
    <section className="mb-52 md:mb-72">
      <div className="md:grid md:grid-cols-2 gap-2 mb-20">
        <div className="flex flex-col items-start md:items-end gap-2 mb-16 md:pb-0 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <h3 className="text-xl font-light text-primary mb-4 md:mb-6">{subTitle}</h3>

          <div className="flex flex-wrap gap-4 md:flex-nowrap">
            {technos.map((techno: string) => (
              <AppIcon key={techno} name={techno} className="w-12 rounded-xl border-2 border-white/15" />
            ))}
          </div>
        </div>
        <div className="max-w-[40rem]">
          {paragraphs.map((paragraph: { bold?: boolean; white?: boolean; bigger?: boolean; text: string }, index: Key | null | undefined) => (
            <Paragraph key={index} bold={paragraph.bold} white={paragraph.white} bigger={paragraph.bigger}>
              {paragraph.text}
            </Paragraph>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {medias.map((media, index) => {
            if ('video' in media) {
              return <video key={index} src={media.video} className="w-full rounded-md" autoPlay loop muted />
            } else {
              return <img key={index} src={media.img} className={cn('w-full rounded-md', index === 0 && 'col-span-1 md:col-span-3')} alt={media.alt} />
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection;