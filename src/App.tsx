import * as S from "./styles";
import "./App.css";
import useTime from "./useTime";

function App() {
  const time = useTime();

  return (
    <div className="container">
      <S.Wrapper>
        <S.Clock>
          <S.HourHand rotation={time.hours} />
          <S.MinuteHand rotation={time.minutes} />
          <S.SecondHand rotation={time.seconds} />
        </S.Clock>
      </S.Wrapper>
    </div>
  );
}

export default App;
