import styled from 'styled-components';
import { device } from '../utilities/media-query';

const Wrapper = styled.div`
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tabletL} {
    flex-direction: row;
    display: flex;
  }

  h4 {
    padding: 0;
    margin: 0 0 6px;
  }

  p {
    margin: 0 0 6px;
  }

  .right,
  .left {
    flex: 1;
    height: 100vh;
    padding: 20px 2rem;

    @media ${device.tabletL} {
      padding: 10px 1.3rem;
    }

    .left__wrapper,
    .right__wrapper {
      width: 400px;

      @media ${device.laptop} {
        width: 400px;
      }
    }
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #eee;
    height: 100vh;

    .left__wrapper {
    }

    .action {
      display: flex;
      justify-content: center;
      align-items: center;

      .action__remember,
      .action__forgot {
        flex: 1;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;

    .right__wrapper {
      .box {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 36px;

        .box__icon {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-right: 20px;

          .icon {
            width: 35px;
            height: 35px;
          }
        }

        .box__text {
        }
      }
    }
  }
`;

export default Wrapper;
