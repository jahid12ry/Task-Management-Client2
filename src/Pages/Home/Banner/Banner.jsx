
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 7500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/P96vwyy/eden-constantino-i-Jg1-Yzs-Efqo-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Link to='/login'><button className="btn btn-primary">Lets Explore</button></Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/HY6wtx7/estee-janssens-m-O3s5xdo68-Y-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Link to='/login'><button className="btn btn-primary">Lets Explore</button></Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/6P603Dv/mille-sanders-o-Wpart-Nq-An-M-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Link to='/login'><button className="btn btn-primary">Lets Explore</button></Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/t8wGgKh/markus-winkler-Q2-J2q-Qso-YH8-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Link to='/login'><button className="btn btn-primary">Lets Explore</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/7bh0PyM/mille-sanders-Bc6q-Pj-f-r0-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Link to='/login'><button className="btn btn-primary">Lets Explore</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/Sw9CwMw/my-profit-tutor-v30b-SAWzp4-I-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Link to='/login'><button className="btn btn-primary">Lets Explore</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="autoplay-progress mt-[-190px]" slot="container-end">
                    <svg viewBox="0 0 0 0" ref={progressCircle}>

                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>


        </div>
    );
};

export default Banner;