export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>🚀 HeadCoin Presale</h1>
      <p>Compre sua HeadCoin com USDT ou USDC agora mesmo.</p>
      <a
        href="https://seu-endereco-de-carteira"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#0070f3",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          marginTop: "20px"
        }}
      >
        Participar da Pré-Venda
      </a>
    </div>
  );
}
