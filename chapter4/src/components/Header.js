function Header() {
  // 첫 글자는 항상 대문자 - 소문자는 리액트 컴포넌트로 인식되지 않음(html 태그로 인식 됨)
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

export default Header;
