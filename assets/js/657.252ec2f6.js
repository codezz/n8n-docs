(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{2176:function(t,a,e){"use strict";e.r(a);var s=e(26),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cli-commands-for-n8n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli-commands-for-n8n"}},[t._v("#")]),t._v(" CLI commands for n8n")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#start-a-workflow"}},[t._v("Start a workflow")])]),e("li",[e("a",{attrs:{href:"#change-the-active-status-of-a-workflow"}},[t._v("Change the active status of a workflow")])]),e("li",[e("a",{attrs:{href:"#export-workflows-and-credentials"}},[t._v("Export workflows and credentials")]),e("ul",[e("li",[e("a",{attrs:{href:"#workflows"}},[t._v("Workflows")])]),e("li",[e("a",{attrs:{href:"#credentials"}},[t._v("Credentials")])])])]),e("li",[e("a",{attrs:{href:"#import-workflows-and-credentials"}},[t._v("Import workflows and credentials")]),e("ul",[e("li",[e("a",{attrs:{href:"#workflows"}},[t._v("Workflows")])]),e("li",[e("a",{attrs:{href:"#credentials"}},[t._v("Credentials")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"start-a-workflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-a-workflow"}},[t._v("#")]),t._v(" Start a workflow")]),t._v(" "),e("p",[t._v("Workflows can not only be started by triggers, webhooks, or manually via the Editor. It is also possible to start them directly via the CLI.")]),t._v(" "),e("p",[t._v("Execute a saved workflow by its ID:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n execute --id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ID"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("Execute a workflow from a workflow file:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n execute --file "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WORKFLOW_FILE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h2",{attrs:{id:"change-the-active-status-of-a-workflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#change-the-active-status-of-a-workflow"}},[t._v("#")]),t._v(" Change the active status of a workflow")]),t._v(" "),e("p",[t._v("You can change the active status of a workflow via the CLI.")]),t._v(" "),e("p",[t._v("Set the active status of a workflow by its ID to false:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n update:workflow --id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ID"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --active"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])])]),e("p",[t._v("Set the active status of a workflow by its ID to true:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n update:workflow --id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ID"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --active"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),e("p",[t._v("Set the active status to false for all the workflows:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n update:workflow --all --active"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])])]),e("p",[t._v("Set the active status to true for all the workflows:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n update:workflow --all --active"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),e("h2",{attrs:{id:"export-workflows-and-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#export-workflows-and-credentials"}},[t._v("#")]),t._v(" Export workflows and credentials")]),t._v(" "),e("p",[t._v("You can export your workflows and credentials from n8n via the CLI.")]),t._v(" "),e("p",[t._v("There are a couple of flags available for this.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Flag")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("--help")]),t._v(" "),e("td",[t._v("Help prompt.")])]),t._v(" "),e("tr",[e("td",[t._v("--all")]),t._v(" "),e("td",[t._v("Exports all workflows/credentials.")])]),t._v(" "),e("tr",[e("td",[t._v("--backup")]),t._v(" "),e("td",[t._v("Sets --all --pretty --separate for simple backups. Only --output has to be set additionally.")])]),t._v(" "),e("tr",[e("td",[t._v("--id")]),t._v(" "),e("td",[t._v("The ID of the workflow to export.")])]),t._v(" "),e("tr",[e("td",[t._v("--output")]),t._v(" "),e("td",[t._v("Outputs file name or directory if using separate files.")])]),t._v(" "),e("tr",[e("td",[t._v("--pretty")]),t._v(" "),e("td",[t._v("Formats the output in an easier to read fashion.")])]),t._v(" "),e("tr",[e("td",[t._v("--separate")]),t._v(" "),e("td",[t._v("Exports one file per workflow (useful for versioning). Must inform a directory via --output.")])]),t._v(" "),e("tr",[e("td",[t._v("--decrypted")]),t._v(" "),e("td",[t._v("Exports the credentials in a decrypted (plain text) format.")])])])]),t._v(" "),e("h3",{attrs:{id:"workflows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workflows"}},[t._v("#")]),t._v(" Workflows")]),t._v(" "),e("p",[t._v("Export all your workflows to the standard output (terminal):")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n export:workflow --all\n")])])]),e("p",[t._v("Export a workflow by its ID and specify the output file name:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n export:workflow --id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ID"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("file.json\n")])])]),e("p",[t._v("Export all workflows to a specific directory in a single file:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n export:workflow --all --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("backups/latest/\n")])])]),e("p",[t._v("Export all the workflows to a specific directory using the "),e("code",[t._v("--backup")]),t._v(" flag (details above):")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n export:workflow --backup --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("backups/latest/\n")])])]),e("h3",{attrs:{id:"credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#credentials"}},[t._v("#")]),t._v(" Credentials")]),t._v(" "),e("p",[t._v("Export all your credentials to the standard output (terminal):")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n export:credentials --all\n")])])]),e("p",[t._v("Export credentials by their ID and specify the output file name:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n export:credentials --id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ID"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("file.json\n")])])]),e("p",[t._v("Export all credentials to a specific directory in a single file:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n export:credentials --all --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("backups/latest/\n")])])]),e("p",[t._v("Export all the credentials to a specific directory using the "),e("code",[t._v("--backup")]),t._v(" flag (details above):")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n export:credentials --backup --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("backups/latest/\n")])])]),e("p",[t._v("Export all the credentials in a decrypted (plain text) format. This can be used to migrate from one installation to another that has a different secret key (in the config file).")]),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" All sensitive information will be visible in the files.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n export:credentials --all --decrypted --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("backups/decrypted.json\n")])])]),e("h2",{attrs:{id:"import-workflows-and-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-workflows-and-credentials"}},[t._v("#")]),t._v(" Import workflows and credentials")]),t._v(" "),e("p",[t._v("You can import your workflows and credentials from n8n via the CLI.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("💡 Update the IDs")]),t._v(" "),e("p",[t._v("When exporting workflows and credentials, their IDs also get exported. If you have workflows and credentials with the same IDs in your existing database, they will get overwritten. To avoid this, delete or change the IDs before importing.")])]),t._v(" "),e("p",[t._v("There are a couple of flags available for this.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Flag")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("--help")]),t._v(" "),e("td",[t._v("Help prompt.")])]),t._v(" "),e("tr",[e("td",[t._v("--input")]),t._v(" "),e("td",[t._v("Input file name or directory if --separate is used.")])]),t._v(" "),e("tr",[e("td",[t._v("--separate")]),t._v(" "),e("td",[t._v("Imports *.json files from directory provided by --input.")])])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("💡 Migrating to different database systems")]),t._v(" "),e("p",[t._v("Workflow and credential names are limited to 128 characters, but SQLite does not enforce size limits correctly.")]),t._v(" "),e("p",[t._v("This might result in errors like "),e("code",[t._v("Data too long for column name")]),t._v(" during the import process.")]),t._v(" "),e("p",[t._v("In this case, you can edit the names from the n8n interface and export again or edit the JSON file directly before importing.")])]),t._v(" "),e("h3",{attrs:{id:"workflows-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workflows-2"}},[t._v("#")]),t._v(" Workflows")]),t._v(" "),e("p",[t._v("Import workflows from a specific file:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n import:workflow --input"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("file.json\n")])])]),e("p",[t._v("Import all the workflow files (*.json) from the specified directory:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n import:workflow --separate --input"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("backups/latest/\n")])])]),e("h3",{attrs:{id:"credentials-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#credentials-2"}},[t._v("#")]),t._v(" Credentials")]),t._v(" "),e("p",[t._v("Import credentials from a specific file:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n import:credentials --input"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("file.json\n")])])]),e("p",[t._v("Import all the credentials files (*.json) from the specified directory:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("n8n import:credentials --separate --input"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("backups/latest/\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);