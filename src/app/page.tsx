import Main from '@/components/Main/main'
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import React from 'react'

const Home = () => {
  return (
    <div>
      <Main />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

export default Home
