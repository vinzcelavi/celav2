import { Key } from 'react';
import Paragraph from './Paragraph';
import AppIcon from './AppIcon';

function ProjectSection({ title, subTitle, paragraphs, technos, images }: {
  title: string;
  subTitle: string;
  paragraphs: { bold?: boolean; white?: boolean; text: string }[];
  technos: string[];
  images: { img: string; alt: string }[];
}) {
  return (
    <section className="mb-52">
      <div className="md:grid md:grid-cols-2 gap-2 mb-16">
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
        <div className="flex">
          <img src={images[0].img} className="w-full rounded-sm" alt={images[0].alt} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {images.slice(1).map((image, index) => (
            <img key={index} src={image.img} className="w-full rounded-sm" alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection;