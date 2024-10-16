function WorkSectionTitle() {
  return (
    <div className="md:grid md:grid-cols-33/67 gap-16 mb-40">
      <h2 className="relative z-10 md:pr-8 text-project-title leading-none md:leading-tight lg:leading-none font-extrabold text-slate-800 md:text-slate-900">
        Work*
      </h2>
      <div className="relative z-10 flex flex-col justify-end">
        <small className="text-sm md:text-base font-medium text-slate-500">
          *activity involving mental or physical effort done in order to achieve a purpose or result.
        </small>
      </div>
    </div>
  );
}

export default WorkSectionTitle;
