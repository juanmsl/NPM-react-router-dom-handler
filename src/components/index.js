import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

const RouterDomHandler = ({ routes, ...switchProps }) => {

    const renderRoutes = (routes, path = '', index = 0) => (
        routes.reduce((renderedRoutes, mainRoute, i) => {
            const {
                inDevelopment = false,
                path: mainRoutePath,
                routes: mainRouteRoutes,
                redirect: mainRouteRedirect,
                ...mainRouteProps
            } = mainRoute;

            const prePath = `${path}${mainRoutePath}`;
            const key = `${index}${i}`;

            if (process.env.NODE_ENV === 'production' && inDevelopment) {
                return renderedRoutes;
            }

            if (mainRouteRoutes) {
                return [
                    ...renderedRoutes,
                    ...renderRoutes(mainRouteRoutes, prePath, key)
                ];
            }

            if (mainRouteRedirect) {
                return [
                    ...renderedRoutes,
                    <Redirect
                        key={key}
                        from={prePath}
                        to={mainRouteRedirect}
                        {...mainRouteProps}
                    />
                ];
            }

            return [
                ...renderedRoutes,
                <Route
                    key={key}
                    path={prePath}
                    {...mainRouteProps}
                />
            ];

        }, [])
    );

    return (
        <Switch {...switchProps}>
            {renderRoutes(routes)}
        </Switch>
    );
}

RouterDomHandler.defaultProps = {
    routes: []
};

RouterDomHandler.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        inDevelopment: PropTypes.bool,
        routes: PropTypes.array,
        redirect: PropTypes.string
    }))
};

export default RouterDomHandler;