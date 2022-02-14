import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
function DetailPage() {
  let history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="./img/detailpage1.jpg" width="100%" alt="company" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">Modern Basic</h4>
          <p>Modern Design. 1960's Simple & Candy Color를 지향합니다</p>
          <p>사무 공간이 당신을 생각할 수 있도록 설계합니다.</p>
          <button className="btn btn-danger">문의하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
