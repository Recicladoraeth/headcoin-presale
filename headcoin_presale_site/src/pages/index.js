import { useState } from 'react';
import Image from 'next/image';

const content = {
  pt: {
    title: 'Bem-vindo à pré-venda da HeadCoin',
    subtitle: 'Conectando educação, recompensa, comunidade e sustentabilidade.',
    button: 'Comprar com USDT/USDC (Em breve)',
    description: '🌱 A HeadCoin é mais do que uma criptomoeda — é um movimento! Junte-se à revolução sustentável com os personagens da coleção MINDS BR e nossa missão Web3.',
    footer: '© 2025 Recycle Minds – Projeto educacional, ecológico e descentralizado 🌱'
  },
  en: {
    title: 'Welcome to the HeadCoin Pre-Sale',
    subtitle: 'Connecting education, rewards, community, and sustainability.',
    button: 'Buy with USDT/USDC (Coming soon)',
    description: '🌱 HeadCoin is more than a cryptocurrency — it’s a movement! Join the sustainable revolution with characters from the MINDS BR collection and our Web3 mission.',
    footer: '© 2025 Recycle Minds – Educational, ecological and decentralized project 🌱'
  }
};

export default function Home() {
  const [lang, setLang] = useState('pt');
  const t = content[lang];

  return (
    <main className="min-h-screen bg-gradient-to-br from-lime-50 to-green-100 p-6 text-gray-800">
      <header className="flex justify-end space-x-4">
        <button onClick={() => setLang('pt')} className={lang === 'pt' ? 'font-bold' : ''}>🇧🇷</button>
        <button onClick={() => setLang('en')} className={lang === 'en' ? 'font-bold' : ''}>🇺🇸</button>
      </header>

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-800">{t.title}</h1>
        <p className="text-lg text-green-700">{t.subtitle}</p>
        <div className="mt-6">
          <Image src="/Coin-green-front.png" alt="HeadCoin" width={150} height={150} className="mx-auto" />
          <p className="mt-4 font-semibold">{t.button}</p>
          <button disabled className="mt-2 bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed">
            {t.button}
          </button>
        </div>
        <p className="mt-6 text-green-800 max-w-lg mx-auto">{t.description}</p>
      </section>

      <footer className="text-center border-t pt-6 text-green-900">
        <p className="text-sm">{t.footer}</p>
      </footer>
    </main>
  );
}