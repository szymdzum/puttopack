import styled from 'styled-components';

const BannerWrapper = styled.section`
  position: relative;
  color: #0B0B0C;
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export default BannerWrapper;
