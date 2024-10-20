import Asterisk from './asterisk.svg?react';

function WorkSectionTitle() {
  return (
    <div className="mb-20 md:mb-40">
      <h2 className="relative z-10 inline-flex pr-4 md:pr-10 text-project-title leading-[0.8] font-extrabold text-slate-800 float-right sm:float-none">
        Work{'\u00A0\u00A0'}
        <span className="block absolute top-[-3%] right-[1%] md:right-[4%] w-[14%] animate-spin-slow">
          <Asterisk />
        </span>
      </h2>

      <div className="md:grid md:grid-cols-33/67 clear-both">
        <div className="relative z-10 flex flex-col justify-end col-start-2 md:pl-16">
          <small className="text-sm md:text-base font-medium text-slate-500">
            *activity involving mental or physical effort done in order to achieve a purpose or result.
          </small>
        </div>
      </div>
    </div>
  );
}

export default WorkSectionTitle;
