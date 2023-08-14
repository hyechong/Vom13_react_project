// context를 사용하는 이유는 props drilling 문제를 해결하기 위해서다.
// 이는 리액트 컴포넌트 계층 구조에서 컴포넌트 간에 값을 전달할 때 발생한다.
// 리액트에서 데이터를 전달할 때 사용하는 props는 직계 하위 컴포넌트에게만 전달할 수 있다. 따라서 두 계층 이상의 하위 컴포넌트로 데이터를 전달하기 위해서는 중간에 걸쳐 있는 모든 하위 컴포넌트에 props를 전달해야 하는데 이를 props drilling이라 한다.
// context를 사용하면 단계다마 일일이 props를 전달하지 않고도 컴포넌트 트리 전역에 데이터를 공급할 수 있다.

// 현재 todolist 앱에서는 onDelete와 onUpdate 함수 props가 TodoList로 전달되는 과정에서 사용되자 않는 TodoList 컴포넌트를 거쳐간다. 이때 props drilling 현상이 발생한다. -> App.js
