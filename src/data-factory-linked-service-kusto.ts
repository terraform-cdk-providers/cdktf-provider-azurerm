// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceKustoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#additional_properties DataFactoryLinkedServiceKusto#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#annotations DataFactoryLinkedServiceKusto#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#data_factory_id DataFactoryLinkedServiceKusto#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#description DataFactoryLinkedServiceKusto#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#integration_runtime_name DataFactoryLinkedServiceKusto#integration_runtime_name}
  */
  readonly integrationRuntimeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#kusto_database_name DataFactoryLinkedServiceKusto#kusto_database_name}
  */
  readonly kustoDatabaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#kusto_endpoint DataFactoryLinkedServiceKusto#kusto_endpoint}
  */
  readonly kustoEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#name DataFactoryLinkedServiceKusto#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#parameters DataFactoryLinkedServiceKusto#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#service_principal_id DataFactoryLinkedServiceKusto#service_principal_id}
  */
  readonly servicePrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#service_principal_key DataFactoryLinkedServiceKusto#service_principal_key}
  */
  readonly servicePrincipalKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#tenant DataFactoryLinkedServiceKusto#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#use_managed_identity DataFactoryLinkedServiceKusto#use_managed_identity}
  */
  readonly useManagedIdentity?: boolean;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#timeouts DataFactoryLinkedServiceKusto#timeouts}
  */
  readonly timeouts?: DataFactoryLinkedServiceKustoTimeouts;
}
export interface DataFactoryLinkedServiceKustoTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#create DataFactoryLinkedServiceKusto#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#delete DataFactoryLinkedServiceKusto#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#read DataFactoryLinkedServiceKusto#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html#update DataFactoryLinkedServiceKusto#update}
  */
  readonly update?: string;
}

function dataFactoryLinkedServiceKustoTimeoutsToTerraform(struct?: DataFactoryLinkedServiceKustoTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html azurerm_data_factory_linked_service_kusto}
*/
export class DataFactoryLinkedServiceKusto extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_kusto.html azurerm_data_factory_linked_service_kusto} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryLinkedServiceKustoConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceKustoConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_kusto',
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
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._integrationRuntimeName = config.integrationRuntimeName;
    this._kustoDatabaseName = config.kustoDatabaseName;
    this._kustoEndpoint = config.kustoEndpoint;
    this._name = config.name;
    this._parameters = config.parameters;
    this._servicePrincipalId = config.servicePrincipalId;
    this._servicePrincipalKey = config.servicePrincipalKey;
    this._tenant = config.tenant;
    this._useManagedIdentity = config.useManagedIdentity;
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

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId: string;
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId
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

  // kusto_database_name - computed: false, optional: false, required: true
  private _kustoDatabaseName: string;
  public get kustoDatabaseName() {
    return this.getStringAttribute('kusto_database_name');
  }
  public set kustoDatabaseName(value: string) {
    this._kustoDatabaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kustoDatabaseNameInput() {
    return this._kustoDatabaseName
  }

  // kusto_endpoint - computed: false, optional: false, required: true
  private _kustoEndpoint: string;
  public get kustoEndpoint() {
    return this.getStringAttribute('kusto_endpoint');
  }
  public set kustoEndpoint(value: string) {
    this._kustoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kustoEndpointInput() {
    return this._kustoEndpoint
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

  // service_principal_id - computed: false, optional: true, required: false
  private _servicePrincipalId?: string;
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string ) {
    this._servicePrincipalId = value;
  }
  public resetServicePrincipalId() {
    this._servicePrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId
  }

  // service_principal_key - computed: false, optional: true, required: false
  private _servicePrincipalKey?: string;
  public get servicePrincipalKey() {
    return this.getStringAttribute('service_principal_key');
  }
  public set servicePrincipalKey(value: string ) {
    this._servicePrincipalKey = value;
  }
  public resetServicePrincipalKey() {
    this._servicePrincipalKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalKeyInput() {
    return this._servicePrincipalKey
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string;
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string ) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant
  }

  // use_managed_identity - computed: false, optional: true, required: false
  private _useManagedIdentity?: boolean;
  public get useManagedIdentity() {
    return this.getBooleanAttribute('use_managed_identity');
  }
  public set useManagedIdentity(value: boolean ) {
    this._useManagedIdentity = value;
  }
  public resetUseManagedIdentity() {
    this._useManagedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagedIdentityInput() {
    return this._useManagedIdentity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedServiceKustoTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryLinkedServiceKustoTimeouts ) {
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
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      integration_runtime_name: cdktf.stringToTerraform(this._integrationRuntimeName),
      kusto_database_name: cdktf.stringToTerraform(this._kustoDatabaseName),
      kusto_endpoint: cdktf.stringToTerraform(this._kustoEndpoint),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
      service_principal_key: cdktf.stringToTerraform(this._servicePrincipalKey),
      tenant: cdktf.stringToTerraform(this._tenant),
      use_managed_identity: cdktf.booleanToTerraform(this._useManagedIdentity),
      timeouts: dataFactoryLinkedServiceKustoTimeoutsToTerraform(this._timeouts),
    };
  }
}
