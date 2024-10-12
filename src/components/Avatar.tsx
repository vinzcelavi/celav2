function Avatar({ alt }: { alt: string }) {
  return (
    <div
      style={{
        backgroundImage: `url(${import.meta.env.VITE_AWS_BUCKET_URL}/images/avatar.avif)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className="flex w-full h-full rounded-full outline outline-1 outline-offset-2 outline-white/10 group-hover:outline-white/70 transition-all duration-300"
    >
      <span className="sr-only">{alt}</span>
    </div>
  );
}

export default Avatar;
