// https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoIothubDataConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#cluster_name KustoIothubDataConnection#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#consumer_group KustoIothubDataConnection#consumer_group}
  */
  readonly consumerGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#data_format KustoIothubDataConnection#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#database_name KustoIothubDataConnection#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#event_system_properties KustoIothubDataConnection#event_system_properties}
  */
  readonly eventSystemProperties?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#iothub_id KustoIothubDataConnection#iothub_id}
  */
  readonly iothubId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#location KustoIothubDataConnection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}
  */
  readonly mappingRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#name KustoIothubDataConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#resource_group_name KustoIothubDataConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}
  */
  readonly sharedAccessPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#table_name KustoIothubDataConnection#table_name}
  */
  readonly tableName?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#timeouts KustoIothubDataConnection#timeouts}
  */
  readonly timeouts?: KustoIothubDataConnectionTimeouts;
}
export interface KustoIothubDataConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#create KustoIothubDataConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#delete KustoIothubDataConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html#read KustoIothubDataConnection#read}
  */
  readonly read?: string;
}

function kustoIothubDataConnectionTimeoutsToTerraform(struct?: KustoIothubDataConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html azurerm_kusto_iothub_data_connection}
*/
export class KustoIothubDataConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_iothub_data_connection.html azurerm_kusto_iothub_data_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoIothubDataConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: KustoIothubDataConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_iothub_data_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._consumerGroup = config.consumerGroup;
    this._dataFormat = config.dataFormat;
    this._databaseName = config.databaseName;
    this._eventSystemProperties = config.eventSystemProperties;
    this._iothubId = config.iothubId;
    this._location = config.location;
    this._mappingRuleName = config.mappingRuleName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sharedAccessPolicyName = config.sharedAccessPolicyName;
    this._tableName = config.tableName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // consumer_group - computed: false, optional: false, required: true
  private _consumerGroup: string;
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }
  public set consumerGroup(value: string) {
    this._consumerGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat?: string;
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string ) {
    this._dataFormat = value;
  }
  public resetDataFormat() {
    this._dataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // event_system_properties - computed: false, optional: true, required: false
  private _eventSystemProperties?: string[];
  public get eventSystemProperties() {
    return this.getListAttribute('event_system_properties');
  }
  public set eventSystemProperties(value: string[] ) {
    this._eventSystemProperties = value;
  }
  public resetEventSystemProperties() {
    this._eventSystemProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSystemPropertiesInput() {
    return this._eventSystemProperties
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_id - computed: false, optional: false, required: true
  private _iothubId: string;
  public get iothubId() {
    return this.getStringAttribute('iothub_id');
  }
  public set iothubId(value: string) {
    this._iothubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubIdInput() {
    return this._iothubId
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

  // mapping_rule_name - computed: false, optional: true, required: false
  private _mappingRuleName?: string;
  public get mappingRuleName() {
    return this.getStringAttribute('mapping_rule_name');
  }
  public set mappingRuleName(value: string ) {
    this._mappingRuleName = value;
  }
  public resetMappingRuleName() {
    this._mappingRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRuleNameInput() {
    return this._mappingRuleName
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

  // shared_access_policy_name - computed: false, optional: false, required: true
  private _sharedAccessPolicyName: string;
  public get sharedAccessPolicyName() {
    return this.getStringAttribute('shared_access_policy_name');
  }
  public set sharedAccessPolicyName(value: string) {
    this._sharedAccessPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessPolicyNameInput() {
    return this._sharedAccessPolicyName
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string ) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoIothubDataConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KustoIothubDataConnectionTimeouts ) {
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      consumer_group: cdktf.stringToTerraform(this._consumerGroup),
      data_format: cdktf.stringToTerraform(this._dataFormat),
      database_name: cdktf.stringToTerraform(this._databaseName),
      event_system_properties: cdktf.listMapper(cdktf.stringToTerraform)(this._eventSystemProperties),
      iothub_id: cdktf.stringToTerraform(this._iothubId),
      location: cdktf.stringToTerraform(this._location),
      mapping_rule_name: cdktf.stringToTerraform(this._mappingRuleName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shared_access_policy_name: cdktf.stringToTerraform(this._sharedAccessPolicyName),
      table_name: cdktf.stringToTerraform(this._tableName),
      timeouts: kustoIothubDataConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
