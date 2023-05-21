import SVGSprite from 'components/SVGSprite';
import Icon from 'components/Icon';
import UA from 'images/ua.png';
import {
  FooterDescription,
  FooterWrapper,
  IconWrapper,
  Icons,
  UAImg,
  UAText,
  UAWrapper,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterDescription>Developed by Artem Terzi</FooterDescription>
      <UAWrapper>
        <UAText>MADE IN UKRAINE</UAText>
        <UAImg src={UA} alt="Ukraine map" />
      </UAWrapper>
      <SVGSprite />
      <Icons>
        <IconWrapper
          href="https://www.linkedin.com/in/artem-terzi/"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Icon
            name="icon-linkedin"
            width={32}
            height={32}
            ariaLabel="linkedIn profile link"
          />
        </IconWrapper>
        <IconWrapper
          href="https://github.com/ArtemTerzi"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Icon
            name="icon-github"
            width={32}
            height={32}
            ariaLabel="github profile link"
          />
        </IconWrapper>
        <IconWrapper
          href="https://t.me/Drabing"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Icon
            name="icon-telegram"
            width={32}
            height={32}
            ariaLabel="telegram profile link"
          />
        </IconWrapper>
      </Icons>
    </FooterWrapper>
  );
};

export default Footer;
