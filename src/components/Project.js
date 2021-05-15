import React from 'react';
import Card from './Card';
import hanguler from "../resources/hanguler-web.PNG";
import twitter from "../resources/twitter.PNG";
import mask from "../resources/mask-detector.png";
import scheduler from "../resources/auto-schedule-updater.PNG";

const Project = () => {
  return (
    <div className="project">
      <p className="title"> 프로젝트 목록 </p>
      <Card 
        img={scheduler}
        title="자동 일정 업데이트 어플"
        period="21.02 - 현재 (진행중)"
        tech="#Python #Android Studio(Java), #Nodejs, #Express, #Mongodb, #Mongoose #Jira #Figma"
        role="NLP 패키지 구축(50%), DB 구축 및 서버 개발"
        description="한국어 자연어처리 라이브러리를 활용한 장소 관련 개체명(단어) 추출 패키지 개발. 해당 패키지를 연동하여 대화 중 일정 관련 데이터를 추출해 자동으로 일정에 업데이트하는 안드로이드 앱 제작"
        link="https://github.com/gyuree-kim/auto-schedule-updater"
      />
      <Card 
        img={twitter}
        title="트위터 핵심 기능 클론 코딩"
        period="21.01 - 21.02"
        tech="#Reactjs #firebase"
        description="노마드 아카데미 강의를 바탕으로 React 학습. 일반 User Auth 및 소셜 로그인 연동. 텍스트와 이미지를 업로드 할 수 있는 트위터의 실시간 대화(트윗) 기능 구현."
        link="https://github.com/gyuree-kim/twitter-clone-coding"
      />
      <Card 
        img={hanguler}
        title="일대일 전화 한국어 예약 웹"
        period="20.08 - 21.01"
        tech="#Bitbucket, #AWS, #Jira, #confluence, #wordpress, #html, #css"
        role="창업멤버 및 개발 PM"
        description="경영팀 및 디자인팀과의 웹 구축 관련 의사결정 리드. production, develop으로 서버 관리 및 Jira 티켓별 태스크 관리
        일부 페이지의 퍼블리싱 담당. 
        개발 소스 관리 및 AWS EB 자동 배포를 위한 Bitbucket 파이프라인 구축 일부 참여.
        "
        link="http://www.hangulers.com"
      />
      <Card 
        img= {mask}
        title="마스크 감지 및 얼굴 인식 어플"
        period="20.07 - 20.08"
        tech="#Android Studio(Java), #Tensorflow, #Nodejs"
        role="프론트엔드 개발(30%)"
        description="마스크 감지와 얼굴 인식을 위한 오픈 소스 모델을 활용해 어플 내 카메라가 마스크를 착용하지 않은 사람을 발견시 알림 소리를 발생시킴. 등록된 얼굴 정보가 있다면 해당 데이터를 활용해 tts api로 음성 출력."
        link="https://github.com/jinh0290/MadCamp-week3"
      />
    </div>
  );
};

export default Project;