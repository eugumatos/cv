import Image from 'next/image';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

type CardProps = {
  src: string;
  title: string;
  role?: string;

  onTap?: () => void;
};
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500'] });

export function Card({ onTap, src, title, role }: CardProps) {
  return (
    <motion.div
      onTap={onTap}
      whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
      className="cursor-pointer rounded-lg p-7 hover:bg-[var(--secondary-blue)]"
    >
      <div className="relative h-60 w-full">
        <Image
          alt={title}
          className="rounded-lg"
          src={src}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="mt-5">
        <h2
          className={`text-xl font-medium text-white ${montserrat.className}`}
        >
          {title}
        </h2>
        {role && (
          <span className={`text-md text-white ${montserrat.className}`}>
            {role}
          </span>
        )}
      </div>
    </motion.div>
  );
}
