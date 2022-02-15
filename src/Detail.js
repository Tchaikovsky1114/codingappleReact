import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss';

function DetailPage(props) {
  let history = useHistory();
  let { id } = useParams();
  const [descImg, setDescImg] = useState('/img/descimg1.jpg');

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 1200) {
        setDescImg('/img/descimg2.jpg');
      } else {
        setDescImg('/img/descimg1.jpg');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEnentListener('scroll', onScroll);
  }, []);

  return (
    <div className="container">
      <div className="my-alert">
        <p>2022년 1분기 마감이 임박했습니다</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src="/img/detailpage1.jpg" width="100%" alt="come" />
        </div>
        <div className="col-md-6 mt-4 desc-wrap">
          <h4>{props.service[0].title}</h4>
          <p>사무 공간이 당신을 생각할 수 있도록 설계합니다.</p>
          <p className="desc-detail">{props.service[0].content}</p>
          <button className="btn btn-danger">문의하기</button>
          <button
            className="btn btn-danger back-btn"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      <div className="howtocontract-wrap">
        <div className="howtocontract-img-box">
          <img className="desc-img" src={descImg} alt="desk" />
        </div>
        <p className="howtocontract-desc">
          프론트엔드 개발을 하다보면 javascript를 많이 사용하게 됩니다. 하지만
          javascript를 너무 많이 사용하다 보면 코드가 복잡해 지기도 하고
          퍼포먼스도 점점 떨어지는 것을 느끼게 됩니다. Affix 같은 기능을
          구현하려면 부트스트랩같은 특정 프레임워크를 사용하거나 별도로 개발을
          해야 했으나 CSS의 position:sticky를 이용하면 javascript를 전혀
          사용하지 않고도 멋진 기능을 구현해 낼 수 있습니다. sticky란 무엇인가?
          sticky는 CSS의 Position의 속성으로 사용되어 집니다. Fixed가 브라우저
          화면의 절대 위치를 사용하는 반면 Sticky는 부모 태그의 절대위치값을
          사용하는 방법입니다. 그래서 반드시 Sticky의 상위에 부모 컨테이너가
          존재해야 합니다. position : fixed : 최상위 브라우저 창을 기준으로 절대
          위치를 지정 position : sticky : 부모 태그의 크기를 기준으로 절대
          위치를 지정 sticky로 기본 레이아웃 구성하기 sticky를 여러용도로 사용할
          수 있겠지만 아무래도 기본 레이아웃 구성에 가장 많이 쉽게 적용할 수
          있을것 같습니다. 구현할 결과물 아래와 같이 화면을 스크롤 해 보면
          부모의 컨테이너 안에서 고정되어 있다가 부모 컨테이너까지 밀리게 될경우
          출처: https://uxgjs.tistory.com/202 [UX 공작소]
        </p>
      </div>
    </div>
  );
}

export default DetailPage;
