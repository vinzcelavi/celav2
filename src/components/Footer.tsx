function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-16">
      <p className="text-base text-gray-500">
        Celavi © 2024 Vincent Bianciotto.{' '}
        <a href="https://github.com/vinzcelavi/celav2-fr/blob/main/mit.md" className="text-white/80 hover:text-white transition-all duration-300">
          MIT licence
        </a>
        .{' '}
        <a href="https://github.com/vinzcelavi/celav2-fr/blob/main/" className="text-white/80 hover:text-white transition-all duration-300">
          Source code
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer;