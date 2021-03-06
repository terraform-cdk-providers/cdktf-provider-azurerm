// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceSqlServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#additional_properties DataFactoryLinkedServiceSqlServer#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#annotations DataFactoryLinkedServiceSqlServer#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#connection_string DataFactoryLinkedServiceSqlServer#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#data_factory_name DataFactoryLinkedServiceSqlServer#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#description DataFactoryLinkedServiceSqlServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#integration_runtime_name DataFactoryLinkedServiceSqlServer#integration_runtime_name}
  */
  readonly integrationRuntimeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#name DataFactoryLinkedServiceSqlServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#parameters DataFactoryLinkedServiceSqlServer#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#resource_group_name DataFactoryLinkedServiceSqlServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * key_vault_connection_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#key_vault_connection_string DataFactoryLinkedServiceSqlServer#key_vault_connection_string}
  */
  readonly keyVaultConnectionString?: DataFactoryLinkedServiceSqlServerKeyVaultConnectionString[];
  /**
  * key_vault_password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#key_vault_password DataFactoryLinkedServiceSqlServer#key_vault_password}
  */
  readonly keyVaultPassword?: DataFactoryLinkedServiceSqlServerKeyVaultPassword[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#timeouts DataFactoryLinkedServiceSqlServer#timeouts}
  */
  readonly timeouts?: DataFactoryLinkedServiceSqlServerTimeouts;
}
export interface DataFactoryLinkedServiceSqlServerKeyVaultConnectionString {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#linked_service_name DataFactoryLinkedServiceSqlServer#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#secret_name DataFactoryLinkedServiceSqlServer#secret_name}
  */
  readonly secretName: string;
}

function dataFactoryLinkedServiceSqlServerKeyVaultConnectionStringToTerraform(struct?: DataFactoryLinkedServiceSqlServerKeyVaultConnectionString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface DataFactoryLinkedServiceSqlServerKeyVaultPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#linked_service_name DataFactoryLinkedServiceSqlServer#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#secret_name DataFactoryLinkedServiceSqlServer#secret_name}
  */
  readonly secretName: string;
}

function dataFactoryLinkedServiceSqlServerKeyVaultPasswordToTerraform(struct?: DataFactoryLinkedServiceSqlServerKeyVaultPassword): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface DataFactoryLinkedServiceSqlServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#create DataFactoryLinkedServiceSqlServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#delete DataFactoryLinkedServiceSqlServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#read DataFactoryLinkedServiceSqlServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html#update DataFactoryLinkedServiceSqlServer#update}
  */
  readonly update?: string;
}

function dataFactoryLinkedServiceSqlServerTimeoutsToTerraform(struct?: DataFactoryLinkedServiceSqlServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html azurerm_data_factory_linked_service_sql_server}
*/
export class DataFactoryLinkedServiceSqlServer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sql_server.html azurerm_data_factory_linked_service_sql_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryLinkedServiceSqlServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceSqlServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_sql_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._connectionString = config.connectionString;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._integrationRuntimeName = config.integrationRuntimeName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._keyVaultConnectionString = config.keyVaultConnectionString;
    this._keyVaultPassword = config.keyVaultPassword;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string };
  public get additionalProperties() {
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } ) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[];
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[] ) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string;
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string ) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName: string;
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_runtime_name - computed: false, optional: true, required: false
  private _integrationRuntimeName?: string;
  public get integrationRuntimeName() {
    return this.getStringAttribute('integration_runtime_name');
  }
  public set integrationRuntimeName(value: string ) {
    this._integrationRuntimeName = value;
  }
  public resetIntegrationRuntimeName() {
    this._integrationRuntimeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRuntimeNameInput() {
    return this._integrationRuntimeName
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
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

  // key_vault_connection_string - computed: false, optional: true, required: false
  private _keyVaultConnectionString?: DataFactoryLinkedServiceSqlServerKeyVaultConnectionString[];
  public get keyVaultConnectionString() {
    return this.interpolationForAttribute('key_vault_connection_string') as any;
  }
  public set keyVaultConnectionString(value: DataFactoryLinkedServiceSqlServerKeyVaultConnectionString[] ) {
    this._keyVaultConnectionString = value;
  }
  public resetKeyVaultConnectionString() {
    this._keyVaultConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultConnectionStringInput() {
    return this._keyVaultConnectionString
  }

  // key_vault_password - computed: false, optional: true, required: false
  private _keyVaultPassword?: DataFactoryLinkedServiceSqlServerKeyVaultPassword[];
  public get keyVaultPassword() {
    return this.interpolationForAttribute('key_vault_password') as any;
  }
  public set keyVaultPassword(value: DataFactoryLinkedServiceSqlServerKeyVaultPassword[] ) {
    this._keyVaultPassword = value;
  }
  public resetKeyVaultPassword() {
    this._keyVaultPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPasswordInput() {
    return this._keyVaultPassword
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedServiceSqlServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryLinkedServiceSqlServerTimeouts ) {
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
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      integration_runtime_name: cdktf.stringToTerraform(this._integrationRuntimeName),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      key_vault_connection_string: cdktf.listMapper(dataFactoryLinkedServiceSqlServerKeyVaultConnectionStringToTerraform)(this._keyVaultConnectionString),
      key_vault_password: cdktf.listMapper(dataFactoryLinkedServiceSqlServerKeyVaultPasswordToTerraform)(this._keyVaultPassword),
      timeouts: dataFactoryLinkedServiceSqlServerTimeoutsToTerraform(this._timeouts),
    };
  }
}
