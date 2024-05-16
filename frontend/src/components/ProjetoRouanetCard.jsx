import PropTypes from 'prop-types';
import { toMoney } from '../utils';
import { Box, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState, useEffect } from 'react';


const tag = (
    <React.Fragment>
        <Typography
            sx={{
                fontSize: 14,
                background: '#fff2db',
                color: '#cba16f',
                fontWeight: 'bold',
                padding: 1,
            }}
            align='left'
            gutterBottom
        >
            ROUANET
        </Typography>
    </React.Fragment>
);

export default function ProjetoRouanetCard({ project }) {
    const [isFavoriteState, setIsFavoriteState] = useState(false);

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
        <Box sx={{ minWidth: 275, maxHeight: 400 }}>
            <Card variant="outlined">

                <CardContent>
                    {tag}
                    <Typography variant="h6" component="div" align='left'>
                        {projectTitle}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" align='left' gutterBottom>
                        {projectCity} · {projectState}
                    </Typography>
                    <Typography noWrap sx={{ fontSize: 14 }} color="text.secondary" align='left' gutterBottom>
                        {projectSummary}
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="body2" color="text.secondary" align='left' gutterBottom>Aprovado</Typography>
                        <Typography variant="body2" color="text.secondary" align='left' gutterBottom>{valueApproved}</Typography>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="body2" color="text.secondary" align='left' gutterBottom>Captado</Typography>
                        <Typography variant="body2" color="text.secondary" align='left' gutterBottom>{valueInvested}</Typography>
                    </div>
                </CardContent>

                <CardActions>
                    <Button size="medium" fullWidth variant='contained'>Adicionar</Button>
                    {
                        isFavoriteState ? 
                            <FavoriteIcon onClick={() => setIsFavoriteState(false)} /> :
                            <FavoriteBorderOutlinedIcon onClick={() => setIsFavoriteState(true)} />
                    }
                </CardActions>
            </Card>
        </Box>
    );
}

ProjetoRouanetCard.propTypes = {
    project: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        resumo: PropTypes.string.isRequired,
        municipio: PropTypes.string.isRequired,
        uf: PropTypes.string.isRequired,
        valor_aprovado: PropTypes.string.isRequired,
        valor_captado: PropTypes.string.isRequired,
    }).isRequired,
};