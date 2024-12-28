import { Container } from "@/components/Container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <Hero>
            <HeroTitle>
              Unlock the power <br />
              of content in <br/>
              minutes.
            </HeroTitle>
            <HeroSubtitle>
              Don't have time to watch hours of videos or listen to long podcasts?<br/>
              Our AI-powered app summarizes YouTube videos and podcasts,<br/>
              giving you the key insights in a fraction of the time.
            </HeroSubtitle>
            <img src="/img/hero.webp" alt="Hero image"/>
          </Hero>
        </Container>
      </main>
    </div>
  );
}
