import SVGSprite from 'components/SVGSprite';
import Icon from 'components/Icon';
import {
  FooterDescription,
  FooterWrapper,
  IconWrapper,
  Icons,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterDescription>Developed by Artem Terzi</FooterDescription>
      <SVGSprite />
      <Icons>
        <IconWrapper
          href="https://www.linkedin.com/in/artem-terzi/"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Icon name="icon-linkedin" width={32} height={32} />
        </IconWrapper>
        <IconWrapper
          href="https://github.com/ArtemTerzi"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Icon name="icon-github" width={32} height={32} />
        </IconWrapper>
        <IconWrapper
          href="https://t.me/Drabing"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Icon name="icon-telegram" width={32} height={32} />
        </IconWrapper>
      </Icons>
    </FooterWrapper>
  );
};

export default Footer;
