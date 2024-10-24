import { useEffect, useState } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import { cn } from '../../utils/cn';
import Asterisk from './asterisk.svg?react';

function WorkSectionTitle() {
  const { locale } = useLocale();
  const [isMounted, setIsMounted] = useState(false);
  const [workTitle, setWorkTitle] = useState<string>('');
  const [workDefinition, setWorkDefinition] = useState<string>(
    '*activity involving mental or physical effort done in order to achieve a purpose or result.'
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (locale === 'en') {
      setWorkTitle('Work');
      setWorkDefinition('*activity involving mental or physical effort done in order to achieve a purpose or result.');
    } else {
      setWorkTitle('Projets');
      setWorkDefinition("*idée de quelque chose à faire, que l'on présente dans ses grandes lignes.");
    }
  }, [locale]);

  if (!isMounted) return null;

  return (
    <div className={cn('mb-20 md:mb-40', !isMounted ? 'opacity-0' : 'opacity-100')}>
      <h2 className="relative z-10 inline-flex text-project-title leading-[1.1] font-black text-slate-800 float-right lg:float-none">
        {workTitle}
        <span>{'\u00A0\u00A0'}</span>
        <span className="block absolute top-[10%] right-0 w-[4.5rem] md:w-[5rem] lg:w-[7rem] animate-spin-slow">
          <Asterisk />
        </span>
      </h2>

      <div className="md:grid md:grid-cols-33/67 clear-both">
        <div className="relative z-10 flex flex-col justify-end col-start-2 md:pl-16">
          <small className="text-sm md:text-base font-medium text-slate-500">{workDefinition}</small>
        </div>
      </div>
    </div>
  );
}

export default WorkSectionTitle;
