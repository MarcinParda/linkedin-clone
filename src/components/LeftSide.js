import styled from "styled-components";
import { connect } from "react-redux";
import { signOutAPI } from "actions";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground/>
          <div>
            <Photo imgURL={props.user && props.user.photoURL ? props.user.photoURL : "/images/photo.svg"}/>
            <Link>Welcome, {props.user ? props.user.displayName : "there"}!</Link>
          </div>
          <button>
            <AddPhotoText>Add a photo</AddPhotoText>
          </button>
        </UserInfo>
        <Widget>
          <button>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt=""/>
          </button>
          <div>
            <ButtonFromNav onClick={() => props.signOut()}>
              <div>
                <span>My profile</span>
                <span>Log out</span>
              </div>
            </ButtonFromNav>
            <ButtonFromNav>
              <div>
                <span>Work</span>
                <span>Check out job offers</span>
              </div>
            </ButtonFromNav>
          </div>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt=""/>
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <button>
          <span>Groups</span>
        </button>
        <button>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt=""/>
          </span>
        </button>
        <button>
          <span>Follow Hashtags</span>
        </button>
        <button>
          <span>Discover more</span>
        </button>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;

  button {
    width: 100%;
    border: 0;
    background-color: transparent;
  }
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  cursor: pointer;
  box-shadow: none;
  background-image: url(${props => props.imgURL});
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-size: 100%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;

  & > button {
    width: 100%;
    border: 0;
    background-color: transparent;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 12px;
        line-height: 1.333;

        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }

        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const ButtonFromNav = styled.button`
  width: 100%;
  border: 0;
  background-color: transparent;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  display: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;

    span {
      font-size: 12px;
      line-height: 1.333;

      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }

      &:nth-child(2) {
        color: rgba(0, 0, 0, 1);
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;

  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);

    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;

  button {
    border: 0;
    background-color: transparent;
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;

    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
}
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Leftside);
