import Paragraph from './Paragraph';
import { Key } from 'react';

function ProjectSection({ title, subTitle, paragraphs, images }: {
  title: string;
  subTitle: string;
  paragraphs: { bold?: boolean; white?: boolean; text: string }[];
  images: { img: string; alt: string }[];
}) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-2 py-12 md:py-32">
        <div className="flex flex-col items-start md:items-end gap-2 pb-16 md:pb-0 md:pr-16">
          <h2 className="text-4xl md:text-6xl font-bold">{title}</h2>
          <h3 className="text-xl md:text-2xl font-light text-secondary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{subTitle}</h3>
        </div>
        <div className="max-w-[40rem]">
          {paragraphs.map((paragraph: { bold?: boolean; white?: boolean; text: string }, index: Key | null | undefined) => (
            <Paragraph key={index} bold={paragraph.bold} white={paragraph.white}>
              {paragraph.text}
            </Paragraph>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 py-32">
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