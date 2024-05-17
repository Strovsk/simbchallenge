import { useState, useEffect } from 'react';
import { projetosRouanet } from './services/projetosRouanet';

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import ProjetoRouanetSlider from './components/ProjetRouanetSlider';
import background from './assets/background.svg';

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
      <section
        style={{ height: '100vh', display: 'grid', placeItems: 'center' }}
      >
        <div>
          <Typography variant="h1" component="div" align="left" color="#459ca8">
            Case técnico da Simbi
          </Typography>
          <Typography
            variant="body2"
            component="div"
            align="left"
            color="#459ca8"
          >
            Candidato: <strong>Thiago Santa Clara Pereira</strong>
          </Typography>
          <Typography
            variant="body2"
            component="div"
            align="left"
            color="#459ca8"
          >
            Data de início: <strong>15/05/2024</strong>
          </Typography>
          <Typography
            variant="body2"
            component="div"
            align="left"
            color="#459ca8"
          >
            Data de entrega: <strong>17/05/2024</strong>
          </Typography>
        </div>
        <img src={background} alt="case técnico da Simbi" />
        <div>
          <Button
            variant="text"
            href="#projetos-rouanet"
            size="large"
            sx={{ mb: 5 }}
            endIcon={<KeyboardDoubleArrowDownIcon />}
          >
            Ver Resultado
          </Button>
        </div>
      </section>

      <section
        style={{
          height: '100vh',
          display: 'grid',
          placeItems: 'center',
        }}
        id="projetos-rouanet"
      >
        <div style={{ background: '#fff', padding: 40, borderRadius: 10 }}>
          <Typography
            variant="h5"
            component="div"
            align="left"
            color="#459ca8"
            gutterBottom
          >
            Ver outros projetos do propoente
          </Typography>

          <ProjetoRouanetSlider projects={projects} />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button disabled>+ VER TODOS</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
