import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 parallax-hero" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaRW3Cmc9Ng_5fdpdOeS3o6j54my6CRB1FrTrn2mYy1ccLJNYmU9hYB7p2XDsy-DKzrUWkmlonx1fp-_SRsBYMsWhh5qEsWGVtTPz8uZaykwpfu1Q2ocztnfy4y-jpow5mtaD6mSWnsXNp3JcnsETUf7mFaYoBj-ATc3MqvE_52vpZq2WWPBzeztqmY-qQl6YfFqlifZNBGRw23AxMINtiXns-Fx9y2zHYF5A8Eb8A7wH98huwujMWL-DjeLoeGx45dRWuEi0m-d8")' }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-surface z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-5xl pt-20">
          <span className="font-label text-sm uppercase tracking-[0.3em] text-secondary-fixed mb-6 block font-bold drop-shadow-md">The Art of Island Wandering</span>
          <h1 className="font-headline text-5xl md:text-8xl text-white font-black mb-6 leading-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] italic">Explore Sri Lanka</h1>
          <p className="font-body text-lg md:text-2xl text-white max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg font-medium">
            An eco-friendly journey of adventure and discovery across the natural and cultural wonders of Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/destinations" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-md font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 min-w-[220px]">
              <span className="material-symbols-outlined">explore</span>
              Explore Destinations
            </Link>
            <Link to="/about" className="bg-surface-container-highest text-primary px-10 py-4 rounded-md font-bold hover:bg-surface-dim transition-all flex items-center justify-center gap-2 min-w-[220px]">
              <span className="material-symbols-outlined">info</span>
              Learn About Us
            </Link>
          </div>
        </div>
      </header>

      {/* Minimalist Scrolling Track Section */}
      <section className="bg-primary py-8 overflow-hidden relative z-30">
        <div className="animate-scroll-x flex items-center gap-12 whitespace-nowrap">
          <div className="flex items-center gap-12 text-white/90 font-headline text-2xl md:text-3xl font-light tracking-widest uppercase italic border-r-0">
            <span>Eco-friendly</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Adventures Journey</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Cultural Wonders</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Natural Beauty</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Mindful Exploration</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Historic Destinations</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
          </div>
          <div className="flex items-center gap-12 text-white/90 font-headline text-2xl md:text-3xl font-light tracking-widest uppercase italic pr-12">
            <span>Eco-friendly</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Adventures Journey</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Cultural Wonders</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Natural Beauty</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Mindful Exploration</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Historic Destinations</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
          </div>
        </div>
      </section>

      {/* Asymmetric Storytelling Section: History */}
      <section className="relative bg-surface-container-low py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-primary/5 to-primary/20 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl"></div>
            <img 
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-3c71bLSaVcFNXqSCq0DedQZFzvpNiSpExeFVsXKzQT3puRV1At5B1UI1OuUc6-W5gOZ6fpAaTR29q17LmXpjPN3mC77nl3biSsPfCKAD3snNwLGTWOwtbteZLC7cUzrrIJEhtHVUiCTqP-eGJsgQFV4OwZmjEGZROXaUZ2p1xBo70zI3VLmzMPSVl0rQ2J7JT-HE19HYzVALBOWV5vCXM8c5XkV1-ivRSUumocJOqwc3thOdOH5QySttNUvQxgP8eFbpNXUh3O4" 
              alt="Ancient stone temple ruins at sunrise" 
            />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
          </div>
          <div className="lg:col-span-5 space-y-8 pl-0 lg:pl-16">
            <span className="font-label text-xs font-extrabold text-primary tracking-widest uppercase">Sri Lankan history</span>
            <h2 className="font-headline text-5xl md:text-6xl font-bold leading-tight">Where Legends Still Whisper</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We believe exploration should be a dialogue between the traveler and the environment. Our "Quest" model ensures that 15% of every booking goes directly to coral restoration and elephant corridor protection.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Heritage Section */}
      <section className="relative bg-surface py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-container/20 via-primary/10 to-primary/25 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1 pr-0 lg:pr-16">
            <span className="font-label text-xs font-extrabold text-primary tracking-widest uppercase">Culture & Heritage</span>
            <h2 className="font-headline text-5xl md:text-6xl font-bold leading-tight">Soul of the Island</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Immerse yourself in the vibrant traditions and deep-rooted spiritual heritage that define the Sri Lankan identity. From the rhythmic beats of traditional drums to the kaleidoscope of colors in our festivals, experience the island's living legacy.
            </p>
          </div>
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/25 rounded-full blur-3xl"></div>
            <img 
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq4S-A9R2lXz-L8vE6W9t_n5R2QW0Y5-X8t3T1Z2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8" 
              alt="Traditional Kandyan dancers" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZ_v6Qh0p4oYj0jM4C8r1fB6l9z8h7g6f5d4s3a2q1w0e9r8t7y6u5i4o3p2l1k0j9')", backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-secondary-container/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Government & Politics Section */}
      <section className="relative bg-surface-container-low py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/5 to-secondary-container/25 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl"></div>
            <img 
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0v1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3" 
              alt="The Old Parliament Building" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9w8v7r6e5t4y3u2i1o0p9l8k7j6h5g4f3d2s1a0q9w8e7r6t5y4u3i2o1')", backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/35 rounded-full blur-3xl"></div>
          </div>
          <div className="lg:col-span-5 space-y-8 pl-0 lg:pl-16">
            <span className="font-label text-xs font-extrabold text-primary tracking-widest uppercase">Government & Politics</span>
            <h2 className="font-headline text-5xl md:text-6xl font-bold leading-tight">Voices that Shape the Nation</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Discover the evolution of the island's governance, from the ancient royal lineages that ruled for millennia to the contemporary democratic landscape. Explore the landmarks that stand as testaments to our political journey and the voices that continue to shape our future.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
