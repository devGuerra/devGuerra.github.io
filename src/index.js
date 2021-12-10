import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import EuNunca from "./views/eununca.js";

ReactDOM.render(
  <BrowserRouter>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta httpEquiv="Content-Language" content="pt-br" />
      <link rel="canonical" href="https://robertoguerra.dev" />
      <meta
        name="description"
        content="Desenvolvedor React, com conhecimentos em ReactJs e React Native, 
        Vtex, JavaScript, NodeJs, GraphQl, Html, Css, Sass. Atualmente trabalhando no Sem Parar, 
        onde atuo como desenvolvedor React Native em um time ágil."
      />
      <meta
        name="google-site-verification"
        content="nRsfBnEZoiz7a-qZPp54a2GRt8eqY1T-Oj2pi2BlARs"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://robertoguerra.dev" />
      <meta
        property="og:image"
        content="https://robertoguerra.dev/static/media/brand-name.2c803bb3.png"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Robert Guerra" />
      <meta
        property="og:description"
        content="Desenvolvedor React, com conhecimentos em ReactJs e React Native, 
        Vtex, JavaScript, NodeJs, GraphQl, Html, Css, Sass. Atualmente trabalhando no Sem Parar, 
        onde atuo como desenvolvedor React Native em um time ágil."
      />
      <meta property="og:site_name" content="Robert Guerra" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <title>Roberto Guerra</title>
    </Helmet>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />

      <Route path="/eununca" exact render={(props) => <EuNunca {...props} />} />
      {/* <Route path="/login" exact render={props => <Login {...props} />} /> */}
      {/* <Route
        path="/profile"
        exact
        render={props => <Profile {...props} />}
      /> */}
      {/* <Route
        path="/register"
        exact
        render={props => <Register {...props} />}
      /> */}
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
