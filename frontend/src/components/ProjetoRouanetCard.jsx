import PropTypes from 'prop-types';
import { toMoney } from '../utils';
import {
  Box,
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ProjetoRouanetFavoriteIcon from './ProjetoRouanetFavoriteIcon';

const rouanetTag = (
  <React.Fragment>
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Typography
        sx={{
          background: '#fff2db',
          color: '#cba16f',
          fontWeight: 'bold',
          paddingInline: 2,
          display: 'inline-block',
        }}
        variant="caption"
        borderRadius={1}
        align="center"
        gutterBottom
      >
        ROUANET
      </Typography>
    </div>
  </React.Fragment>
);

const useStyles = makeStyles({
  ellipsisShortDescription: {
    maxWidth: '100%',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    lineClamp: 3,
    maxHeight: '4.5em',
    textOverflow: 'ellipsis',
  },

  titleShortDescription: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  currencyStyle: {
    fontWeight: 'bold',
    justifySelf: 'flex-start',
  },

  boxRowViewLabel: {
    flex: '0 0 50px',
  },

  boxRowView: {
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
    width: '90%',
  },
});

function ProjetoRouanetCard({ project }) {
  const classes = useStyles();

  const valueInvested = toMoney(project.valor_captado);
  const valueApproved = toMoney(project.valor_aprovado);
  const projectTitle = project.nome;
  const projectCity = project.municipio;
  const projectState = project.uf;
  const projectSummary = project.resumo;

  useEffect(() => {
    document.title = 'Simbi - Projetos Rouanet';
  }, []);

  return (
    <Box sx={{ width: 290, boxShadow: 0 }}>
      <Card variant="elevation">
        <CardContent>
          {rouanetTag}

          <Tippy content={projectTitle} placement="top">
            <Typography
              align="left"
              component="div"
              variant="subtitle2"
              id={project.id_projeto}
              className={classes.titleShortDescription}
              gutterBottom
            >
              {projectTitle}
            </Typography>
          </Tippy>

          <Typography
            variant="caption"
            paragraph
            align="left"
            color="text.secondary"
          >
            {projectCity} · {projectState}
          </Typography>

          <Typography
            variant="caption"
            align="left"
            color="text.secondary"
            paragraph
            className={classes.ellipsisShortDescription}
            height={100}
            gutterBottom
          >
            {projectSummary}
          </Typography>

          <Box component="div" className={classes.boxRowView}>
            <Typography
              align="left"
              variant="body2"
              classes={classes.boxRowViewLabel}
              gutterBottom
            >
              Aprovado
            </Typography>
            <Typography
              align="left"
              gutterBottom
              variant="body2"
              className={classes.currencyStyle}
            >
              {valueApproved}
            </Typography>
          </Box>
          <Box component="div" className={classes.boxRowView}>
            <Typography
              className={classes.boxRowViewLabel}
              align="left"
              variant="body2"
              gutterBottom
            >
              Captado
            </Typography>
            <Typography
              align="left"
              variant="body2"
              gutterBottom
              className={classes.currencyStyle}
            >
              {valueInvested}
            </Typography>
          </Box>
        </CardContent>

        <CardActions>
          <Button
            size="medium"
            fullWidth
            variant="contained"
            sx={{
              '&.Mui-disabled': {
                background: '#fafbfd',
                color: '#c0c0c0',
              },
              cursor: 'not-allowed',
            }}
            disabled
          >
            Adicionar
          </Button>
          <ProjetoRouanetFavoriteIcon />
        </CardActions>
      </Card>
    </Box>
  );
}

ProjetoRouanetCard.propTypes = {
  project: PropTypes.shape({
    id_projeto: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired,
    municipio: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
    valor_aprovado: PropTypes.string.isRequired,
    valor_captado: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjetoRouanetCard;
