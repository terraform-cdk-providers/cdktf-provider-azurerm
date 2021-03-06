// https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnalysisServicesServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#admin_users AnalysisServicesServer#admin_users}
  */
  readonly adminUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}
  */
  readonly backupBlobContainerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#enable_power_bi_service AnalysisServicesServer#enable_power_bi_service}
  */
  readonly enablePowerBiService?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#location AnalysisServicesServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#name AnalysisServicesServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}
  */
  readonly querypoolConnectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#resource_group_name AnalysisServicesServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#sku AnalysisServicesServer#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#tags AnalysisServicesServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * ipv4_firewall_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#ipv4_firewall_rule AnalysisServicesServer#ipv4_firewall_rule}
  */
  readonly ipv4FirewallRule?: AnalysisServicesServerIpv4FirewallRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#timeouts AnalysisServicesServer#timeouts}
  */
  readonly timeouts?: AnalysisServicesServerTimeouts;
}
export interface AnalysisServicesServerIpv4FirewallRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#name AnalysisServicesServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#range_end AnalysisServicesServer#range_end}
  */
  readonly rangeEnd: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#range_start AnalysisServicesServer#range_start}
  */
  readonly rangeStart: string;
}

function analysisServicesServerIpv4FirewallRuleToTerraform(struct?: AnalysisServicesServerIpv4FirewallRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    range_end: cdktf.stringToTerraform(struct!.rangeEnd),
    range_start: cdktf.stringToTerraform(struct!.rangeStart),
  }
}

export interface AnalysisServicesServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#create AnalysisServicesServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#delete AnalysisServicesServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#read AnalysisServicesServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html#update AnalysisServicesServer#update}
  */
  readonly update?: string;
}

function analysisServicesServerTimeoutsToTerraform(struct?: AnalysisServicesServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html azurerm_analysis_services_server}
*/
export class AnalysisServicesServer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html azurerm_analysis_services_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnalysisServicesServerConfig
  */
  public constructor(scope: Construct, id: string, config: AnalysisServicesServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_analysis_services_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminUsers = config.adminUsers;
    this._backupBlobContainerUri = config.backupBlobContainerUri;
    this._enablePowerBiService = config.enablePowerBiService;
    this._location = config.location;
    this._name = config.name;
    this._querypoolConnectionMode = config.querypoolConnectionMode;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._ipv4FirewallRule = config.ipv4FirewallRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_users - computed: false, optional: true, required: false
  private _adminUsers?: string[];
  public get adminUsers() {
    return this.getListAttribute('admin_users');
  }
  public set adminUsers(value: string[] ) {
    this._adminUsers = value;
  }
  public resetAdminUsers() {
    this._adminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers
  }

  // backup_blob_container_uri - computed: false, optional: true, required: false
  private _backupBlobContainerUri?: string;
  public get backupBlobContainerUri() {
    return this.getStringAttribute('backup_blob_container_uri');
  }
  public set backupBlobContainerUri(value: string ) {
    this._backupBlobContainerUri = value;
  }
  public resetBackupBlobContainerUri() {
    this._backupBlobContainerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupBlobContainerUriInput() {
    return this._backupBlobContainerUri
  }

  // enable_power_bi_service - computed: false, optional: true, required: false
  private _enablePowerBiService?: boolean;
  public get enablePowerBiService() {
    return this.getBooleanAttribute('enable_power_bi_service');
  }
  public set enablePowerBiService(value: boolean ) {
    this._enablePowerBiService = value;
  }
  public resetEnablePowerBiService() {
    this._enablePowerBiService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePowerBiServiceInput() {
    return this._enablePowerBiService
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // querypool_connection_mode - computed: true, optional: true, required: false
  private _querypoolConnectionMode?: string;
  public get querypoolConnectionMode() {
    return this.getStringAttribute('querypool_connection_mode');
  }
  public set querypoolConnectionMode(value: string) {
    this._querypoolConnectionMode = value;
  }
  public resetQuerypoolConnectionMode() {
    this._querypoolConnectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querypoolConnectionModeInput() {
    return this._querypoolConnectionMode
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

  // server_full_name - computed: true, optional: false, required: false
  public get serverFullName() {
    return this.getStringAttribute('server_full_name');
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // ipv4_firewall_rule - computed: false, optional: true, required: false
  private _ipv4FirewallRule?: AnalysisServicesServerIpv4FirewallRule[];
  public get ipv4FirewallRule() {
    return this.interpolationForAttribute('ipv4_firewall_rule') as any;
  }
  public set ipv4FirewallRule(value: AnalysisServicesServerIpv4FirewallRule[] ) {
    this._ipv4FirewallRule = value;
  }
  public resetIpv4FirewallRule() {
    this._ipv4FirewallRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FirewallRuleInput() {
    return this._ipv4FirewallRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AnalysisServicesServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AnalysisServicesServerTimeouts ) {
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
      admin_users: cdktf.listMapper(cdktf.stringToTerraform)(this._adminUsers),
      backup_blob_container_uri: cdktf.stringToTerraform(this._backupBlobContainerUri),
      enable_power_bi_service: cdktf.booleanToTerraform(this._enablePowerBiService),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      querypool_connection_mode: cdktf.stringToTerraform(this._querypoolConnectionMode),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      ipv4_firewall_rule: cdktf.listMapper(analysisServicesServerIpv4FirewallRuleToTerraform)(this._ipv4FirewallRule),
      timeouts: analysisServicesServerTimeoutsToTerraform(this._timeouts),
    };
  }
}
