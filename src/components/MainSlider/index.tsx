import React from "react";
import s from "./MainSlider.module.scss";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

type Props = {};

export default function index({}: Props) {
  return (
    <section className={s.slider_section}>
      {/* TODO: tag picture & webp */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className={s.banner}
            src="./React-TS-Store-Template/images/banner.png"
            alt="banner"
          />
          <Container>
            <div className={s.slider_content}>
              <h1>Заголовок баннера</h1>
              <p>
                Текст баннера Текст баннера Текст баннера Текст баннера Текст
                баннера Текст баннера Текст баннера Текст баннера Текст баннера
              </p>
              <div>
                {/* TODO: my own button component */}
                <Button
                  size="large"
                  sx={{
                    color: "#631cf9",
                    backgroundColor: "#FFF",
                    borderColor: "green",
                    padding: "10px 50px",
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                    "&:hover": {
                      backgroundColor: "#e2e8f0",
                    },
                  }}
                  fullWidth={false}
                  color="primary"
                  variant="contained"
                >
                  Кнопка
                </Button>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={s.banner}
            src="./React-TS-Store-Template/images/banner.png"
            alt="banner"
          />
          <Container>
            <div className={s.slider_content}>
              <h1>Заголовок баннера</h1>
              <p>
                Текст баннера Текст баннера Текст баннера Текст баннера Текст
                баннера Текст баннера Текст баннера Текст баннера Текст баннера
              </p>
              <div>
                {/* TODO: my own button component */}
                <Button
                  size="large"
                  sx={{
                    color: "#631cf9",
                    backgroundColor: "#FFF",
                    borderColor: "green",
                    padding: "10px 50px",
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                    "&:hover": {
                      backgroundColor: "#e2e8f0",
                    },
                  }}
                  fullWidth={false}
                  color="primary"
                  variant="contained"
                >
                  Кнопка
                </Button>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={s.banner}
            src="./React-TS-Store-Template/images/banner.png"
            alt="banner"
          />
          <Container>
            <div className={s.slider_content}>
              <h1>Заголовок баннера</h1>
              <p>
                Текст баннера Текст баннера Текст баннера Текст баннера Текст
                баннера Текст баннера Текст баннера Текст баннера Текст баннера
              </p>
              <div>
                {/* TODO: my own button component */}
                <Button
                  size="large"
                  sx={{
                    color: "#631cf9",
                    backgroundColor: "#FFF",
                    borderColor: "green",
                    padding: "10px 50px",
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                    "&:hover": {
                      backgroundColor: "#e2e8f0",
                    },
                  }}
                  fullWidth={false}
                  color="primary"
                  variant="contained"
                >
                  Кнопка
                </Button>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
