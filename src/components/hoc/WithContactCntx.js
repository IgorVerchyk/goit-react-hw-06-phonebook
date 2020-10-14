import React from 'react';

import ContactCntx from '../../contexts/contacts';

const withContactCntx = WrappedComponent => {
  return function WithAuthContext(props) {
    return (
      <ContactCntx.Consumer>
        {ctx => <WrappedComponent {...props} auth={ctx} />}
      </ContactCntx.Consumer>
    );
  };
};

export default withContactCntx;
