import styled from "styled-components"

export default styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(circle at 0 0, red, transparent),
    radial-gradient(circle at 0% 100%, yellow, transparent),
    radial-gradient(circle at 100% 50%, blue, transparent);
`

export const Button = styled.div`
  background-image: radial-gradient(
    circle at 100% 50%,
    blue 0%,
    transparent 80%
  );
  width: 100px;
  height: 100px;
  border-radius: 0 100% 100% 0 / 0 50% 50% 0;
`
