// https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace_customer_managed_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabricksWorkspaceCustomerManagedKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace_customer_managed_key.html#key_vault_key_id DatabricksWorkspaceCustomerManagedKey#key_vault_key_id}
  */
  readonly keyVaultKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace_customer_managed_key.html#workspace_id DatabricksWorkspaceCustomerManagedKey#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace_customer_managed_key.html#timeouts DatabricksWorkspaceCustomerManagedKey#timeouts}
  */
  readonly timeouts?: DatabricksWorkspaceCustomerManagedKeyTimeouts;
}
export interface DatabricksWorkspaceCustomerManagedKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace_customer_managed_key.html#create DatabricksWorkspaceCustomerManagedKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace_customer_managed_key.html#delete DatabricksWorkspaceCustomerManagedKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace_customer_managed_key.html#read DatabricksWorkspaceCustomerManagedKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace_customer_managed_key.html#update DatabricksWorkspaceCustomerManagedKey#update}
  */
  readonly update?: string;
}

function databricksWorkspaceCustomerManagedKeyTimeoutsToTerraform(struct?: DatabricksWorkspaceCustomerManagedKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace_customer_managed_key.html azurerm_databricks_workspace_customer_managed_key}
*/
export class DatabricksWorkspaceCustomerManagedKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace_customer_managed_key.html azurerm_databricks_workspace_customer_managed_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabricksWorkspaceCustomerManagedKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DatabricksWorkspaceCustomerManagedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_databricks_workspace_customer_managed_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._workspaceId = config.workspaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_key_id - computed: false, optional: false, required: true
  private _keyVaultKeyId: string;
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId: string;
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabricksWorkspaceCustomerManagedKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DatabricksWorkspaceCustomerManagedKeyTimeouts ) {
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
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: databricksWorkspaceCustomerManagedKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
