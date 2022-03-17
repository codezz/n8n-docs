(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1076:function(e,t,i){e.exports=i.p+"assets/img/workflow.63cffa22.png"},1077:function(e,t,i){e.exports=i.p+"assets/img/MailerLite_node.19f92f24.png"},1078:function(e,t,i){e.exports=i.p+"assets/img/MailerLite1_node.bde29a41.png"},1079:function(e,t,i){e.exports=i.p+"assets/img/MailerLite2_node.fa962958.png"},1973:function(e,t,i){"use strict";i.r(t);var r=i(26),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"mailerlite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mailerlite"}},[e._v("#")]),e._v(" MailerLite")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.mailerlite.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MailerLite"),r("OutboundLink")],1),e._v(" is an email marketing solution that provides you with a user-friendly content editor, simplified subscriber management, and campaign reports with the most important statistics.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/MailerLite/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.mailerLite"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create, update, and get a subscriber using the MailerLite node. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/751",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("MailerLite")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:i(1076),alt:"A workflow with the MailerLite node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-mailerlite-node-create-subscriber"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-mailerlite-node-create-subscriber"}},[e._v("#")]),e._v(" 2. MailerLite node (create: subscriber)")]),e._v(" "),r("p",[e._v("This node will create a new subscriber in MailerLite. We will add the name of the subscriber along with their email.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the MailerLite node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/MailerLite/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("div",{pre:!0},[r("ol",{pre:!0,attrs:{start:"2"}},[r("li",[e._v("Enter the email address in the "),r("em",[r("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" button and select 'Name' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter the name of the subscriber in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node creates a new subscriber with their name and email.")]),e._v(" "),r("p",[r("img",{attrs:{src:i(1077),alt:"Using the MailerLite node to create a room"}})]),e._v(" "),r("h3",{attrs:{id:"_3-mailerlite1-node-update-subscriber"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-mailerlite1-node-update-subscriber"}},[e._v("#")]),e._v(" 3. MailerLite1 node (update: subscriber)")]),e._v(" "),r("p",[e._v("This node will update the information of the subscriber that we created in the previous node. We will add the information about the city of the subscriber using this node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Update' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Subscriber Email")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > MailerLite > Output Data > JSON > email. You can also add the following expression: "),r("code",[e._v('{{$node["MailerLite"].json["email"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" button and select 'Custom Fields' from the dropdown list.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Custom Field")])]),e._v(" button.")]),e._v(" "),r("li",[e._v("Select 'city' from the "),r("em",[r("strong",[e._v("Field ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the name of the city in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node updates the information of the subscriber that we created in the previous node. Here, the node has added information about the city of the subscriber.")]),e._v(" "),r("p",[r("img",{attrs:{src:i(1078),alt:"Using the MailerLite node to update the subscriber"}})]),e._v(" "),r("h3",{attrs:{id:"_3-mailerlite2-node-get-subscriber"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-mailerlite2-node-get-subscriber"}},[e._v("#")]),e._v(" 3. MailerLite2 node (get: subscriber)")]),e._v(" "),r("p",[e._v("This node will return the information of the subscriber that we created using the MailerLite node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Get' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Subscriber Email")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > MailerLite > Output Data > JSON > email. You can also add the following expression: "),r("code",[e._v('{{$node["MailerLite"].json["email"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node returns the information of the subscriber that we created using the MailerLite node.")]),e._v(" "),r("p",[r("img",{attrs:{src:i(1079),alt:"Using the MailerLite node to get the information of the subscriber"}})])],1)}),[],!1,null,null,null);t.default=o.exports}}]);