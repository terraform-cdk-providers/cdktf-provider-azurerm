// https://www.terraform.io/docs/providers/azurerm/d/key_vault_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKeyVaultAccessPolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_access_policy.html#name DataAzurermKeyVaultAccessPolicyA#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_access_policy.html#timeouts DataAzurermKeyVaultAccessPolicyA#timeouts}
  */
  readonly timeouts?: DataAzurermKeyVaultAccessPolicyTimeouts;
}
export interface DataAzurermKeyVaultAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_access_policy.html#read DataAzurermKeyVaultAccessPolicyA#read}
  */
  readonly read?: string;
}

function dataAzurermKeyVaultAccessPolicyTimeoutsToTerraform(struct?: DataAzurermKeyVaultAccessPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_access_policy.html azurerm_key_vault_access_policy}
*/
export class DataAzurermKeyVaultAccessPolicyA extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_access_policy.html azurerm_key_vault_access_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKeyVaultAccessPolicyAConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultAccessPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_permissions - computed: true, optional: false, required: false
  public get certificatePermissions() {
    return this.getListAttribute('certificate_permissions');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_permissions - computed: true, optional: false, required: false
  public get keyPermissions() {
    return this.getListAttribute('key_permissions');
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

  // secret_permissions - computed: true, optional: false, required: false
  public get secretPermissions() {
    return this.getListAttribute('secret_permissions');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKeyVaultAccessPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermKeyVaultAccessPolicyTimeouts ) {
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
      timeouts: dataAzurermKeyVaultAccessPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
