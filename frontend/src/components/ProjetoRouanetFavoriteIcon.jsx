import { useState } from 'react';
import PropTypes from 'prop-types';
import { Grow } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function ProjetoRouanetFavoriteIcon({ filled = false }) {
  const [isFavorite, setIsFavorite] = useState(filled);

  return (
    <>
      {isFavorite ? (
        <Grow in={isFavorite}>
          <FavoriteIcon
            sx={{ color: 'red', cursor: 'pointer' }}
            fontSize="large"
            onClick={() => setIsFavorite(false)}
          />
        </Grow>
      ) : (
        <FavoriteBorderOutlinedIcon
          sx={{ cursor: 'pointer', stroke: '#fff' }}
          fontSize="large"
          color="text.secondary"
          onClick={() => setIsFavorite(true)}
        />
      )}
    </>
  );
}

ProjetoRouanetFavoriteIcon.propTypes = {
  filled: PropTypes.bool,
};

export default ProjetoRouanetFavoriteIcon;
