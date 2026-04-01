const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Majestic Sri Lankan Landscape" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-qFLIYl2dAfdwVHRchxc1uqUbBjXIOTqpwVggbUXDtVmqJkTntVBeI6ScenrYLzvc5SDQKLePLV8N5O3eZuLtqB_V9qub1wuivbLbWYSovpM0Otlx9HKla89GJUqUh5ijxchEeH6wZMEoBoljcmDG6d1JzKXgNt7REkby7eiGcX_EsQ8785eYmovMl9CqCElk9a_xeoHWhd8xeMfozYQk8glbcbZkNDjCMY_jbpPkczDqRgohzAA9rYB1uVlCBI6ArLeCY6bMKF8" 
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="font-bold font-label text-secondary uppercase tracking-[0.5em] text-sm mb-6 block">Our Identity</span>
          <h1 className="font-headline text-5xl md:text-8xl text-white font-black leading-tight italic">
            The Spirit of <br/>Ceylon Eco Quest
          </h1>
        </div>
      </header>

      {/* Theme Section */}
      <section className="py-24 bg-surface-container-lowest px-8 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="h-1 w-12 bg-primary"></div>
              <h3 className="font-headline text-3xl font-bold text-primary italic">Ceylon</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                Representing the soul of Sri Lanka, evoking authenticity, heritage, and the island’s breathtaking natural beauty that has enchanted travelers for centuries.
              </p>
            </div>
            <div className="space-y-6">
              <div className="h-1 w-12 bg-secondary"></div>
              <h3 className="font-headline text-3xl font-bold text-primary italic">Eco</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                Our commitment to ecology and sustainability. We emphasize respect for nature through mindful exploration and eco-friendly travel practices.
              </p>
            </div>
            <div className="space-y-6">
              <div className="h-1 w-12 bg-primary"></div>
              <h3 className="font-headline text-3xl font-bold text-primary italic">Quest</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                An adventure designed to discover the environment intimately. We don't just show you places; we guide you through transformative experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background px-8 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-surface-container">
              <img 
                alt="Sri Lankan Nature" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApm3nVk5EriW5URwWayxu7XmUHeQNxsWdL0i6eGKv36S7jVeMcbG5wgdVWOkWvsfPx0G7Za0uB5krWdSm9vnFSk-LdXkQVog6gSYt50zXUeORzkkDZ_8Jme2yjkWWXWgLuS_ZKiVF77HsBkY1swyFhqztHerBzCUMIpSv5DSzv2cneyGnQIlimzYacefWRXKqVUQ5QUW5qJ97NDZEM7-l2KpxVQ9nUCfWGc70VkigItuiVxwI5P6VpFBsrLwaAzkfnYkw35PRFRDA" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-2xl -z-0 hidden lg:block"></div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="font-bold font-label text-primary tracking-widest uppercase text-xs">Our Commitment</span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight font-bold">A Mindful Exploration Where Adventure Meets Nature</h2>
            </div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-body">
              <p>
                At Ceylon Eco Quest, we bridge the gap between global explorers and the hidden gems of Sri Lanka. From the sun-kissed southern beaches to the misty emerald peaks of the central highlands, we curate safe, meaningful experiences that resonate with the heart of the traveler.
              </p>
              <p>
                Our core values are rooted in deep environmental sustainability. We are dedicated to reducing the footprint of tourism by empowering local communities and protecting the fragile ecosystems that make our island a paradise. Every journey with us is a step toward a more conscious future.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary font-headline">100%</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold font-label">Eco-Friendly</span>
              </div>
              <div className="w-px h-10 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary font-headline">50+</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold font-label">Local Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break / Parallax */}
      <section className="parallax-bg relative h-[600px] flex items-center justify-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCeSqqHQ6SCKw8FyYMfYjmB6intiz3HQrZOoKUiHXQD2EDInoRrFm0WNUCBw7Z_YoZfe8Zu_B4JtOdyD32ZmJLzhkzFbpUbswMLLoIZHqim5R4BHq64fjkbNhpC8LlVmUejDgn-XbKCGFnZT6mAA0zY9U4rUKOCGQJ9mROQuSMH4MtS3XwQiI4GfExMjsU1EcO7U4XTgxwdSxdiXfG58o50aSXTtP0aBPX_USGS73vxCn3FzLP4ltOEfyWQa6de-GNBJ0fM4tIuLA')" }}>
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h2 className="font-headline text-3xl md:text-5xl text-white font-bold mb-6 italic leading-snug">
            "We believe a quest should leave you changed, not the destination."
          </h2>
        </div>
      </section>
    </main>
  );
};

export default About;
