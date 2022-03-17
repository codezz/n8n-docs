(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1749:function(e,t,n){"use strict";n.r(t);var o=n(26),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"salesforce"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#salesforce"}},[e._v("#")]),e._v(" Salesforce")]),e._v(" "),o("p",[e._v("You can use these credentials to authenticate the following nodes with Salesforce.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Salesforce/"}},[e._v("Salesforce")])],1)]),e._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("p",[e._v("Create a "),o("a",{attrs:{href:"https://www.salesforce.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Salesforce"),o("OutboundLink")],1),e._v(" account.")]),e._v(" "),o("h2",{attrs:{id:"using-oauth"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[e._v("#")]),e._v(" Using OAuth")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("⛅️ Note for n8n.cloud users")]),e._v(" "),o("p",[e._v("You'll only need to enter the Credentials Name, Access Token URL, and click on the circle button in the OAuth section to connect your Salesforce account to n8n. You can find details on how to obtain the Access Token URL in the instructions below.")])]),e._v(" "),o("ol",[o("li",[e._v("Access your Salesforce Dashboard.")]),e._v(" "),o("li",[e._v("Click on the gear icon in the top right and select "),o("em",[o("strong",[e._v("Setup")])]),e._v(" from the dropdown list.")]),e._v(" "),o("li",[e._v("In the "),o("em",[o("strong",[e._v("Platform Tools")])]),e._v(" category of the sidebar, select "),o("em",[o("strong",[e._v("App Manager")])]),e._v(" under the "),o("em",[o("strong",[e._v("Apps")])]),e._v(" section.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("New Connected App")])]),e._v(" button.")]),e._v(" "),o("li",[e._v("Enter any necessary information and click on the "),o("em",[o("strong",[e._v("Enable OAuth Settings")])]),e._v(" checkbox.")]),e._v(" "),o("li",[e._v("Copy the "),o("em",[o("strong",[e._v("OAuth Callback URL")])]),e._v(" provided in the 'Salesforce OAuth2 API' credentials in n8n.")]),e._v(" "),o("li",[e._v("On the Salesforce app creation page, paste the URL in the "),o("em",[o("strong",[e._v("Callback URL")])]),e._v(" field.")]),e._v(" "),o("li",[e._v('Add the "Perform requests on your behalf at any time (refresh_token, offline_access)" scope in the '),o("em",[o("strong",[e._v("Selected OAuth Scopes")])]),e._v(" section.")]),e._v(" "),o("li",[e._v("Add any other scopes you plan to use in the  "),o("em",[o("strong",[e._v("Selected OAuth Scopes")])]),e._v(" section.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Save")])]),e._v(" button at the bottom of the page.")]),e._v(" "),o("li",[e._v("On the "),o("em",[o("strong",[e._v("New Connected App")])]),e._v(" page, click on the "),o("em",[o("strong",[e._v("Continue")])]),e._v(" button.")]),e._v(" "),o("li",[e._v("In the 'API (Enable OAuth Settings)' section of the page, click on the "),o("em",[o("strong",[e._v("Click to reveal")])]),e._v(" button to reveal the consumer secret.")]),e._v(" "),o("li",[e._v("Copy the displayed "),o("em",[o("strong",[e._v("Consumer Key")])]),e._v(" and the "),o("em",[o("strong",[e._v("Consumer Secret")])]),e._v(" and use these with your Salesforce OAuth2 API credentials in n8n.")]),e._v(" "),o("li",[e._v("In the n8n credentials window select your "),o("em",[o("strong",[e._v("Environment Type")])]),e._v(", where Production or Sandbox.")]),e._v(" "),o("li",[e._v("Click on the circle button in the OAuth section to connect a Salesforce account to n8n.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Save")])]),e._v(" button to save your credentials.")])]),e._v(" "),o("p",[o("img",{attrs:{src:n(603),alt:"Getting Salesforce OAuth credentials"}})]),e._v(" "),o("h2",{attrs:{id:"using-oauth-jwt"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth-jwt"}},[e._v("#")]),e._v(" Using OAuth JWT")]),e._v(" "),o("p",[e._v("To use the OAuth JWT authentication method with the Salesforce node you need to create a private key. Follow the instructions mentioned in the documentation "),o("a",{attrs:{href:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" to create a private key.")]),e._v(" "),o("ol",[o("li",[e._v("Access your Salesforce Dashboard.")]),e._v(" "),o("li",[e._v("Click on the gear icon in the top right and select "),o("em",[o("strong",[e._v("Setup")])]),e._v(" from the dropdown list.")]),e._v(" "),o("li",[e._v("In the "),o("em",[o("strong",[e._v("Platform Tools")])]),e._v(" category of the sidebar, select "),o("em",[o("strong",[e._v("App Manager")])]),e._v(" under the "),o("em",[o("strong",[e._v("Apps")])]),e._v(" section.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("New Connected App")])]),e._v(" button.")]),e._v(" "),o("li",[e._v("Enter any necessary information and click on the "),o("em",[o("strong",[e._v("Enable OAuth Settings")])]),e._v(" checkbox.")]),e._v(" "),o("li",[e._v("Copy the "),o("em",[o("strong",[e._v("OAuth Callback URL")])]),e._v(" provided in the 'Salesforce OAuth2 API' credentials in n8n.")]),e._v(" "),o("li",[e._v("On the Salesforce app creation page, paste the URL in the "),o("em",[o("strong",[e._v("Callback URL")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Use digital signatures")])]),e._v(" checkbox.")]),e._v(" "),o("li",[e._v("Upload the private key that you created earlier.")]),e._v(" "),o("li",[e._v('Add the "Perform requests on your behalf at any time (refresh_token, offline_access)" scope in the '),o("em",[o("strong",[e._v("Selected OAuth Scopes")])]),e._v(" section.")]),e._v(" "),o("li",[e._v("Add any other scopes you plan to use in the  "),o("em",[o("strong",[e._v("Selected OAuth Scopes")])]),e._v(" section.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Save")])]),e._v(" button at the bottom of the page.")]),e._v(" "),o("li",[e._v("On the "),o("em",[o("strong",[e._v("New Connected App")])]),e._v(" page, click on the "),o("em",[o("strong",[e._v("Continue")])]),e._v(" button.")]),e._v(" "),o("li",[e._v("Copy the displayed "),o("em",[o("strong",[e._v("Consumer Key")])]),e._v(" and paste it in the "),o("em",[o("strong",[e._v("Client ID")])]),e._v(" field in your Salesforce JWT API credentials in n8n.")]),e._v(" "),o("li",[e._v("Use your Salesforce username in the "),o("em",[o("strong",[e._v("Username")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Copy the private key that you created earlier and paste it in the "),o("em",[o("strong",[e._v("Private Key")])]),e._v(" field in your Salesforce JWT API credentials in n8n.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Save")])]),e._v(" button to save your credentials.")])])])}),[],!1,null,null,null);t.default=s.exports},603:function(e,t,n){e.exports=n.p+"assets/img/using-oauth.d4bdd4d3.gif"}}]);