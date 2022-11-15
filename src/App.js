
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;



// component 만들기
const Father = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: ${(props) => props.bgColor};
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

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  /* animation: ${rotationAnimation} 1s linear infinite; */
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
    // click 상태이면 변경되는 옵션
    &:active {
      opacity: 0;
    }
  }
`;


const Title = styled.h1`
  color: ${props => props.theme.textColor};
`;


function App() {
  return (
    <Wrapper>

      <Title>styled-components 시작하기</Title>

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
        <Btn bgColor="teal">Button</Btn>
        <Btn bgColor="tomato" as="a" href="#">A Link</Btn>
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
          <Emoji as="p">😀</Emoji>
        </Box>
        <Emoji>🔥</Emoji>
      </Father>
    </Wrapper>
  );
}

export default App;
