// https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlElasticpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#db_dtu_max SqlElasticpool#db_dtu_max}
  */
  readonly dbDtuMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#db_dtu_min SqlElasticpool#db_dtu_min}
  */
  readonly dbDtuMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#dtu SqlElasticpool#dtu}
  */
  readonly dtu: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#edition SqlElasticpool#edition}
  */
  readonly edition: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#location SqlElasticpool#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#name SqlElasticpool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#pool_size SqlElasticpool#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#resource_group_name SqlElasticpool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#server_name SqlElasticpool#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#tags SqlElasticpool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#timeouts SqlElasticpool#timeouts}
  */
  readonly timeouts?: SqlElasticpoolTimeouts;
}
export interface SqlElasticpoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#create SqlElasticpool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#delete SqlElasticpool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#read SqlElasticpool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html#update SqlElasticpool#update}
  */
  readonly update?: string;
}

function sqlElasticpoolTimeoutsToTerraform(struct?: SqlElasticpoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html azurerm_sql_elasticpool}
*/
export class SqlElasticpool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html azurerm_sql_elasticpool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlElasticpoolConfig
  */
  public constructor(scope: Construct, id: string, config: SqlElasticpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_elasticpool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbDtuMax = config.dbDtuMax;
    this._dbDtuMin = config.dbDtuMin;
    this._dtu = config.dtu;
    this._edition = config.edition;
    this._location = config.location;
    this._name = config.name;
    this._poolSize = config.poolSize;
    this._resourceGroupName = config.resourceGroupName;
    this._serverName = config.serverName;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // db_dtu_max - computed: true, optional: true, required: false
  private _dbDtuMax?: number;
  public get dbDtuMax() {
    return this.getNumberAttribute('db_dtu_max');
  }
  public set dbDtuMax(value: number) {
    this._dbDtuMax = value;
  }
  public resetDbDtuMax() {
    this._dbDtuMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDtuMaxInput() {
    return this._dbDtuMax
  }

  // db_dtu_min - computed: true, optional: true, required: false
  private _dbDtuMin?: number;
  public get dbDtuMin() {
    return this.getNumberAttribute('db_dtu_min');
  }
  public set dbDtuMin(value: number) {
    this._dbDtuMin = value;
  }
  public resetDbDtuMin() {
    this._dbDtuMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDtuMinInput() {
    return this._dbDtuMin
  }

  // dtu - computed: false, optional: false, required: true
  private _dtu: number;
  public get dtu() {
    return this.getNumberAttribute('dtu');
  }
  public set dtu(value: number) {
    this._dtu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dtuInput() {
    return this._dtu
  }

  // edition - computed: false, optional: false, required: true
  private _edition: string;
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition
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

  // pool_size - computed: true, optional: true, required: false
  private _poolSize?: number;
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize
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

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName
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
  private _timeouts?: SqlElasticpoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SqlElasticpoolTimeouts ) {
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
      db_dtu_max: cdktf.numberToTerraform(this._dbDtuMax),
      db_dtu_min: cdktf.numberToTerraform(this._dbDtuMin),
      dtu: cdktf.numberToTerraform(this._dtu),
      edition: cdktf.stringToTerraform(this._edition),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      pool_size: cdktf.numberToTerraform(this._poolSize),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_name: cdktf.stringToTerraform(this._serverName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: sqlElasticpoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
