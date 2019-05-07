/**
 * Auto-generated action file for "SlideRoom API V2" API.
 *
 * Generated at: 2019-05-07T14:44:06.945Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / slideroom-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Application_RequestExportByApplicationIdV2'
 * Endpoint Path: '/api/v2/application/{applicationId}/request-export'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "applicationId",
    "format",
    "roundType",
    "roundName",
    "tab.export",
    "pdf.includeForms",
    "pdf.includeReferences",
    "pdf.includeMedia",
    "pdf.includeApplicantAttachments",
    "pdf.includeOrganizationAttachments",
    "pdf.includeRatings",
    "pdf.includeFullPageMedia",
    "pdf.includeHighlights",
    "pdf.includeComments",
    "pdf.includeCommonApp",
    "zip.originalMedia",
    "zip.includeForms",
    "zip.includeReferences",
    "zip.includeMedia",
    "zip.includeApplicantAttachments",
    "zip.includeOrganizationAttachments",
    "zip.includeRatings",
    "zip.includeComments",
    "zip.includeCommonApp",
    "delivery.account",
    "delivery.folder"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "applicationId": "applicationId",
    "format": "format",
    "roundType": "roundType",
    "roundName": "roundName",
    "tab_export": "tab.export",
    "pdf_includeForms": "pdf.includeForms",
    "pdf_includeReferences": "pdf.includeReferences",
    "pdf_includeMedia": "pdf.includeMedia",
    "pdf_includeApplicantAttachments": "pdf.includeApplicantAttachments",
    "pdf_includeOrganizationAttachments": "pdf.includeOrganizationAttachments",
    "pdf_includeRatings": "pdf.includeRatings",
    "pdf_includeFullPageMedia": "pdf.includeFullPageMedia",
    "pdf_includeHighlights": "pdf.includeHighlights",
    "pdf_includeComments": "pdf.includeComments",
    "pdf_includeCommonApp": "pdf.includeCommonApp",
    "zip_originalMedia": "zip.originalMedia",
    "zip_includeForms": "zip.includeForms",
    "zip_includeReferences": "zip.includeReferences",
    "zip_includeMedia": "zip.includeMedia",
    "zip_includeApplicantAttachments": "zip.includeApplicantAttachments",
    "zip_includeOrganizationAttachments": "zip.includeOrganizationAttachments",
    "zip_includeRatings": "zip.includeRatings",
    "zip_includeComments": "zip.includeComments",
    "zip_includeCommonApp": "zip.includeCommonApp",
    "delivery_account": "delivery.account",
    "delivery_folder": "delivery.folder"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'Application_RequestExportByApplicationIdV2',
        pathName: '/api/v2/application/{applicationId}/request-export',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}