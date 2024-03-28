import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default ({ categories = [] }) => {
    return (
        <Swiper
            effect={"cube"}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 3 }}
            scrollbar={{ draggable: true }}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            style={{ maxHeight: '390px', maxWidth: "642px" }}
            className="swiper-container rounded-md"
        >
            {categories.map(cat => (
                <SwiperSlide style={{ maxWidth: "680px", maxHeight: '742px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={cat.image} alt={cat.name} className='object-cover' />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
