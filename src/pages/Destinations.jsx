import { Link } from 'react-router-dom';

const Destinations = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBanW6tJL-27yIw2L2TK1MlIVEP2tpIUVCcuU4Dy0fNjgFJSV8D0XcnxL2HQZ9hlkYkZ2kEw2MWNvJIhDoiKUtZYQuBhRLzIpLvYPWMvWkaArzUZgxm8LqoJ8keiuRmngSHo1FGxMiOiG566oI9SGytaJ4a_iBU2PB__x38_TT0Y-c_gv2WALmvhrRwfLidnxV0yl1HMOcJIOMxQ99FZ1TbCNZEpbs1Wv6dgVEG3qyN_isRQARr28g6ZaMoH2CKpQsjaoYotddzyPw" 
            alt="Wide cinematic shot of misty Sri Lankan tea plantations" 
          />
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl pt-16">
          <span className="font-label text-sm font-bold uppercase tracking-[0.3em] text-secondary-fixed mb-4 block">The Expedition awaits</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight italic font-headline">Unveil the Soul of Ceylon</h1>
          <p className="text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto leading-relaxed">
            From the mist-shrouded highlands to the sapphire embrace of the Indian Ocean, curate your journey through our handpicked eco-destinations.
          </p>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="max-w-5xl mx-auto bg-surface-container-lowest p-4 md:p-6 rounded-full shadow-xl shadow-primary/5 flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 flex-col sm:flex-row">
            <button className="font-headline px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container font-bold text-sm border border-transparent hover:border-primary/20 transition-all">All Expeditions</button>
            <button className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">temple_hindu</span> Culture
            </button>
            <button className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">forest</span> Nature
            </button>
            <button className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">hiking</span> Adventure
            </button>
            <button className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">pets</span> Wildlife
            </button>
            <button className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">waves</span> Coast
            </button>
          </div>
        </div>
      </section>

      {/* Destination Grid Section 01: Nature */}
      <section className="py-24 px-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-label text-sm font-bold text-secondary uppercase tracking-widest mb-2 block">nature & scenic</span>
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">The Scenic Serenity</h2>
          </div>
          <p className="text-on-surface-variant max-w-sm italic">
            Lose yourself in the biodiversity hotspots where the wild things are still truly wild.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Feature Card */}
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBanW6tJL-27yIw2L2TK1MlIVEP2tpIUVCcuU4Dy0fNjgFJSV8D0XcnxL2HQZ9hlkYkZ2kEw2MWNvJIhDoiKUtZYQuBhRLzIpLvYPWMvWkaArzUZgxm8LqoJ8keiuRmngSHo1FGxMiOiG566oI9SGytaJ4a_iBU2PB__x38_TT0Y-c_gv2WALmvhrRwfLidnxV0yl1HMOcJIOMxQ99FZ1TbCNZEpbs1Wv6dgVEG3qyN_isRQARr28g6ZaMoH2CKpQsjaoYotddzyPw" 
                alt="Nuwara Eliya" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-secondary-container/90 text-on-secondary-container px-3 py-1 rounded text-xs font-black uppercase">Hill Country</span>
                  <span className="text-xs font-medium bg-white/20 backdrop-blur px-3 py-1 rounded uppercase tracking-tighter">7 Days</span>
                </div>
                <h3 className="text-3xl font-headline font-bold mb-2">Nuwara Eliya</h3>
                <p className="text-white/80 max-w-md text-sm leading-relaxed">Discover the "Little England" of Sri Lanka. Wander through emerald-green tea estates, colonial-era architecture, and mist-veiled mountains in the heart of the central highlands.</p>
              </div>
            </div>
          </div>
          {/* Small Card 1 */}
          <div className="md:col-span-4 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl aspect-square mb-6">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0D2dEXKb_32XmIyiXqH6wxR8mfi6WptFCeGi13xX12lbM6eOJhLw0N6lROF87LNEX1mWVXAQWMqt6MClD5Gylxobj9yFm8bY4Q7OJkkWoD7N5Qvr7mkFSHw503VPfDSQ7vBiPzlQ2yE5JSRJTM6LAdhAWueeEiTQDJWaVsjkhDPT1BQjOu1hRHehZhB-gkD_rNMRq05UUI7sCyztgOhyubEQXgfHmriZ5i03OguMkYK7ebX2j9l2NGW295gja3Iwuk4jsqaoHgls" 
                alt="Ella Highlands" 
              />
              <div className="absolute top-4 right-4">
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-surface-container-lowest hover:text-primary transition-all">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">Ella Highlands</h3>
              <p className="text-on-surface-variant line-clamp-2">Mist-shrouded peaks and lush tea estates offering the most scenic hiking trails in the country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Divider 1 */}
      <section className="parallax-section relative flex items-center justify-center h-[300px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkPFIcJgSoeAMOAlX65kImuY2upOZOBrQeK6Je2zUvyH5FrhUxqHaEkU7t5cR-hgsM1IE4w_wMjYbsWgg_kZ6sCBmLM37fudXDTyT14i0TfpihO3A0vYrSOAjFwn0saOjRRrmIk6_1liLDsR5Q8fOnA-cHXrFl03Y0milh7SC5BGSX7SRYWL4rLPpKMs05873B6vSF8774JfNCfzk1nbVA4sKEEmKJrl2Hpq_26BiUQzCp_6YWzMayg0MuoawmlWYz8K4WD171E_g")' }}>
        <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white italic mb-6">The Ancient Quest</h2>
          <p className="text-white/90 text-lg">Walk through the corridors of time in cities built by kings and carved by devotion.</p>
        </div>
      </section>

      {/* Destination Grid Section 02: Culture & Heritage */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <span className="font-label text-sm font-bold text-secondary uppercase tracking-widest mb-2 block">culture & historical</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-8 leading-tight">Living History & Timeless Rituals</h2>
              <p className="text-on-surface-variant mb-10 leading-relaxed">
                Sri Lanka’s cultural triangle is a gateway to civilizations that flourished over two millennia ago. Explore the sacred ruins and vibrant traditions that still breathe today.
              </p>
              <button className="group flex items-center gap-4 text-primary font-bold transition-all hover:text-primary-container">
                View Culture Map 
                <span className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-surface-container-lowest transition-all">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </span>
              </button>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bento Item 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <img 
                  className="w-full h-64 object-cover rounded-lg mb-6" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs64lMXGAeu9psK1O3yTx8w4ZhKQb-UOhqj-uNi2ghzAwNebAylZgpWuIbril9YT0p1f937HX0jPSskthfVkRI-e7kNRJeGhGKYBZAKGLJHFOkzW1X23Atsrx0EMd-QkAWGaBjj9S2hcy31AYLKC3UohUZ4OrzgHhw0rSzlBTV1IoTU0frBrm4Y62XrYUkz7aRVNE_gyoDCDqp8p-PiMhqpBpfJa8iK-gyJzl6F9-3Nvyh-pyzL5V4yxdkm1lJDsquBSKQ3VIMJto" 
                  alt="Sacred Kandy" 
                />
                <h4 className="text-xl font-headline font-bold text-primary mb-2">Sacred Kandy</h4>
                <p className="text-sm text-on-surface-variant">Home to the relic of the tooth of Buddha and the center of Sinhalese culture.</p>
              </div>
              {/* Bento Item 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 md:mt-12 hover:-translate-y-2">
                <img 
                  className="w-full h-64 object-cover rounded-lg mb-6" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZnO3W24xItm8yBSPt6Ll2fhfjcSBr7BZQ1ELHNF0pQqTkTkCmCIDlUaKgN48rOKSLpqQvVxAExEE9EaylceaJzUiFLohrhvJOo73HLJ1-giHED1Xtj82HC5DDT8KGJ2j3e7nRGXbV24T_0R1rD8x28xe3MKBB9M3al7GAbFF35oZdo4Eff33a0R9GHdV8ALunDy7VZpNUBPNV4MeGFZvUAgjUaA90nokgEkl2kd0N9C5WwrybCnjSsqwaJo0TyE4bYZA9WyU7vFE" 
                  alt="Dambulla Caves" 
                />
                <h4 className="text-xl font-headline font-bold text-primary mb-2">Dambulla Caves</h4>
                <p className="text-sm text-on-surface-variant">A complex of five cave temples adorned with masterfully preserved frescoes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Divider 2 */}
      <section className="parallax-section relative flex items-center justify-center h-[300px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKtllothzxfhLXMeVVgV6hF_X6dPMvRH5FQpPxd0fea4OCY2c5-m5jMkgs4NmAFIxI4kNlk30uPKvK_bErT6XcdIvsPmtDmFMzcM5taceA-bH6UUCfJSZRB4mRSUYlEwxyrQamCdwnCQcyBrTOyVg6CQcCDdeGKcd5r1RYLa8axzDoWeP8ZH2Y2CLjQ46d-Ddske5s4cdVpEgsSd9d6K8tpeaujC6DM0yrlDDhyLur4zB2hnGw-fm4QG0n5-UTejxvztcD2AzCOfA")' }}>
        <div className="absolute inset-0 bg-primary/30 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white italic mb-6">Ocean Whispers</h2>
          <p className="text-white/90 text-lg">Where the golden sands meet the endless azure. Experience coastal luxury at its most organic.</p>
        </div>
      </section>

      {/* Destination Grid Section 03: Coastal */}
      <section className="py-24 px-6 max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label text-sm font-bold text-secondary uppercase tracking-widest mb-2 block">The Sapphire Coast</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary italic">Blue Horizons</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Beach Card 1 */}
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX7uMGghsY3yp8doYKgJSu5I0nyfRzHc9ydH2hP_8xlMYH-_e_BIMQJyUqr3NH5d8MBbP6GyKyo20f0_qLsZ_f2r8oKuHVV-fCcCNBSy29liUN3F7RshjNpc1HCXMQHo_ZDGktGuMRmtSGDofGR7d_kGk1VYaIX9zsQa4ECXz6rNs73NdXwE7q9atNNSf45Y37WABbZzRKSxvu6CjTxftZFdhWLuU4MtihptACVw99HixR4ciSgRi4wRwgcidzAn_oq3aKwHGA55Q" 
                alt="Mirissa Tides" 
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-secondary tracking-widest uppercase">Coastal Quest</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Mirissa Tides</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Whale watching expeditions and sunset surf sessions in the southern gem of the island.</p>
              <hr className="border-outline-variant/30 mb-6"/>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-container-high"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-dim"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-outline-variant"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Beach Card 2 */}
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiUZoG_tlHSzczOX41U-eTaOx5jJTbVU_Q9skoMc4b2H-FciengDTqp6-ypiuyGOC_Co_O0-cWYvtAlGwxCtKBi2iMRfcmvwNLvJKEeFYiFplHtV6CdOLs9Mnyr-KshrVwv5yzUM-_bUS8vZcnawRNbNItaV__trFGTCv3HYgr5nmBTDTYvq9DZ1E59JX-4Iu-D_CPs_popZDxJum-t7tzTWiubft4c0Ci2J4SKgmonFPDPO86AXYTZ7O0nUTuBjkCphVko8TSuaY" 
                alt="Unawatuna Sands" 
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-secondary tracking-widest uppercase">Historic Shores</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Unawatuna Sands</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">A crescent of golden sand and turquoise waters, perfect for relaxation and vibrant coastal life.</p>
              <hr className="border-outline-variant/30 mb-6"/>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-container-high"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-dim"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Beach Card 3 */}
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjk9tz9G5xOBLUuJN2YYViQK4VCWtYtIMT8sUPTZGNxt7LhLLyT2m-HGYB5ue8garE6nKiejuS8EHYv_lIsRFiIyeM18n8MFiHKjIzTl4SMLgizL7fgUDgowJ-PyX6w6I9FUqqypyMvflCZRXWrv7r6B-bkcbl6DAiYCfnx8vVeBKc0up54qkJbEIPZjnJsr1fD6WnRrhbKgFD6dYq357kgoohdicm2UCTdID2as8sUoKs0vhN94IXneqOZPMpC__fOKiiW0X9xGI" 
                alt="Trincomalee" 
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-secondary tracking-widest uppercase">Deep Blue</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Trincomalee</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Explore the untouched eastern shores, famous for its deep natural harbor and coral reefs.</p>
              <hr className="border-outline-variant/30 mb-6"/>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-container-high"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-dim"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-outline-variant"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-outline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-24 px-6 bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <span className="material-symbols-outlined text-[400px] leading-none select-none" style={{ fontVariationSettings: '"FILL" 1' }}>eco</span>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">Begin Your Personalized Quest</h2>
          <p className="text-primary-fixed-dim text-lg mb-12 max-w-xl mx-auto">Subscribe to receive exclusive expedition itineraries and sustainable travel tips directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 px-6 py-4 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary-fixed transition-all" 
              placeholder="Your email address" 
              type="email" 
            />
            <button className="px-8 py-4 bg-secondary-container text-on-secondary-container font-black uppercase tracking-widest rounded-md hover:bg-surface-container-lowest hover:text-primary transition-colors">
              Join Quest
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Destinations;
