import { useState, useEffect } from 'react';
import { projetosRouanet } from './services/projetosRouanet';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Typography from '@mui/material/Typography';

import ProjetoRouanetCard from './components/ProjetoRouanetCard';
import bacgkround from './assets/background.svg';
import './styles/App.css';
import './styles/typography.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  const [projects, setProjetos] = useState([]);

  useEffect(() => {
    projetosRouanet()
      .then(data => setProjetos(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Typography variant="h4" component="div" align='left' color="#459ca8">
          Ver outros projetos do propoente
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "25px",
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {projects.map(project => (
          <SwiperSlide key={project.id}>
            <ProjetoRouanetCard  project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <img src={bacgkround} alt="case técnico da Simbi" />
    </>
  )
}

export default App
