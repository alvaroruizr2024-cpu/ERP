import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SumaERP - Sistema Integrado</title>
        <meta name="description" content="Sistema ERP integrado para gestión empresarial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          maxWidth: '600px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}>
            🚀 SumaERP
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '2rem'
          }}>
            Sistema Integrado de Gestión Empresarial
          </p>
          <div style={{
            background: '#f0f0f0',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ color: '#333', marginBottom: '0.5rem' }}>
              ✅ Despliegue exitoso en Vercel
            </p>
            <p style={{ color: '#333', marginBottom: '0.5rem' }}>
              ✅ Next.js configurado correctamente
            </p>
            <p style={{ color: '#333' }}>
              ✅ Listo para integrar componentes
            </p>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>
            Desarrollado en Trujillo, Perú 🇵🇪
          </p>
        </div>
      </main>
    </>
  )
}
