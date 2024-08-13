import { Roboto, Montserrat } from 'next/font/google';
import { Mail } from '@/assets/icons/mail';

const roboto = Roboto({ subsets: ['latin'], weight: '900' });
const montserrat = Montserrat({ subsets: ['latin'], weight: '500' });

export function Header() {
  return (
    <header className="fixed z-20 w-screen p-5 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h2 className={`text-4xl text-white ${roboto.className}`}>GM</h2>

        <nav>
          <button
            className={`text-md mr-4 flex w-72 items-center gap-2 rounded-3xl border-none bg-white px-6 py-3 text-[var(--primary-blue)] transition-all duration-300 ease-in-out hover:bg-slate-800 hover:text-white ${montserrat.className}`}
          >
            <Mail />
            guamatos@outlook.com
          </button>
        </nav>
      </div>
    </header>
  );
}
