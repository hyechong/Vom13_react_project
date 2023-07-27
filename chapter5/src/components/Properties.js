import React from 'react';

// props는 '부모가 자식 컴포넌트에 단일 객체 형태로 값을 전달'하는 방법이다.
// props를 전달하려면 부모인 App 컴포넌트에서 전달해야 한다.
// App에 변수 저장 -> App에 불러온 컴포넌트의 속성에 변수 저장 -> 속성 변수가 저장된 컴포넌트의 함수 파라미터로 props 전달 -> props 객체의 속성이름 사용

// 여러개의 props를 전달해야 할 경우 App에 속성들을 추가한다.
// function Properties(props) {
//   console.log(props);
//   return (
//     <div>
//       <p>name : {props.name}</p>
//       <p>location : {props.location}</p>
//     </div>
//   );
// }

// 여러개의 props를 사용할 경우 변수를 구조분해할당 한다.
// function Properties(props) {
//   console.log(props);
//   const { name, location } = props;
//   return (
//     <div>
//       <p>name : {name}</p>
//       <p>location : {location}</p>
//     </div>
//   );
// }

// 스프레드 연산자를 사용하게 되면 여러 데이터를 props 객체로 모아서 전달할 수 있다.
function Properties({ name, location, favList }) {
  return (
    <div>
      <p>name : {name}</p>
      <p>location : {location}</p>
      <p>favList : {favList}</p>
    </div>
  );
}

// 전달된 변수가 누락되거나 없는 경우는 예외처리를 해야 한다.
Properties.defaultProps = {
  location: '',
  name: '',
  favList: '',
};

export default Properties;
