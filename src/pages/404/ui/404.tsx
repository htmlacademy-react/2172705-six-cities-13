import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function Page404() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <h1 style={{ fontSize: '36px', margin: '0 0 15px 0' }}>Error 404!</h1>
      <p style={{ fontSize: '36px', fontWeight: 700, margin: '0 0 30px 0' }}>We can not seem to find the resource you are looking for.</p>
      <p style={{ fontSize: '16px', opacity: 0.7, textAlign: 'center' }}>
        Please check that the Web site address is spelled correctly.
        <br />
        Or go to our <Link to="/" style={{ color: 'blue' }}>home page</Link>, and use the menus to navigate to a specific section.
      </p>
    </div>
  );
}
