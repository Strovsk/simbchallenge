import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProjetoRouanetCard from './ProjetoRouanetCard';


function ProjetoRouanetSlider(projects) {
    const slideSize = 290;
    const slideGap = 25;
    const numberOfSlidesPerView = 3;

    return (
    <div style={{ width: (slideSize + slideGap) * numberOfSlidesPerView }}>
        <Swiper
        modules={[ Navigation, Pagination ]}
        spaceBetween={slideGap}
        slidesPerView={numberOfSlidesPerView}
        navigation
        pagination={{ clickable: true }}
        >
            {projects.map(project => (
                <SwiperSlide key={project.id_projeto}>
                    <ProjetoRouanetCard project={project} />
                </SwiperSlide>
            ))}
        </Swiper>
  </div>)
}

ProjetoRouanetSlider.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        id_projeto: PropTypes.number.isRequired,
        nome: PropTypes.string.isRequired,
        resumo: PropTypes.string.isRequired,
        municipio: PropTypes.string.isRequired,
        uf: PropTypes.string.isRequired,
        valor_aprovado: PropTypes.string.isRequired,
        valor_captado: PropTypes.string.isRequired,
    })).isRequired,
};

export default ProjetoRouanetSlider;
