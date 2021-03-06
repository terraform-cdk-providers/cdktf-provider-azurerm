// https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelDataConnectorOffice365Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#exchange_enabled SentinelDataConnectorOffice365#exchange_enabled}
  */
  readonly exchangeEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#log_analytics_workspace_id SentinelDataConnectorOffice365#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#name SentinelDataConnectorOffice365#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#sharepoint_enabled SentinelDataConnectorOffice365#sharepoint_enabled}
  */
  readonly sharepointEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#teams_enabled SentinelDataConnectorOffice365#teams_enabled}
  */
  readonly teamsEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#tenant_id SentinelDataConnectorOffice365#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#timeouts SentinelDataConnectorOffice365#timeouts}
  */
  readonly timeouts?: SentinelDataConnectorOffice365Timeouts;
}
export interface SentinelDataConnectorOffice365Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#create SentinelDataConnectorOffice365#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#delete SentinelDataConnectorOffice365#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#read SentinelDataConnectorOffice365#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html#update SentinelDataConnectorOffice365#update}
  */
  readonly update?: string;
}

function sentinelDataConnectorOffice365TimeoutsToTerraform(struct?: SentinelDataConnectorOffice365Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html azurerm_sentinel_data_connector_office_365}
*/
export class SentinelDataConnectorOffice365 extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_office_365.html azurerm_sentinel_data_connector_office_365} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelDataConnectorOffice365Config
  */
  public constructor(scope: Construct, id: string, config: SentinelDataConnectorOffice365Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_data_connector_office_365',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._exchangeEnabled = config.exchangeEnabled;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._sharepointEnabled = config.sharepointEnabled;
    this._teamsEnabled = config.teamsEnabled;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exchange_enabled - computed: false, optional: true, required: false
  private _exchangeEnabled?: boolean;
  public get exchangeEnabled() {
    return this.getBooleanAttribute('exchange_enabled');
  }
  public set exchangeEnabled(value: boolean ) {
    this._exchangeEnabled = value;
  }
  public resetExchangeEnabled() {
    this._exchangeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeEnabledInput() {
    return this._exchangeEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId: string;
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId
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

  // sharepoint_enabled - computed: false, optional: true, required: false
  private _sharepointEnabled?: boolean;
  public get sharepointEnabled() {
    return this.getBooleanAttribute('sharepoint_enabled');
  }
  public set sharepointEnabled(value: boolean ) {
    this._sharepointEnabled = value;
  }
  public resetSharepointEnabled() {
    this._sharepointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharepointEnabledInput() {
    return this._sharepointEnabled
  }

  // teams_enabled - computed: false, optional: true, required: false
  private _teamsEnabled?: boolean;
  public get teamsEnabled() {
    return this.getBooleanAttribute('teams_enabled');
  }
  public set teamsEnabled(value: boolean ) {
    this._teamsEnabled = value;
  }
  public resetTeamsEnabled() {
    this._teamsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsEnabledInput() {
    return this._teamsEnabled
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string;
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SentinelDataConnectorOffice365Timeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SentinelDataConnectorOffice365Timeouts ) {
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
      exchange_enabled: cdktf.booleanToTerraform(this._exchangeEnabled),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      sharepoint_enabled: cdktf.booleanToTerraform(this._sharepointEnabled),
      teams_enabled: cdktf.booleanToTerraform(this._teamsEnabled),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: sentinelDataConnectorOffice365TimeoutsToTerraform(this._timeouts),
    };
  }
}
