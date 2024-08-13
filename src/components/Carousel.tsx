import React, { useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Icon, IconNames } from './Icon';

type PropType = {
  slides: IconNames[];
  options?: EmblaOptionsType;
};

export const Carousel: React.FC<PropType> = props => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, ...options }, // Enable infinite looping
    [
      AutoScroll({
        playOnInit: true,
        speed: 3,
      }),
    ], // AutoScroll plays on init
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(); // Reinitialize the carousel if the slides change
    }
  }, [emblaApi, slides]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="mx-5 rounded-lg bg-[var(--secondary-blue)] p-7"
            >
              <Icon name={slide} size={70} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
