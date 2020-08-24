// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_app_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermAppServiceConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermAppServiceTimeouts;
}
export class DataAzurermAppServiceConnectionString extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAzurermAppServiceSiteConfigCors extends ComplexComputedList {

  // allowed_origins - computed: true, optional: false, required: true
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // support_credentials - computed: true, optional: false, required: true
  public get supportCredentials() {
    return this.getBooleanAttribute('support_credentials');
  }
}
export class DataAzurermAppServiceSiteConfigIpRestriction extends ComplexComputedList {

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // virtual_network_subnet_id - computed: true, optional: false, required: true
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
}
export class DataAzurermAppServiceSiteConfig extends ComplexComputedList {

  // always_on - computed: true, optional: false, required: true
  public get alwaysOn() {
    return this.getBooleanAttribute('always_on');
  }

  // app_command_line - computed: true, optional: false, required: true
  public get appCommandLine() {
    return this.getStringAttribute('app_command_line');
  }

  // cors - computed: true, optional: false, required: true
  public get cors() {
    return 'not implemented' as any;
  }

  // default_documents - computed: true, optional: false, required: true
  public get defaultDocuments() {
    return this.getListAttribute('default_documents');
  }

  // dotnet_framework_version - computed: true, optional: false, required: true
  public get dotnetFrameworkVersion() {
    return this.getStringAttribute('dotnet_framework_version');
  }

  // ftps_state - computed: true, optional: false, required: true
  public get ftpsState() {
    return this.getStringAttribute('ftps_state');
  }

  // http2_enabled - computed: true, optional: false, required: true
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled');
  }

  // ip_restriction - computed: true, optional: false, required: true
  public get ipRestriction() {
    return 'not implemented' as any;
  }

  // java_container - computed: true, optional: false, required: true
  public get javaContainer() {
    return this.getStringAttribute('java_container');
  }

  // java_container_version - computed: true, optional: false, required: true
  public get javaContainerVersion() {
    return this.getStringAttribute('java_container_version');
  }

  // java_version - computed: true, optional: false, required: true
  public get javaVersion() {
    return this.getStringAttribute('java_version');
  }

  // linux_fx_version - computed: true, optional: false, required: true
  public get linuxFxVersion() {
    return this.getStringAttribute('linux_fx_version');
  }

  // local_mysql_enabled - computed: true, optional: false, required: true
  public get localMysqlEnabled() {
    return this.getBooleanAttribute('local_mysql_enabled');
  }

  // managed_pipeline_mode - computed: true, optional: false, required: true
  public get managedPipelineMode() {
    return this.getStringAttribute('managed_pipeline_mode');
  }

  // min_tls_version - computed: true, optional: false, required: true
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }

  // php_version - computed: true, optional: false, required: true
  public get phpVersion() {
    return this.getStringAttribute('php_version');
  }

  // python_version - computed: true, optional: false, required: true
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }

  // remote_debugging_enabled - computed: true, optional: false, required: true
  public get remoteDebuggingEnabled() {
    return this.getBooleanAttribute('remote_debugging_enabled');
  }

  // remote_debugging_version - computed: true, optional: false, required: true
  public get remoteDebuggingVersion() {
    return this.getStringAttribute('remote_debugging_version');
  }

  // scm_type - computed: true, optional: false, required: true
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }

  // use_32_bit_worker_process - computed: true, optional: false, required: true
  public get use32BitWorkerProcess() {
    return this.getBooleanAttribute('use_32_bit_worker_process');
  }

  // websockets_enabled - computed: true, optional: false, required: true
  public get websocketsEnabled() {
    return this.getBooleanAttribute('websockets_enabled');
  }

  // windows_fx_version - computed: true, optional: false, required: true
  public get windowsFxVersion() {
    return this.getStringAttribute('windows_fx_version');
  }
}
export class DataAzurermAppServiceSiteCredential extends ComplexComputedList {

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataAzurermAppServiceSourceControl extends ComplexComputedList {

  // branch - computed: true, optional: false, required: true
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // repo_url - computed: true, optional: false, required: true
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
}
export interface DataAzurermAppServiceTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermAppService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermAppServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_plan_id - computed: true, optional: false, required: true
  public get appServicePlanId() {
    return this.getStringAttribute('app_service_plan_id');
  }

  // app_settings - computed: true, optional: false, required: true
  public appSettings(key: string): string {
    return new StringMap(this, 'app_settings').lookup(key);
  }

  // client_affinity_enabled - computed: true, optional: false, required: true
  public get clientAffinityEnabled() {
    return this.getBooleanAttribute('client_affinity_enabled');
  }

  // client_cert_enabled - computed: true, optional: false, required: true
  public get clientCertEnabled() {
    return this.getBooleanAttribute('client_cert_enabled');
  }

  // connection_string - computed: true, optional: false, required: true
  public connectionString(index: string) {
    return new DataAzurermAppServiceConnectionString(this, 'connection_string', index);
  }

  // default_site_hostname - computed: true, optional: false, required: true
  public get defaultSiteHostname() {
    return this.getStringAttribute('default_site_hostname');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // https_only - computed: true, optional: false, required: true
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // outbound_ip_addresses - computed: true, optional: false, required: true
  public get outboundIpAddresses() {
    return this.getStringAttribute('outbound_ip_addresses');
  }

  // possible_outbound_ip_addresses - computed: true, optional: false, required: true
  public get possibleOutboundIpAddresses() {
    return this.getStringAttribute('possible_outbound_ip_addresses');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // site_config - computed: true, optional: false, required: true
  public siteConfig(index: string) {
    return new DataAzurermAppServiceSiteConfig(this, 'site_config', index);
  }

  // site_credential - computed: true, optional: false, required: true
  public siteCredential(index: string) {
    return new DataAzurermAppServiceSiteCredential(this, 'site_credential', index);
  }

  // source_control - computed: true, optional: false, required: true
  public sourceControl(index: string) {
    return new DataAzurermAppServiceSourceControl(this, 'source_control', index);
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermAppServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermAppServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
