import { useState, useEffect } from 'react';
import { projetosRouanet } from './services/projetosRouanet';

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import ProjetoRouanetSlider from './components/ProjetRouanetSlider';
import bacgkround from './assets/background.svg';

import './styles/App.css';

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

          <ProjetoRouanetSlider projects={projects} />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button>+ VER TODOS</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
