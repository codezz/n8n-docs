(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1231:function(e,t,o){e.exports=o.p+"assets/img/workflow.6e241177.png"},1232:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.5416465e.png"},1233:function(e,t,o){e.exports=o.p+"assets/img/S3_node.741f1b70.png"},1234:function(e,t,o){e.exports=o.p+"assets/img/S_node.8b339e53.png"},1235:function(e,t,o){e.exports=o.p+"assets/img/acl_dropdown.fc2122cd.png"},2034:function(e,t,o){"use strict";o.r(t);var s=o(26),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"s3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s3"}},[e._v("#")]),e._v(" S3")]),e._v(" "),s("p",[e._v("S3 is an object storage service that allows you to block public access to all of your objects at the bucket or the account level with S3 Block Public Access. S3 maintains compliance programs, such as PCI-DSS, HIPAA/HITECH, FedRAMP, EU Data Protection Directive, and FISMA, to help you meet regulatory requirements.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/S3/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("Resource",{attrs:{node:"n8n-nodes-base.s3"}}),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" To attach a file for upload, you will need to use an additional node such as the "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node or the "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node to pass the file as a data property.")],1),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to upload a file to an S3 compatible server and get a list of all the files in a bucket using the S3 node. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/674",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("S3")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1231),alt:"A workflow with the S3 node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-http-request-node-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),s("ol",[s("li",[e._v("Enter the URL of the file in the "),s("em",[s("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Select 'File' from the "),s("em",[s("strong",[e._v("Response Format")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(1232),alt:"Using the HTTP Request node to get a file"}})]),e._v(" "),s("h3",{attrs:{id:"_3-s3-node-upload-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-s3-node-upload-file"}},[e._v("#")]),e._v(" 3. S3 node (upload: file)")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the S3 node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/S3/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Select 'Upload' from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter the bucket name in the "),s("em",[s("strong",[e._v("Bucket Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("File Name")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),s("div",{pre:!0},[s("ol",{pre:!0,attrs:{start:"5"}},[s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > HTTP Request > Output Data > Binary > data > fileName. You can also add the following expression: "),s("code",[e._v('{{$node["HTTP Request"].binary.data.fileName}}')])]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),s("p",[s("img",{attrs:{src:o(1233),alt:"Using the S3 node to upload a file to a bucket"}})]),e._v(" "),s("h3",{attrs:{id:"_4-s-node-getall-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-s-node-getall-file"}},[e._v("#")]),e._v(" 4. S node (getAll: file)")]),e._v(" "),s("ol",[s("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),s("li",[e._v("Select 'Get All' from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter the bucket name in the "),s("em",[s("strong",[e._v("Bucket Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Toggle "),s("em",[s("strong",[e._v("Return All")])]),e._v(" to true.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(1234),alt:"Using the S3 node to get a list of all the files in a bucket"}})]),e._v(" "),s("h2",{attrs:{id:"faqs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),s("h3",{attrs:{id:"setting-file-permissions-in-wasabi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-file-permissions-in-wasabi"}},[e._v("#")]),e._v(" Setting file permissions in Wasabi")]),e._v(" "),s("p",[e._v("When uploading files to "),s("a",{attrs:{href:"https://wasabi.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wasabi"),s("OutboundLink")],1),e._v(", permissions for the files must be set using the "),s("strong",[e._v("ACL")]),e._v(" dropdown and not the toggles.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1235),alt:"File permissions when using the S3 node with Wasabi"}})])],1)}),[],!1,null,null,null);t.default=a.exports}}]);