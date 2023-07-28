import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import ConditionalRendering from './components/ConditionalRendering';
import Properties from './components/Properties';
import ChildCompProps from './components/ChildCompProps';
import AlertEvent from './components/AlertEvent';
import ObjectEvent from './components/ObjectEvent';
import StateComponent from './components/StateComponent';
import ChangeText from './components/ChangeText';
import MultiUserInput from './components/MultiUserInput';
import UseRef from './components/UseRef';

const ChildComp = () => {
  return <div>Child Component</div>;
};

function App() {
  // const name='혜지'
  // const location="용인"

  // const BodyProps = {
  //   name: '혜지',
  //   location: '용인',
  //   favList: '토토, 마루, 탕후루',
  // };
  return (
    <div className='App'>
      <Header />
      {/* <Body>
      </Body> */}
      {/* <ConditionalRendering /> */}
      {/* <Properties name={name} location={location} /> */}
      {/* <Properties {...BodyProps} /> */}
      {/* <ChildCompProps>
        <ChildComp />
      </ChildCompProps> */}
      {/* <AlertEvent /> */}
      {/* <ObjectEvent /> */}
      {/* <StateComponent /> */}
      {/* <ChangeText /> */}
      {/* <MultiUserInput /> */}
      <UseRef />
      <Footer />
    </div>
  );
}

export default App;
