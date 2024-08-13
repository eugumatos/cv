import { Roboto, Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

import { Close } from '@/assets/icons/close';

import { Icon, IconNames } from '../Icon';

type ModalProps = {
  isOpen: boolean;

  title: string;
  desc: string;
  date: string;
  techs: IconNames[];

  onClose?: () => void;
};

const roboto = Roboto({ subsets: ['latin'], weight: '500' });
const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });

export function Modal({
  isOpen,
  onClose,
  title,
  desc,
  date,
  techs,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div>
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="w-1/2 rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2
                    className={`text-2xl font-bold text-[var(--primary-blue)] ${roboto.className}`}
                  >
                    {title}
                  </h2>
                  <span
                    className={`text-md text-gray-500 ${montserrat.className}`}
                  >
                    {date}
                  </span>
                </div>
                <button className="bg-transparent" onClick={onClose}>
                  <Close width={20} height={20} />
                </button>
              </div>
              <p className={`mb-4 text-gray-600 ${montserrat.className}`}>
                {desc}
              </p>

              <div className="flex justify-end gap-3">
                {techs.map((tech, key) => (
                  <Icon key={key} name={tech} size={40} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
