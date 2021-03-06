// https://www.terraform.io/docs/providers/azurerm/d/servicebus_queue_authorization_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermServicebusQueueAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_queue_authorization_rule.html#name DataAzurermServicebusQueueAuthorizationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_queue_authorization_rule.html#namespace_name DataAzurermServicebusQueueAuthorizationRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_queue_authorization_rule.html#queue_name DataAzurermServicebusQueueAuthorizationRule#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_queue_authorization_rule.html#resource_group_name DataAzurermServicebusQueueAuthorizationRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_queue_authorization_rule.html#timeouts DataAzurermServicebusQueueAuthorizationRule#timeouts}
  */
  readonly timeouts?: DataAzurermServicebusQueueAuthorizationRuleTimeouts;
}
export interface DataAzurermServicebusQueueAuthorizationRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_queue_authorization_rule.html#read DataAzurermServicebusQueueAuthorizationRule#read}
  */
  readonly read?: string;
}

function dataAzurermServicebusQueueAuthorizationRuleTimeoutsToTerraform(struct?: DataAzurermServicebusQueueAuthorizationRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_queue_authorization_rule.html azurerm_servicebus_queue_authorization_rule}
*/
export class DataAzurermServicebusQueueAuthorizationRule extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_queue_authorization_rule.html azurerm_servicebus_queue_authorization_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermServicebusQueueAuthorizationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermServicebusQueueAuthorizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_queue_authorization_rule',
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
    this._queueName = config.queueName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listen - computed: true, optional: false, required: false
  public get listen() {
    return this.getBooleanAttribute('listen');
  }

  // manage - computed: true, optional: false, required: false
  public get manage() {
    return this.getBooleanAttribute('manage');
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

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName: string;
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName
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

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // send - computed: true, optional: false, required: false
  public get send() {
    return this.getBooleanAttribute('send');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermServicebusQueueAuthorizationRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermServicebusQueueAuthorizationRuleTimeouts ) {
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
      queue_name: cdktf.stringToTerraform(this._queueName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermServicebusQueueAuthorizationRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
