import { ComponentProps } from 'lib/component-props';
import { LinkField, Link } from '@sitecore-jss/sitecore-jss-nextjs';

export type HeroSectionCtaProps = ComponentProps & {
  fields: {
    Link: LinkField;
  };
};

const HeroSectionCta = ({ fields }: HeroSectionCtaProps): JSX.Element => {
  return (
    <div className="btn__area">
      <Link field={fields.Link} className="btn--main btn--main--round btn--main--big" />
    </div>
  );
};

export default HeroSectionCta;
