// https://www.terraform.io/docs/providers/azurerm/d/function_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermFunctionAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/function_app.html#name DataAzurermFunctionApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/function_app.html#resource_group_name DataAzurermFunctionApp#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/function_app.html#tags DataAzurermFunctionApp#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/function_app.html#timeouts DataAzurermFunctionApp#timeouts}
  */
  readonly timeouts?: DataAzurermFunctionAppTimeouts;
}
export class DataAzurermFunctionAppConnectionString extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAzurermFunctionAppIdentity extends cdktf.ComplexComputedList {

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAzurermFunctionAppSiteConfigCors extends cdktf.ComplexComputedList {

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // support_credentials - computed: true, optional: false, required: false
  public get supportCredentials() {
    return this.getBooleanAttribute('support_credentials');
  }
}
export class DataAzurermFunctionAppSiteConfigIpRestrictionHeaders extends cdktf.ComplexComputedList {

  // x_azure_fdid - computed: true, optional: false, required: false
  public get xAzureFdid() {
    return this.getListAttribute('x_azure_fdid');
  }

  // x_fd_health_probe - computed: true, optional: false, required: false
  public get xFdHealthProbe() {
    return this.getListAttribute('x_fd_health_probe');
  }

  // x_forwarded_for - computed: true, optional: false, required: false
  public get xForwardedFor() {
    return this.getListAttribute('x_forwarded_for');
  }

  // x_forwarded_host - computed: true, optional: false, required: false
  public get xForwardedHost() {
    return this.getListAttribute('x_forwarded_host');
  }
}
export class DataAzurermFunctionAppSiteConfigIpRestriction extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.interpolationForAttribute('headers') as any;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }

  // virtual_network_subnet_id - computed: true, optional: false, required: false
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
}
export class DataAzurermFunctionAppSiteConfigScmIpRestrictionHeaders extends cdktf.ComplexComputedList {

  // x_azure_fdid - computed: true, optional: false, required: false
  public get xAzureFdid() {
    return this.getListAttribute('x_azure_fdid');
  }

  // x_fd_health_probe - computed: true, optional: false, required: false
  public get xFdHealthProbe() {
    return this.getListAttribute('x_fd_health_probe');
  }

  // x_forwarded_for - computed: true, optional: false, required: false
  public get xForwardedFor() {
    return this.getListAttribute('x_forwarded_for');
  }

  // x_forwarded_host - computed: true, optional: false, required: false
  public get xForwardedHost() {
    return this.getListAttribute('x_forwarded_host');
  }
}
export class DataAzurermFunctionAppSiteConfigScmIpRestriction extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.interpolationForAttribute('headers') as any;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }

  // virtual_network_subnet_id - computed: true, optional: false, required: false
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
}
export class DataAzurermFunctionAppSiteConfig extends cdktf.ComplexComputedList {

  // always_on - computed: true, optional: false, required: false
  public get alwaysOn() {
    return this.getBooleanAttribute('always_on');
  }

  // auto_swap_slot_name - computed: true, optional: false, required: false
  public get autoSwapSlotName() {
    return this.getStringAttribute('auto_swap_slot_name');
  }

  // cors - computed: true, optional: false, required: false
  public get cors() {
    return this.interpolationForAttribute('cors') as any;
  }

  // ftps_state - computed: true, optional: false, required: false
  public get ftpsState() {
    return this.getStringAttribute('ftps_state');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }

  // http2_enabled - computed: true, optional: false, required: false
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled');
  }

  // ip_restriction - computed: true, optional: false, required: false
  public get ipRestriction() {
    return this.interpolationForAttribute('ip_restriction') as any;
  }

  // java_version - computed: true, optional: false, required: false
  public get javaVersion() {
    return this.getStringAttribute('java_version');
  }

  // linux_fx_version - computed: true, optional: false, required: false
  public get linuxFxVersion() {
    return this.getStringAttribute('linux_fx_version');
  }

  // min_tls_version - computed: true, optional: false, required: false
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }

  // pre_warmed_instance_count - computed: true, optional: false, required: false
  public get preWarmedInstanceCount() {
    return this.getNumberAttribute('pre_warmed_instance_count');
  }

  // scm_ip_restriction - computed: true, optional: false, required: false
  public get scmIpRestriction() {
    return this.interpolationForAttribute('scm_ip_restriction') as any;
  }

  // scm_type - computed: true, optional: false, required: false
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }

  // scm_use_main_ip_restriction - computed: true, optional: false, required: false
  public get scmUseMainIpRestriction() {
    return this.getBooleanAttribute('scm_use_main_ip_restriction');
  }

  // use_32_bit_worker_process - computed: true, optional: false, required: false
  public get use32BitWorkerProcess() {
    return this.getBooleanAttribute('use_32_bit_worker_process');
  }

  // websockets_enabled - computed: true, optional: false, required: false
  public get websocketsEnabled() {
    return this.getBooleanAttribute('websockets_enabled');
  }
}
export class DataAzurermFunctionAppSiteCredential extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataAzurermFunctionAppSourceControl extends cdktf.ComplexComputedList {

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // manual_integration - computed: true, optional: false, required: false
  public get manualIntegration() {
    return this.getBooleanAttribute('manual_integration');
  }

  // repo_url - computed: true, optional: false, required: false
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }

  // rollback_enabled - computed: true, optional: false, required: false
  public get rollbackEnabled() {
    return this.getBooleanAttribute('rollback_enabled');
  }

  // use_mercurial - computed: true, optional: false, required: false
  public get useMercurial() {
    return this.getBooleanAttribute('use_mercurial');
  }
}
export interface DataAzurermFunctionAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/function_app.html#read DataAzurermFunctionApp#read}
  */
  readonly read?: string;
}

function dataAzurermFunctionAppTimeoutsToTerraform(struct?: DataAzurermFunctionAppTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/function_app.html azurerm_function_app}
*/
export class DataAzurermFunctionApp extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/function_app.html azurerm_function_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermFunctionAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermFunctionAppConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_function_app',
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
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_plan_id - computed: true, optional: false, required: false
  public get appServicePlanId() {
    return this.getStringAttribute('app_service_plan_id');
  }

  // app_settings - computed: true, optional: false, required: false
  public appSettings(key: string): string {
    return new cdktf.StringMap(this, 'app_settings').lookup(key);
  }

  // client_cert_mode - computed: true, optional: false, required: false
  public get clientCertMode() {
    return this.getStringAttribute('client_cert_mode');
  }

  // connection_string - computed: true, optional: false, required: false
  public connectionString(index: string) {
    return new DataAzurermFunctionAppConnectionString(this, 'connection_string', index);
  }

  // custom_domain_verification_id - computed: true, optional: false, required: false
  public get customDomainVerificationId() {
    return this.getStringAttribute('custom_domain_verification_id');
  }

  // default_hostname - computed: true, optional: false, required: false
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new DataAzurermFunctionAppIdentity(this, 'identity', index);
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // outbound_ip_addresses - computed: true, optional: false, required: false
  public get outboundIpAddresses() {
    return this.getStringAttribute('outbound_ip_addresses');
  }

  // possible_outbound_ip_addresses - computed: true, optional: false, required: false
  public get possibleOutboundIpAddresses() {
    return this.getStringAttribute('possible_outbound_ip_addresses');
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

  // site_config - computed: true, optional: false, required: false
  public siteConfig(index: string) {
    return new DataAzurermFunctionAppSiteConfig(this, 'site_config', index);
  }

  // site_credential - computed: true, optional: false, required: false
  public siteCredential(index: string) {
    return new DataAzurermFunctionAppSiteCredential(this, 'site_credential', index);
  }

  // source_control - computed: true, optional: false, required: false
  public sourceControl(index: string) {
    return new DataAzurermFunctionAppSourceControl(this, 'source_control', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermFunctionAppTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermFunctionAppTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: dataAzurermFunctionAppTimeoutsToTerraform(this._timeouts),
    };
  }
}
