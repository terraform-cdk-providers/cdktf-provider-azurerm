// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiDiagnosticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#always_log_errors ApiManagementApiDiagnostic#always_log_errors}
  */
  readonly alwaysLogErrors?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#api_management_logger_id ApiManagementApiDiagnostic#api_management_logger_id}
  */
  readonly apiManagementLoggerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#api_management_name ApiManagementApiDiagnostic#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#api_name ApiManagementApiDiagnostic#api_name}
  */
  readonly apiName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#http_correlation_protocol ApiManagementApiDiagnostic#http_correlation_protocol}
  */
  readonly httpCorrelationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#identifier ApiManagementApiDiagnostic#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#log_client_ip ApiManagementApiDiagnostic#log_client_ip}
  */
  readonly logClientIp?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#resource_group_name ApiManagementApiDiagnostic#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#sampling_percentage ApiManagementApiDiagnostic#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#verbosity ApiManagementApiDiagnostic#verbosity}
  */
  readonly verbosity?: string;
  /**
  * backend_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#backend_request ApiManagementApiDiagnostic#backend_request}
  */
  readonly backendRequest?: ApiManagementApiDiagnosticBackendRequest[];
  /**
  * backend_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#backend_response ApiManagementApiDiagnostic#backend_response}
  */
  readonly backendResponse?: ApiManagementApiDiagnosticBackendResponse[];
  /**
  * frontend_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#frontend_request ApiManagementApiDiagnostic#frontend_request}
  */
  readonly frontendRequest?: ApiManagementApiDiagnosticFrontendRequest[];
  /**
  * frontend_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#frontend_response ApiManagementApiDiagnostic#frontend_response}
  */
  readonly frontendResponse?: ApiManagementApiDiagnosticFrontendResponse[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#timeouts ApiManagementApiDiagnostic#timeouts}
  */
  readonly timeouts?: ApiManagementApiDiagnosticTimeouts;
}
export interface ApiManagementApiDiagnosticBackendRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
}

function apiManagementApiDiagnosticBackendRequestToTerraform(struct?: ApiManagementApiDiagnosticBackendRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
  }
}

export interface ApiManagementApiDiagnosticBackendResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
}

function apiManagementApiDiagnosticBackendResponseToTerraform(struct?: ApiManagementApiDiagnosticBackendResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
  }
}

export interface ApiManagementApiDiagnosticFrontendRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
}

function apiManagementApiDiagnosticFrontendRequestToTerraform(struct?: ApiManagementApiDiagnosticFrontendRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
  }
}

export interface ApiManagementApiDiagnosticFrontendResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#body_bytes ApiManagementApiDiagnostic#body_bytes}
  */
  readonly bodyBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#headers_to_log ApiManagementApiDiagnostic#headers_to_log}
  */
  readonly headersToLog?: string[];
}

function apiManagementApiDiagnosticFrontendResponseToTerraform(struct?: ApiManagementApiDiagnosticFrontendResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body_bytes: cdktf.numberToTerraform(struct!.bodyBytes),
    headers_to_log: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headersToLog),
  }
}

export interface ApiManagementApiDiagnosticTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#create ApiManagementApiDiagnostic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#delete ApiManagementApiDiagnostic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#read ApiManagementApiDiagnostic#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html#update ApiManagementApiDiagnostic#update}
  */
  readonly update?: string;
}

function apiManagementApiDiagnosticTimeoutsToTerraform(struct?: ApiManagementApiDiagnosticTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html azurerm_api_management_api_diagnostic}
*/
export class ApiManagementApiDiagnostic extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_diagnostic.html azurerm_api_management_api_diagnostic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementApiDiagnosticConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementApiDiagnosticConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api_diagnostic',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alwaysLogErrors = config.alwaysLogErrors;
    this._apiManagementLoggerId = config.apiManagementLoggerId;
    this._apiManagementName = config.apiManagementName;
    this._apiName = config.apiName;
    this._httpCorrelationProtocol = config.httpCorrelationProtocol;
    this._identifier = config.identifier;
    this._logClientIp = config.logClientIp;
    this._resourceGroupName = config.resourceGroupName;
    this._samplingPercentage = config.samplingPercentage;
    this._verbosity = config.verbosity;
    this._backendRequest = config.backendRequest;
    this._backendResponse = config.backendResponse;
    this._frontendRequest = config.frontendRequest;
    this._frontendResponse = config.frontendResponse;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_log_errors - computed: true, optional: true, required: false
  private _alwaysLogErrors?: boolean;
  public get alwaysLogErrors() {
    return this.getBooleanAttribute('always_log_errors');
  }
  public set alwaysLogErrors(value: boolean) {
    this._alwaysLogErrors = value;
  }
  public resetAlwaysLogErrors() {
    this._alwaysLogErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysLogErrorsInput() {
    return this._alwaysLogErrors
  }

  // api_management_logger_id - computed: false, optional: false, required: true
  private _apiManagementLoggerId: string;
  public get apiManagementLoggerId() {
    return this.getStringAttribute('api_management_logger_id');
  }
  public set apiManagementLoggerId(value: string) {
    this._apiManagementLoggerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementLoggerIdInput() {
    return this._apiManagementLoggerId
  }

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // api_name - computed: false, optional: false, required: true
  private _apiName: string;
  public get apiName() {
    return this.getStringAttribute('api_name');
  }
  public set apiName(value: string) {
    this._apiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNameInput() {
    return this._apiName
  }

  // http_correlation_protocol - computed: true, optional: true, required: false
  private _httpCorrelationProtocol?: string;
  public get httpCorrelationProtocol() {
    return this.getStringAttribute('http_correlation_protocol');
  }
  public set httpCorrelationProtocol(value: string) {
    this._httpCorrelationProtocol = value;
  }
  public resetHttpCorrelationProtocol() {
    this._httpCorrelationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCorrelationProtocolInput() {
    return this._httpCorrelationProtocol
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier: string;
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier
  }

  // log_client_ip - computed: true, optional: true, required: false
  private _logClientIp?: boolean;
  public get logClientIp() {
    return this.getBooleanAttribute('log_client_ip');
  }
  public set logClientIp(value: boolean) {
    this._logClientIp = value;
  }
  public resetLogClientIp() {
    this._logClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logClientIpInput() {
    return this._logClientIp
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // sampling_percentage - computed: true, optional: true, required: false
  private _samplingPercentage?: number;
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
  public set samplingPercentage(value: number) {
    this._samplingPercentage = value;
  }
  public resetSamplingPercentage() {
    this._samplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentageInput() {
    return this._samplingPercentage
  }

  // verbosity - computed: true, optional: true, required: false
  private _verbosity?: string;
  public get verbosity() {
    return this.getStringAttribute('verbosity');
  }
  public set verbosity(value: string) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity
  }

  // backend_request - computed: false, optional: true, required: false
  private _backendRequest?: ApiManagementApiDiagnosticBackendRequest[];
  public get backendRequest() {
    return this.interpolationForAttribute('backend_request') as any;
  }
  public set backendRequest(value: ApiManagementApiDiagnosticBackendRequest[] ) {
    this._backendRequest = value;
  }
  public resetBackendRequest() {
    this._backendRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRequestInput() {
    return this._backendRequest
  }

  // backend_response - computed: false, optional: true, required: false
  private _backendResponse?: ApiManagementApiDiagnosticBackendResponse[];
  public get backendResponse() {
    return this.interpolationForAttribute('backend_response') as any;
  }
  public set backendResponse(value: ApiManagementApiDiagnosticBackendResponse[] ) {
    this._backendResponse = value;
  }
  public resetBackendResponse() {
    this._backendResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendResponseInput() {
    return this._backendResponse
  }

  // frontend_request - computed: false, optional: true, required: false
  private _frontendRequest?: ApiManagementApiDiagnosticFrontendRequest[];
  public get frontendRequest() {
    return this.interpolationForAttribute('frontend_request') as any;
  }
  public set frontendRequest(value: ApiManagementApiDiagnosticFrontendRequest[] ) {
    this._frontendRequest = value;
  }
  public resetFrontendRequest() {
    this._frontendRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendRequestInput() {
    return this._frontendRequest
  }

  // frontend_response - computed: false, optional: true, required: false
  private _frontendResponse?: ApiManagementApiDiagnosticFrontendResponse[];
  public get frontendResponse() {
    return this.interpolationForAttribute('frontend_response') as any;
  }
  public set frontendResponse(value: ApiManagementApiDiagnosticFrontendResponse[] ) {
    this._frontendResponse = value;
  }
  public resetFrontendResponse() {
    this._frontendResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendResponseInput() {
    return this._frontendResponse
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementApiDiagnosticTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementApiDiagnosticTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_log_errors: cdktf.booleanToTerraform(this._alwaysLogErrors),
      api_management_logger_id: cdktf.stringToTerraform(this._apiManagementLoggerId),
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      api_name: cdktf.stringToTerraform(this._apiName),
      http_correlation_protocol: cdktf.stringToTerraform(this._httpCorrelationProtocol),
      identifier: cdktf.stringToTerraform(this._identifier),
      log_client_ip: cdktf.booleanToTerraform(this._logClientIp),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
      verbosity: cdktf.stringToTerraform(this._verbosity),
      backend_request: cdktf.listMapper(apiManagementApiDiagnosticBackendRequestToTerraform)(this._backendRequest),
      backend_response: cdktf.listMapper(apiManagementApiDiagnosticBackendResponseToTerraform)(this._backendResponse),
      frontend_request: cdktf.listMapper(apiManagementApiDiagnosticFrontendRequestToTerraform)(this._frontendRequest),
      frontend_response: cdktf.listMapper(apiManagementApiDiagnosticFrontendResponseToTerraform)(this._frontendResponse),
      timeouts: apiManagementApiDiagnosticTimeoutsToTerraform(this._timeouts),
    };
  }
}
