import PropTypes from 'prop-types';
import { toMoney } from '../utils';
import { Box, Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


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
                variant='caption'
                borderRadius={1}
                align='center'
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
        lineClamp: 3,
    },

    titleShortDescription: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

    currencyStyle: {
        fontWeight: 'bold',
    },

    boxRowView: {
        display: 'flex',
        flexWrap: 'no-wrap',
        justifyContent: 'space-between',
        width: '75%',
    }
});

function ProjetoRouanetCard({ project }) {
    const [isFavoriteState, setIsFavoriteState] = useState(false);

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
            <Card variant='elevation'>

                <CardContent>
                    {rouanetTag}

                    <Tippy content={projectTitle} placement='top'>
                        <Typography align='left' component="div" id={project.id_projeto} className={classes.titleShortDescription} gutterBottom>{projectTitle}</Typography>
                    </Tippy>
                        
                    <Typography variant='body2' align='left' color='text.secondary' gutterBottom>{projectCity} · {projectState}</Typography>
                    <Typography variant='caption' align='left' color="text.secondary" paragraph className={classes.ellipsisShortDescription} height={100} gutterBottom>{projectSummary}</Typography>

                    <Box component='div' className={ classes.boxRowView }>
                        <Typography align='left' gutterBottom>Aprovado</Typography>
                        <Typography align='left' gutterBottom className={classes.currencyStyle}>{valueApproved}</Typography>
                    </Box>
                    <Box component='div' className={ classes.boxRowView }>
                        <Typography align='left' gutterBottom>Captado</Typography>
                        <Typography align='left' gutterBottom className={classes.currencyStyle}>{valueInvested}</Typography>
                    </Box>
                </CardContent>

                <CardActions>
                    <Button size="large" fullWidth variant='contained' disabled>Adicionar</Button>
                    {
                        isFavoriteState ? 
                            <FavoriteIcon style={{ color: 'red', cursor: 'pointer' }} onClick={() => setIsFavoriteState(false)} /> :
                            <FavoriteBorderOutlinedIcon style={{ cursor: 'pointer' }} color='text.secondary' onClick={() => setIsFavoriteState(true)} />
                    }
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
