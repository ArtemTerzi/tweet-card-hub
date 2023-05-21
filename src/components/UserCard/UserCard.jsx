import { useDispatch } from 'react-redux';
import logo from 'images/logo.png';
import cardPicture from 'images/card-picture.png';
import Frame from 'images/avatar-border.png';
import { handleFollow, handleUnfollow } from 'redux/operation';
import {
  AvaBorder,
  CardPicture,
  CardWrapper,
  FollowButton,
  FollowersCountsText,
  FollowingButton,
  Logo,
  TweetCountsText,
  UserAvatar,
  UserName,
} from './UserCard.styled';

const UserCard = ({ avatar, id, followers, isFollowing, tweets, user }) => {
  const dispatch = useDispatch();

  const onFollow = id => {
    const newData = {
      id: id,
      isFollowing: true,
      followers: (followers += 1),
    };
    dispatch(handleFollow(newData));
  };
  const onUnfollow = id => {
    const newData = {
      id: id,
      isFollowing: false,
      followers: (followers -= 1),
    };
    dispatch(handleUnfollow(newData));
  };

  const normalizeFollowers = followers ? followers.toLocaleString() : '####';
  const normalizeTweets = tweets ? tweets.toLocaleString() : '####';

  return (
    <CardWrapper>
      <Logo src={logo} alt="logo" />
      <CardPicture src={cardPicture} alt="card pict ure" />
      <AvaBorder src={Frame} alt="avatar frame" />
      <UserAvatar src={avatar} alt="user avatar" />
      <UserName>{user}</UserName>
      <TweetCountsText>{normalizeTweets} Tweets</TweetCountsText>
      <FollowersCountsText>{normalizeFollowers} Followers</FollowersCountsText>
      {isFollowing ? (
        <FollowingButton type="button" onClick={() => onUnfollow(id)}>
          FOLLOWING
        </FollowingButton>
      ) : (
        <FollowButton type="button" onClick={() => onFollow(id)}>
          FOLLOW
        </FollowButton>
      )}
    </CardWrapper>
  );
};

export default UserCard;
