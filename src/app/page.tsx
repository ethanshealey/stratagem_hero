import Header from '@/components/Header'
import Option from '@/components/Option'

export default function Home() {
  return (
    <main id="home-page">
      <Header />
      <div id="home-page-content">
        <div id="home-page-title">
          <h1>Welcome to Stratagem Trainer</h1>
          <p>Pick an option below to play</p>
        </div>
        
        <Option name={'Practice'} path={'/practice'} />
        <Option name={'By Category'} path={'/category'} />
        <Option name={'Classic'} path={'/classic'} />

      </div>
    </main>
  )
}
