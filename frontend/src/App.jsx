import { useState, useEffect } from 'react';
import { projetosRouanet } from './services/projetosRouanet';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import ProjetoRouanetCard from './components/ProjetoRouanetCard';
import bacgkround from './assets/background.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './styles/App.css';
import './styles/typography.css';

function App() {
  const [projects, setProjetos] = useState([]);

  useEffect(() => {
    projetosRouanet()
      .then(data => setProjetos(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <section style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
        <div>
          <Typography variant="h1" component="div" align='left' color="#459ca8">
              Case técnico da Simbi
          </Typography>
          <Typography variant='body2' component="div" align='left' color="#459ca8">
              Candidato: <strong>Thiago Santa Clara Pereira</strong>
          </Typography>
          <Typography variant='body2' component="div" align='left' color="#459ca8">
              Data de início: <strong>15/05/2024</strong>
          </Typography>
          <Typography variant='body2' component="div" align='left' color="#459ca8">
              Data de entrega: <strong></strong>
          </Typography>
        </div>
        <img src={bacgkround} alt="case técnico da Simbi" />
      </section>

      <section style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
        <div style={{ background: '#fff', padding: 40, borderRadius: 10 }}>
          <Typography variant="h5" component="div" align='left' color="#459ca8" gutterBottom>
              Ver outros projetos do propoente
          </Typography>
          <div style={{ width: (290 + 25) * 3, height: 500 }}>
            <Swiper
              modules={[ Navigation, Pagination ]}
              spaceBetween={25}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
                {projects.map(project => (
                  <SwiperSlide key={project.id_projeto}>
                    <ProjetoRouanetCard project={project} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button>+ VER TODOS</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
