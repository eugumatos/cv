import { useState } from 'react';
import { Roboto, Montserrat } from 'next/font/google';
import Image from 'next/image';
import { MaskImage } from '@/assets/icons/mask-image';

import { Header } from '@/components/Header';
import { Modal } from '@/components/Journey/Modal';
import { Card } from '@/components/Journey/Card';
import { StickySection } from '@/components/StickySection';
import { Carousel } from '@/components/Carousel';

import { Journey, journeyData } from '@/data/journeyData';
import { slidesData } from '@/data/slidesData';
import { Icon } from '@/components/Icon';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500'] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedJourney, setSelectedJourney] = useState<Journey | null>(null);

  return (
    <main className="relative h-screen">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <MaskImage />
      </div>

      <Header />

      <StickySection>
        <section className="relative mx-auto max-w-screen-xl">
          <div className="flex h-screen flex-col items-center justify-center gap-6 text-center">
            <span
              className={`text-md rounded-full bg-[#7087fe] px-6 py-2 font-medium text-white ${montserrat.className}`}
            >
              Gustavo Matos
            </span>
            <h1
              className={`text-4xl font-medium text-white sm:text-6xl md:text-7xl ${roboto.className}`}
            >
              Frontend Developer
            </h1>

            <p
              className={`text-center font-medium text-white sm:text-lg md:text-xl ${montserrat.className}`}
            >
              I'm a Frontend Developer specialized in crafting Websites, <br />{' '}
              Web Applications and PWAs with a keen eye for details and
              aesthetics
            </p>
          </div>
        </section>
      </StickySection>

      <StickySection>
        <section className="mx-auto h-full max-w-screen-2xl px-4 pb-40">
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journeyData.map(journey => (
              <Card
                key={journey.id}
                title={journey.title}
                src={journey.src}
                role={journey.role}
                onTap={() => {
                  setSelectedJourney(journey);
                  setIsOpen(true);
                }}
              />
            ))}
          </div>

          {selectedJourney && (
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title={selectedJourney.title}
              date={selectedJourney.date}
              desc={selectedJourney.desc}
              techs={selectedJourney.techs}
            />
          )}
        </section>
      </StickySection>

      <StickySection>
        <section className="max-w-screen mx-auto pb-40">
          <div className="mx-auto max-w-screen-xl border-t-2">
            <h1 className={`mt-5 text-2xl text-white ${roboto.className}`}>
              Skills, tools and technologies
            </h1>
          </div>

          <div className="mt-16">
            <Carousel slides={slidesData} />
          </div>
        </section>
      </StickySection>

      <footer className="flex items-center justify-between p-6">
        <span className={`text-md text-white ${montserrat.className}`}>
          @2024 - Gustavo Matos
        </span>

        <nav className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/gustavo-andrade-matos/"
            target="blank"
          >
            <button
              className={`text-md rounded-full px-10 py-2 font-medium text-white hover:bg-[var(--secondary-blue)] ${montserrat.className}`}
            >
              Linkedin
            </button>
          </a>
          <a href="https://www.instagram.com/eugumatos/" target="blank">
            <button
              className={`text-md rounded-full px-10 py-2 font-medium text-white hover:bg-[var(--secondary-blue)] ${montserrat.className}`}
            >
              Instagram
            </button>
          </a>
          <a href="https://github.com/eugumatos" target="blank">
            <button
              className={`text-md rounded-full px-10 py-2 font-medium text-white hover:bg-[var(--secondary-blue)] ${montserrat.className}`}
            >
              GitHub
            </button>
          </a>
        </nav>

        <div className="flex gap-2">
          <span className={`text-md text-white ${montserrat.className}`}>
            Deployed with Vercel
          </span>
          <Icon name="vercel" size={20} />
        </div>
      </footer>
    </main>
  );
}
