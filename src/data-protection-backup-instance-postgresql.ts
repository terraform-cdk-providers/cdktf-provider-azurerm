// https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProtectionBackupInstancePostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html#backup_policy_id DataProtectionBackupInstancePostgresql#backup_policy_id}
  */
  readonly backupPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html#database_id DataProtectionBackupInstancePostgresql#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html#location DataProtectionBackupInstancePostgresql#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html#name DataProtectionBackupInstancePostgresql#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html#vault_id DataProtectionBackupInstancePostgresql#vault_id}
  */
  readonly vaultId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html#timeouts DataProtectionBackupInstancePostgresql#timeouts}
  */
  readonly timeouts?: DataProtectionBackupInstancePostgresqlTimeouts;
}
export interface DataProtectionBackupInstancePostgresqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html#create DataProtectionBackupInstancePostgresql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html#delete DataProtectionBackupInstancePostgresql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html#read DataProtectionBackupInstancePostgresql#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html#update DataProtectionBackupInstancePostgresql#update}
  */
  readonly update?: string;
}

function dataProtectionBackupInstancePostgresqlTimeoutsToTerraform(struct?: DataProtectionBackupInstancePostgresqlTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html azurerm_data_protection_backup_instance_postgresql}
*/
export class DataProtectionBackupInstancePostgresql extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_postgresql.html azurerm_data_protection_backup_instance_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupInstancePostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupInstancePostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_instance_postgresql',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupPolicyId = config.backupPolicyId;
    this._databaseId = config.databaseId;
    this._location = config.location;
    this._name = config.name;
    this._vaultId = config.vaultId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_policy_id - computed: false, optional: false, required: true
  private _backupPolicyId: string;
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyIdInput() {
    return this._backupPolicyId
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId: string;
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId
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

  // vault_id - computed: false, optional: false, required: true
  private _vaultId: string;
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataProtectionBackupInstancePostgresqlTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataProtectionBackupInstancePostgresqlTimeouts ) {
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
      backup_policy_id: cdktf.stringToTerraform(this._backupPolicyId),
      database_id: cdktf.stringToTerraform(this._databaseId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      timeouts: dataProtectionBackupInstancePostgresqlTimeoutsToTerraform(this._timeouts),
    };
  }
}
