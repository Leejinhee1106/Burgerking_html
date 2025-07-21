document.addEventListener("DOMContentLoaded", () => {
  // 메인 슬라이더 (자동 재생)
  const mainSwiper = new Swiper(".mainSwiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  // 공통 슬라이더 생성 함수 (loop 없이, autoplay 제거됨)
  // Swiper 생성 함수: 슬라이더 셀렉터와 외부 버튼 셀렉터를 인자로 받음
  const createSwiper = (swiperSelector, prevSelector, nextSelector) => {
    return new Swiper(swiperSelector, {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: nextSelector,
        prevEl: prevSelector,
      },
      breakpoints: {
        1920: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 3 },
        375: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      },
      on: {
        reachEnd: function () {
          this.slideTo(0, 600); // 마지막 슬라이드 도달 시 처음으로 이동
        },
      },
    });
  };

  // Swiper 인스턴스 초기화 (외부 버튼 ID로 연결)
  const swiper1 = createSwiper('.itemSwiper1', '#prev1', '#next1');
  const swiper2 = createSwiper('.itemSwiper2', '#prev2', '#next2');

  // 탭 관련 요소 선택
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  // 탭 클릭 이벤트
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // 탭 활성화 처리
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      // 탭 콘텐츠 표시
      const target = tab.getAttribute('data-tab');
      contents.forEach((c) => {
        c.classList.remove('active');
        if (c.id === target) c.classList.add('active');
      });

      // 탭 전환 시 슬라이더 위치 초기화 + 강제 업데이트
      setTimeout(() => {
        swiper1.slideTo(0, 0);
        swiper2.slideTo(0, 0);
        swiper1.update();
        swiper2.update();
      }, 50);
    });
  });
});
