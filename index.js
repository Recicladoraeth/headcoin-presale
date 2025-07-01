import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '2rem' }}>
      <Head>
        <title>HeadCoin Presale</title>
        <meta name="description" content="Join the presale of HeadCoin, the sustainable crypto movement" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src="/headcoin.png" alt="HeadCoin Logo" width={120} height={120} />
        <h1>Presale HeadCoin</h1>
        <p><strong>🌱 Embarque na revolução cripto sustentável</strong></p>
        <p>🌍 Join the sustainable crypto revolution</p>

        <Link href="https://buy.headcoin" legacyBehavior>
          <a style={{ 
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#00a86b',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none'
          }}>Comprar HEAD / Buy HEAD</a>
        </Link>

        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
          🔄 Cada transação ajuda projetos de reciclagem reais.<br />
          ♻️ Every transaction supports real recycling projects.
        </p>
      </main>
    </div>
  );
}
