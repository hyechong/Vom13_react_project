import { useState } from 'react';

const MultiUserInput = () => {
  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('');
  // const [birth, setBirth] = useState('');
  // const [bio, setBio] = useState('');

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  //   console.log(e.target.value);
  // };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  //   console.log(e.target.value);
  // };
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  //   console.log(e.target.value);
  // };
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  //   console.log(e.target.value);
  // };

  // refactoring
  const [state, setState] = useState({
    name: '',
    gender: '',
    birth: '',
    bio: '',
  });

  const handleOnChange = (e) => {
    console.log('현재 수정 대상 : ', e.target.name);
    console.log('수정 값 : ', e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>MultiUserInput</h2>
      <div>
        <input
          name='name'
          type='text'
          value={state.name}
          placeholder='name'
          onChange={handleOnChange}
        />
      </div>
      <div>
        <select name='gender' value={state.gender} onChange={handleOnChange}>
          <option key=''></option>
          <option key='female'>female</option>
          <option key='male'>male</option>
        </select>
      </div>
      <div>
        <input
          name='birth'
          type='date'
          value={state.birth}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <textarea
          name='bio'
          value={state.bio}
          onChange={handleOnChange}></textarea>
      </div>
    </div>
  );
};

export default MultiUserInput;
