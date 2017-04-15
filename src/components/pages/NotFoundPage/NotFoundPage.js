import React from 'react';
import PropTypes from 'prop-types'
import Layout from 'react-toolbox/lib/layout/Layout';
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { updatePageTitle } from 'actions'

const propTypes = {
  // Specify dispatch since this is a stateful component
  dispatch: PropTypes.func,
  pageTitle: PropTypes.string.isRequired
};

const defaultProps = {
};

export class NotFoundPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(updatePageTitle('Page Not Found - Movementa'))
  }

  render() {
    return (
      <div className="homepage">
        <Helmet>
            <meta charSet="utf-8" />
            <title>{this.props.pageTitle}</title>
            <meta name="description" content="Oops! The page you're looking for was not found." />
        </Helmet>
        <Layout>
          <div className="row">
            <div className="col-xs-offset-1
                            col-xs-10">
              <section className="box homepage__form-container">
                <div className="row">
                  <div className="col-xs">
                    <div className="box">
                      <h1 className="homepage__headline">404 Error!</h1>
                      <h2 className="homepage__subheadline">That flippin' page can't be found.</h2>
                      <h2 className="homepage__subheadline">Use the search bar above to find gyms near you.</h2>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle
  }
}

NotFoundPage.propTypes = propTypes
NotFoundPage.defaultProps = defaultProps

export default connect(mapStateToProps)(NotFoundPage);
