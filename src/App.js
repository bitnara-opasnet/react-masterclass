import styled, {keyframes} from "styled-components";

// component 만들기
const Father = styled.div`
  display: flex;
`;

const Text = styled.div`
  color: wheat;
  text-align: center;
`;

// props 받아서 속성 변경하기
const Rect = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Box의 속성은 유지하고 새로운 속성을 추가하는 방법
const Circle = styled(Rect)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// attrs 사용해서 속성 지정하기
const Input = styled.input.attrs({required: true})`
 background-color: tomato;
`;


//animation 설정하기
const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
    // click 상태이면 변경되는 옵션
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <div>
      ** component 만들기 및 확장하기
      <Father>
        <Rect bgColor="teal">
          <Text>Box</Text>
        </Rect>
        <Circle bgColor="tomato">
          <Text>Circle</Text>
        </Circle>
      </Father>
      <br />

      ** as를 이용해서 btn 태그 a 태그로 변경
      <div>
        <Btn>Button</Btn>
        <Btn as="a" href="#">A Link</Btn>
      </div>
      <br />

      ** attrs 사용해서 모든 component에 속성 추가
      <div>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
      </div>
      <br />

      ** animation 추가
      <Father>
        <Box bgColor="tomato">
          <span>😀</span>
        </Box>
      </Father>
    </div>
  );
}

export default App;
