import React from 'react';
import VoterStats from './VoterStats';
import Distribution from './Distribution';

const Stats = () => {
  return (
    <section className="stats">
      <VoterStats />
      <Distribution />
    </section>
  );
};

export default Stats;