// https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelDataConnectorMicrosoftCloudAppSecurityConfig extends cdktf.TerraformMetaArguments {
  readonly alertsEnabled?: boolean;
  readonly discoveryLogsEnabled?: boolean;
  readonly logAnalyticsWorkspaceId: string;
  readonly name: string;
  readonly tenantId?: string;
  /** timeouts block */
  readonly timeouts?: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts;
}
export interface SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function sentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsToTerraform(struct?: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SentinelDataConnectorMicrosoftCloudAppSecurity extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SentinelDataConnectorMicrosoftCloudAppSecurityConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_data_connector_microsoft_cloud_app_security',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alertsEnabled = config.alertsEnabled;
    this._discoveryLogsEnabled = config.discoveryLogsEnabled;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_enabled - computed: false, optional: true, required: false
  private _alertsEnabled?: boolean;
  public get alertsEnabled() {
    return this.getBooleanAttribute('alerts_enabled');
  }
  public set alertsEnabled(value: boolean ) {
    this._alertsEnabled = value;
  }
  public resetAlertsEnabled() {
    this._alertsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsEnabledInput() {
    return this._alertsEnabled
  }

  // discovery_logs_enabled - computed: false, optional: true, required: false
  private _discoveryLogsEnabled?: boolean;
  public get discoveryLogsEnabled() {
    return this.getBooleanAttribute('discovery_logs_enabled');
  }
  public set discoveryLogsEnabled(value: boolean ) {
    this._discoveryLogsEnabled = value;
  }
  public resetDiscoveryLogsEnabled() {
    this._discoveryLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryLogsEnabledInput() {
    return this._discoveryLogsEnabled
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
  private _timeouts?: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts ) {
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
      alerts_enabled: cdktf.booleanToTerraform(this._alertsEnabled),
      discovery_logs_enabled: cdktf.booleanToTerraform(this._discoveryLogsEnabled),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: sentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsToTerraform(this._timeouts),
    };
  }
}