import { RichText, Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type SessionNewsProps = {
  News: Field<string>;
};

const SessionNews = (props: SessionNewsProps): JSX.Element => {
  return (
    <>
      <section className="section information-section">
        <div className="information-grid">
          <div className="main-col">
            <div className="column-title">News &amp; Updates for this session:</div>
              <RichText field={props?.News} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SessionNews;
