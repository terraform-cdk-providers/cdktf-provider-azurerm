// https://www.terraform.io/docs/providers/azurerm/d/database_migration_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermDatabaseMigrationProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/database_migration_project.html#name DataAzurermDatabaseMigrationProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/database_migration_project.html#resource_group_name DataAzurermDatabaseMigrationProject#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/database_migration_project.html#service_name DataAzurermDatabaseMigrationProject#service_name}
  */
  readonly serviceName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/database_migration_project.html#timeouts DataAzurermDatabaseMigrationProject#timeouts}
  */
  readonly timeouts?: DataAzurermDatabaseMigrationProjectTimeouts;
}
export interface DataAzurermDatabaseMigrationProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/database_migration_project.html#read DataAzurermDatabaseMigrationProject#read}
  */
  readonly read?: string;
}

function dataAzurermDatabaseMigrationProjectTimeoutsToTerraform(struct?: DataAzurermDatabaseMigrationProjectTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/database_migration_project.html azurerm_database_migration_project}
*/
export class DataAzurermDatabaseMigrationProject extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/database_migration_project.html azurerm_database_migration_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermDatabaseMigrationProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermDatabaseMigrationProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_database_migration_project',
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
    this._serviceName = config.serviceName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // source_platform - computed: true, optional: false, required: false
  public get sourcePlatform() {
    return this.getStringAttribute('source_platform');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // target_platform - computed: true, optional: false, required: false
  public get targetPlatform() {
    return this.getStringAttribute('target_platform');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDatabaseMigrationProjectTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermDatabaseMigrationProjectTimeouts ) {
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
      service_name: cdktf.stringToTerraform(this._serviceName),
      timeouts: dataAzurermDatabaseMigrationProjectTimeoutsToTerraform(this._timeouts),
    };
  }
}
