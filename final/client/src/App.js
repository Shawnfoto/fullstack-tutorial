import React, { useEffect } from "react"
// import './App.css';
// import SwiperCore, { Controller } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

import { useQuery, gql } from '@apollo/client';

const NEW_MATCHES = gql`
  query newMatches {
    to {
      name
      jobTitle
      displayLocation
      seniority
      backgrounds
      industries
      interests
      objectives
      photoRect
      aboutMe
    }
    userVoteId
    voteType
  }
`;

function App() {
//   const { loading, error, data } = useQuery(NEW_MATCHES);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
  //   return data.rates.map(({ currency, rate }) => (
  //     <div key={currency}>
  //       <p>
  //         {currency}: {rate}
  //       </p>
  //     </div>
  //   ));

    
//   const slides = Array.from({ length: 1000 }).map((el, index) => `Slide ${index + 1}`);

  return (
    <div className="App">
        test
    {/* <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
    </div>
  );
}

export default App;
