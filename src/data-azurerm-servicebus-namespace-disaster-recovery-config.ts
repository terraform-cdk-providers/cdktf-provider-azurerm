// https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_disaster_recovery_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_disaster_recovery_config.html#name DataAzurermServicebusNamespaceDisasterRecoveryConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_disaster_recovery_config.html#namespace_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_disaster_recovery_config.html#resource_group_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_disaster_recovery_config.html#timeouts DataAzurermServicebusNamespaceDisasterRecoveryConfig#timeouts}
  */
  readonly timeouts?: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts;
}
export interface DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_disaster_recovery_config.html#read DataAzurermServicebusNamespaceDisasterRecoveryConfig#read}
  */
  readonly read?: string;
}

function dataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsToTerraform(struct?: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_disaster_recovery_config.html azurerm_servicebus_namespace_disaster_recovery_config}
*/
export class DataAzurermServicebusNamespaceDisasterRecoveryConfig extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_disaster_recovery_config.html azurerm_servicebus_namespace_disaster_recovery_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_namespace_disaster_recovery_config',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_primary_connection_string - computed: true, optional: false, required: false
  public get aliasPrimaryConnectionString() {
    return this.getStringAttribute('alias_primary_connection_string');
  }

  // alias_secondary_connection_string - computed: true, optional: false, required: false
  public get aliasSecondaryConnectionString() {
    return this.getStringAttribute('alias_secondary_connection_string');
  }

  // default_primary_key - computed: true, optional: false, required: false
  public get defaultPrimaryKey() {
    return this.getStringAttribute('default_primary_key');
  }

  // default_secondary_key - computed: true, optional: false, required: false
  public get defaultSecondaryKey() {
    return this.getStringAttribute('default_secondary_key');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // partner_namespace_id - computed: true, optional: false, required: false
  public get partnerNamespaceId() {
    return this.getStringAttribute('partner_namespace_id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts ) {
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
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
