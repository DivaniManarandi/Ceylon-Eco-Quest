import { Link } from 'react-router-dom';
import { useState } from 'react';

const Destinations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed headers if any
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scenicLocations = [
    {
      id: 'nuwara-eliya',
      name: 'Nuwara Eliya',
      longDesc: 'The charming hill city located in the Central highlands of Sri Lanka, known as "Little England." Having a cool climate, misty mountains, and tea plantations, with a rich colonial heritage.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBanW6tJL-27yIw2L2TK1MlIVEP2tpIUVCcuU4Dy0fNjgFJSV8D0XcnxL2HQZ9hlkYkZ2kEw2MWNvJIhDoiKUtZYQuBhRLzIpLvYPWMvWkaArzUZgxm8LqoJ8keiuRmngSHo1FGxMiOiG566oI9SGytaJ4a_iBU2PB__x38_TT0Y-c_gv2WALmvhrRwfLidnxV0yl1HMOcJIOMxQ99FZ1TbCNZEpbs1Wv6dgVEG3qyN_isRQARr28g6ZaMoH2CKpQsjaoYotddzyPw',
      details: [
        {
          title: 'Location & Geography',
          content: 'Located in the Central Province of Sri Lanka, about 170 km from Colombo, surrounded by lush mountains, valleys, waterfalls, and rivers. Being around an altitude of 1,868 m (6,128 feet) above sea level, it offers a refreshing escape from the tropical heat.'
        },
        {
          title: 'Climate',
          content: 'Cool climate throughout the year with average temperatures around 15°C–20°C. Frequently mist, fog, and rainfall occur. The dry season from March to May is the best time to visit for those familiar with moderate temperatures.'
        },
        {
          title: 'History & Heritage',
          content: 'Developed by the British in the 19th century as a hill station. It has a strong influence of English culture and architecture, featuring Tudor-style houses, golf courses, and landscaped gardens.'
        },
        {
          title: 'Culture',
          content: 'A blend of Sri Lankan tradition and British colonial lifestyle. Culture plays a key role in attractions, with horse races, flower shows, and motor racing.'
        }
      ],
      teaSection: {
        title: 'Champagne of Ceylon Tea',
        description: 'Nuwara Eliya is one of the most famous tea-growing regions in Sri Lanka. Its high altitude, cool climate, and misty environment make it ideal for producing some of the finest and lightest tea in the world.',
        history: 'Tea was introduced to Sri Lanka by British planter James Taylor in the 1860s. After coffee plantations were destroyed by disease, tea became the main crop, and many colonial-era factories are still in operation today.',
        characteristics: 'A light, fragrant, and delicately floral aroma. It shows a pale golden color and produces a fresh, brisk taste with a hint of fruitiness.',
        estates: [
          { name: 'Pedro Tea Estate', info: "Includes the Lover's Leap Factory, which offers guided tours and tea tastings." },
          { name: 'Blue Field Tea Gardens', info: 'Popular among visitors for tea demonstrations and scenic views.' },
          { name: 'Mackwoods Labookellie', info: 'A historic plantation with a tea center and café.' },
          { name: 'Damro Tea Estate', info: 'One of the largest producers, featuring a beautiful visitor center.' }
        ]
      }
    },
    {
      id: 'sigiriya',
      name: 'Knuckles mountain',
      longDesc: 'The Sigiriya Rock which is a UNESCO World Heritage Site and one of most iconic tourist attractions. It was built in the 5th century CE by king Kashyapa as a royal palace and stronghold. The site is renowned for its massive rock column rising about 200 meters high surrounded by landscapes gardens, water features and frescoes.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0v1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3'
    },
    {
      id: 'ella',
      name: 'Ella Highlands',
      longDesc: 'Ella Highlands is one of the most scenic and peaceful regions in Sri Lanka, located in the central hill country of Uva Province. It is famous for its breathtaking mountain landscapes, lush tea plantations, and cool climate.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0D2dEXKb_32XmIyiXqH6wxR8mfi6WptFCeGi13xX12lbM6eOJhLw0N6lROF87LNEX1mWVXAQWMqt6MClD5Gylxobj9yFm8bY4Q7OJkkWoD7N5Qvr7mkFSHw503VPfDSQ7vBiPzlQ2yE5JSRJTM6LAdhAWueeEiTQDJWaVsjkhDPT1BQjOu1hRHehZhB-gkD_rNMRq05UUI7sCyztgOhyubEQXgfHmriZ5i03OguMkYK7ebX2j9l2NGW295gja3Iwuk4jsqaoHgls',
      details: [
        {
          title: 'Geography & Atmosphere',
          content: 'Ella sits at an elevation of around 1,041 meters, offering a refreshing highland atmosphere about 200 km east of Colombo. It is surrounded by misty mountains, valleys, and cloud forests, with the iconic Ella Gap providing views across the southern plains.'
        },
        {
          title: 'Natural Splendor',
          content: 'The area is a perfect blend of nature and adventure, featuring dramatic rolling tea plantations, dense green forests, and cascading waterfalls like the wide Ravana Falls. Trails here offer some of the most beautiful panoramic mountain views on the island.'
        },
        {
          title: 'Climate & Best Time',
          content: 'Ella enjoys a mild and pleasant climate year-round, with average temperatures between 20–25°C. For the best hiking conditions and clear blue skies, plan your visit between January and April.'
        },
        {
          title: 'Landmarks & Iconic Trails',
          content: "Home to the Nine Arches Bridge—a jungle-shrouded marvel of railway engineering. For hikers, Little Adam’s Peak offers stunning sunrise views, while Ella Rock provides a more challenging trek for those seeking high-altitude thrill."
        }
      ],
      teaSection: {
        title: 'The Hill Country Tea Culture',
        description: 'Ella is one of the famous tea heartlands of Sri Lanka, known for its high-quality production and some of the most scenic estates in the country.',
        history: 'Visitors can tour historic tea factories to learn about the intricate processing of Ceylon tea, from plucking to the final brew, all set against the backdrop of vibrant green terraced hills.',
        characteristics: 'The tea grown here benefits from the unique elevation and mist, resulting in a distinct flavor profile that travelers can experience firsthand in local cafés and estate centers.',
        estates: [
          { name: 'Kandy-to-Ella Train', info: 'Considered one of the most beautiful train journeys in the world, passing through endless tea estates.' },
          { name: 'Ravana Falls', info: 'One of the widest waterfalls in Sri Lanka, located just a short distance from the main tea trails.' }
        ]
      }
    }
  ];

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
          <span className="font-label text-sm font-bold uppercase tracking-[0.3em] text-secondary-fixed mb-4 block">The Ceylon Awaits for You</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight italic font-headline">Unveil the Soul of Ceylon</h1>
          <p className="text-sm md:text-base text-white/70 font-body max-w-xl mx-auto mb-8 leading-relaxed italic tracking-wide">
            Where one experiences a sense of freedom, deep peace, and a connection to a larger, divine, or universal consciousness.
          </p>
          <p className="text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto leading-relaxed">
            From mist-shrouded highlands to the sapphire embrace of the Indian Ocean,by exploring through our hand-picked eco-destinations.
          </p>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="max-w-5xl mx-auto bg-surface-container-lowest p-4 md:p-6 rounded-full shadow-xl shadow-primary/5 flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 flex-col sm:flex-row">

            <button onClick={() => scrollToSection('nature')} className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">forest</span> Nature
            </button>
            <button onClick={() => scrollToSection('culture')} className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">temple_hindu</span> Culture
            </button>
            <button onClick={() => scrollToSection('coast')} className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">waves</span> Coast
            </button>
            <button onClick={() => scrollToSection('wildlife')} className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">pets</span> Wildlife
            </button>
            <button onClick={() => scrollToSection('adventure')} className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">hiking</span> Adventure
            </button>
          </div>
        </div>
      </section>

      {/* Destination Grid Section 01: Nature */}
      <section id="nature" className="py-24 px-6 max-w-screen-2xl mx-auto border-b border-outline-variant/10">
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="font-label text-xs font-bold text-secondary uppercase tracking-[0.5em] mb-6 block">nature & scenic</span>
              <h2 className="text-5xl md:text-7xl font-bold font-headline text-primary leading-tight">Nature & Scenic<br />Destinations</h2>
            </div>
            <div className="lg:col-span-7 pt-4 lg:pt-16">
              <div className="relative pl-0 md:pl-12">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-secondary/30 hidden md:block"></div>
                <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-body italic">
                  "Sri Lanka is renowned for its breathtaking natural landscapes and scenic beauty, making it one of the most attractive destinations for nature lovers. This small island offers an incredible variety of environments—from misty mountains and lush forests to flowing waterfalls, rolling tea plantations, and diverse wildlife habitats."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {scenicLocations.map((location) => (
            <div key={location.id} className="group cursor-pointer" onClick={() => setSelectedLocation(location)}>
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={location.image}
                  alt={location.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-2xl font-headline font-bold mb-1">{location.name}</h3>
                </div>
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined">zoom_in</span>
                  </div>
                </div>
              </div>
              <div>
                {/* <p className="text-on-surface-variant line-clamp-2">{location.shortDesc}</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax Divider 1: Culture */}
      <section id="culture" className="parallax-section relative flex items-center justify-center h-[300px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkPFIcJgSoeAMOAlX65kImuY2upOZOBrQeK6Je2zUvyH5FrhUxqHaEkU7t5cR-hgsM1IE4w_wMjYbsWgg_kZ6sCBmLM37fudXDTyT14i0TfpihO3A0vYrSOAjFwn0saOjRRrmIk6_1liLDsR5Q8fOnA-cHXrFl03Y0milh7SC5BGSX7SRYWL4rLPpKMs05873B6vSF8774JfNCfzk1nbVA4sKEEmKJrl2Hpq_26BiUQzCp_6YWzMayg0MuoawmlWYz8K4WD171E_g")' }}>
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

      {/* Parallax Divider 2: Coast */}
      <section id="coast" className="parallax-section relative flex items-center justify-center h-[300px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKtllothzxfhLXMeVVgV6hF_X6dPMvRH5FQpPxd0fea4OCY2c5-m5jMkgs4NmAFIxI4kNlk30uPKvK_bErT6XcdIvsPmtDmFMzcM5taceA-bH6UUCfJSZRB4mRSUYlEwxyrQamCdwnCQcyBrTOyVg6CQcCDdeGKcd5r1RYLa8axzDoWeP8ZH2Y2CLjQ46d-Ddske5s4cdVpEgsSd9d6K8tpeaujC6DM0yrlDDhyLur4zB2hnGw-fm4QG0n5-UTejxvztcD2AzCOfA")' }}>
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
              <hr className="border-outline-variant/30 mb-6" />
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
              <hr className="border-outline-variant/30 mb-6" />
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
              <hr className="border-outline-variant/30 mb-6" />
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

      {/* Parallax Divider 3: Wildlife */}
      <section id="wildlife" className="parallax-section relative flex items-center justify-center h-[300px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9S8t7u6v5w4x3y2z1a0b9c8d7e6f5g4h3i2j1k0l9m8n7o6p5q4r3s2t1u0v9w8x7y6z5a4b3c2d1e0f9g8h7i6j5k4l3m2n1o0p9q8r7s6t5u4v3w2x1y0z")' }}>
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white italic mb-6">The Wild Roar</h2>
          <p className="text-white/90 text-lg">Venture into the untamed heart of the jungle where the kings roam free and the wilderness speaks.</p>
        </div>
      </section>

      {/* Destination Grid Section 04: Wildlife */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <span className="font-label text-sm font-bold text-secondary uppercase tracking-widest mb-2 block">wildlife & national parks</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-8 leading-tight">Untamed Spirits & Jungle Legends</h2>
              <p className="text-on-surface-variant mb-10 leading-relaxed">
                From the elusive leopards of Yala to the giant tuskers of Udawalawe, Sri Lanka’s national parks are sanctuaries of life that have remained unchanged for centuries.
              </p>
              <button className="group flex items-center gap-4 text-primary font-bold transition-all hover:text-primary-container">
                Explore Safari Maps
                <span className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-surface-container-lowest transition-all">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </span>
              </button>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Wildlife Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <img
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTN8uD7H6Z5g4B3V2C1A-S8q9r9t8u7v6w5x4y3z2a1b0c9d8e7f6g5h4i3j2k1l0m9n8o7p6q5r4s3t2u1v0w9x8y7z6a5b4c3d2e1f0"
                  alt="Yala Leopards"
                />
                <h4 className="text-xl font-headline font-bold text-primary mb-2">Yala Sanctuary</h4>
                <p className="text-sm text-on-surface-variant">The world's highest density of leopards and a diverse ecosystem of coastal brush and monsoon forests.</p>
              </div>
              {/* Wildlife Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 md:mt-12 hover:-translate-y-2">
                <img
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT-Z2y1x0w9v8u7t6s5r4q3p2o1n0m9l8k7j6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t0"
                  alt="Udawalawe Elephants"
                />
                <h4 className="text-xl font-headline font-bold text-primary mb-2">Udawalawe Plains</h4>
                <p className="text-sm text-on-surface-variant">Gatherings of wild elephants that roam the vast plains against the backdrop of the highland mountains.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Divider 4: Adventure */}
      <section id="adventure" className="parallax-section relative flex items-center justify-center h-[300px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTb9a8c7d6e5f4g3h2i1j0k9l8m7n6o5p4r3s2t1u0v9w8x7y6z5a4b3c2d1e0f9g8")' }}>
        <div className="absolute inset-0 bg-primary/30 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white italic mb-6">Adrenaline Peaks</h2>
          <p className="text-white/90 text-lg">Conquer the rapids, scale the hidden peaks, and find your edge in the island's most rugged terrains.</p>
        </div>
      </section>

      {/* Destination Grid Section 05: Adventure */}
      <section className="py-24 px-6 max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label text-sm font-bold text-secondary uppercase tracking-widest mb-2 block">Thrill & Discovery</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary italic">The Adventure Frontier</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adventure Card 1: Kitulgala */}
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT-X9y8z7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g0f9e8d7c6b5a4z3y2x1w0v9"
                alt="Kitulgala Rafting"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-black text-secondary tracking-widest uppercase mb-4 block">Water Quest</span>
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Kitulgala Rapids</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">White-water rafting and canyoning through the Kelani River in a lush tropical rainforest setting.</p>
              <hr className="border-outline-variant/30 mb-6" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary/60 uppercase">High Intensity</span>
              </div>
            </div>
          </div>
          {/* Adventure Card 2: Belihuloya */}
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTe3d2c1b0a9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4"
                alt="Belihuloya Adventure"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-black text-secondary tracking-widest uppercase mb-4 block">Nature Quest</span>
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Belihuloya</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Canoeing on the Samanalawewa reservoir and trekking through multiple eco-zones at the edge of the highlands.</p>
              <hr className="border-outline-variant/30 mb-6" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary/60 uppercase">Exploration</span>
              </div>
            </div>
          </div>
          {/* Adventure Card 3: Meemure */}
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTf7g6h5i4j3k2l1m0n9o8p7q6r5s4t3u2v1w0x9y8z7a6b5c4d3e2f1g"
                alt="Meemure Village"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-black text-secondary tracking-widest uppercase mb-4 block">Remote Quest</span>
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Hidden Meemure</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Sri Lanka’s most remote village, offering untouched mountain hikes and stream sliding in natural pools.</p>
              <hr className="border-outline-variant/30 mb-6" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary/60 uppercase">Soul Quest</span>
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

      {/* Details Popup Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" onClick={() => setSelectedLocation(null)}></div>
          <div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur rounded-full text-white flex items-center justify-center hover:bg-black/50 z-20 transition-all font-bold"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="relative h-64 md:h-80 w-full">
              <img src={selectedLocation.image} alt={selectedLocation.name} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
            </div>
            <div className="p-8 -mt-16 relative z-10">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-primary mb-8">{selectedLocation.name}</h2>

              <div className="max-w-none">
                <p className="text-on-surface-variant text-xl leading-relaxed mb-12 font-medium italic border-l-4 border-secondary pl-6">
                  {selectedLocation.longDesc}
                </p>

                {selectedLocation.details && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {selectedLocation.details.map((section, idx) => (
                      <div key={idx} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                        <h4 className="font-headline font-bold text-primary mb-3 uppercase tracking-wider text-sm">{section.title}</h4>
                        <p className="text-on-surface-variant text-base leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">{section.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {selectedLocation.teaSection && (
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="material-symbols-outlined text-primary text-3xl">local_cafe</span>
                      <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary">{selectedLocation.teaSection.title}</h3>
                    </div>
                    <p className="text-on-surface-variant mb-8 text-lg font-medium leading-relaxed">{selectedLocation.teaSection.description}</p>

                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-widest">History</h4>
                          <p className="text-on-surface-variant text-sm leading-relaxed">{selectedLocation.teaSection.history}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-widest">Profile</h4>
                          <p className="text-on-surface-variant text-sm leading-relaxed">{selectedLocation.teaSection.characteristics}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-primary mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                          Key Estates & Factories
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedLocation.teaSection.estates.map((estate, idx) => (
                            <div key={idx} className="bg-white/80 p-4 rounded-lg border border-primary/10 shadow-sm">
                              <span className="block font-bold text-primary text-sm mb-1">{estate.name}</span>
                              <span className="text-xs text-on-surface-variant leading-tight">{estate.info}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}


              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Destinations;
