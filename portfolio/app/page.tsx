import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Work Section */}
      <section id="work" className="min-h-screen py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center">
            Selected Work
          </h2>
          <p className="text-center text-text-dim">
            Projects coming soon...
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-24 px-4 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center">
            About Me
          </h2>
          <p className="text-center text-text-dim max-w-2xl mx-auto">
            I&rsquo;m a creative director and designer based in Bangkok, passionate
            about creating meaningful experiences through design and building
            inclusive communities.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12">
            Let&rsquo;s Work Together
          </h2>
          <p className="text-text-dim mb-8">
            Have a project in mind? Let&rsquo;s chat.
          </p>
          <a
            href="mailto:hello@tulayakorn.com"
            className="inline-block px-8 py-3 bg-accent text-background font-semibold rounded-md hover:bg-accent/90 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
