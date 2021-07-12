// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedCustomServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#additional_properties DataFactoryLinkedCustomService#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#annotations DataFactoryLinkedCustomService#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#data_factory_id DataFactoryLinkedCustomService#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#description DataFactoryLinkedCustomService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#name DataFactoryLinkedCustomService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#parameters DataFactoryLinkedCustomService#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#type DataFactoryLinkedCustomService#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#type_properties_json DataFactoryLinkedCustomService#type_properties_json}
  */
  readonly typePropertiesJson: string;
  /**
  * integration_runtime block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#integration_runtime DataFactoryLinkedCustomService#integration_runtime}
  */
  readonly integrationRuntime?: DataFactoryLinkedCustomServiceIntegrationRuntime[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#timeouts DataFactoryLinkedCustomService#timeouts}
  */
  readonly timeouts?: DataFactoryLinkedCustomServiceTimeouts;
}
export interface DataFactoryLinkedCustomServiceIntegrationRuntime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#name DataFactoryLinkedCustomService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#parameters DataFactoryLinkedCustomService#parameters}
  */
  readonly parameters?: { [key: string]: string };
}

function dataFactoryLinkedCustomServiceIntegrationRuntimeToTerraform(struct?: DataFactoryLinkedCustomServiceIntegrationRuntime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export interface DataFactoryLinkedCustomServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#create DataFactoryLinkedCustomService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#delete DataFactoryLinkedCustomService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#read DataFactoryLinkedCustomService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html#update DataFactoryLinkedCustomService#update}
  */
  readonly update?: string;
}

function dataFactoryLinkedCustomServiceTimeoutsToTerraform(struct?: DataFactoryLinkedCustomServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html azurerm_data_factory_linked_custom_service}
*/
export class DataFactoryLinkedCustomService extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_custom_service.html azurerm_data_factory_linked_custom_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryLinkedCustomServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryLinkedCustomServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_custom_service',
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
    this._name = config.name;
    this._parameters = config.parameters;
    this._type = config.type;
    this._typePropertiesJson = config.typePropertiesJson;
    this._integrationRuntime = config.integrationRuntime;
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

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // type_properties_json - computed: false, optional: false, required: true
  private _typePropertiesJson: string;
  public get typePropertiesJson() {
    return this.getStringAttribute('type_properties_json');
  }
  public set typePropertiesJson(value: string) {
    this._typePropertiesJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typePropertiesJsonInput() {
    return this._typePropertiesJson
  }

  // integration_runtime - computed: false, optional: true, required: false
  private _integrationRuntime?: DataFactoryLinkedCustomServiceIntegrationRuntime[];
  public get integrationRuntime() {
    return this.interpolationForAttribute('integration_runtime') as any;
  }
  public set integrationRuntime(value: DataFactoryLinkedCustomServiceIntegrationRuntime[] ) {
    this._integrationRuntime = value;
  }
  public resetIntegrationRuntime() {
    this._integrationRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRuntimeInput() {
    return this._integrationRuntime
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedCustomServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryLinkedCustomServiceTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      type: cdktf.stringToTerraform(this._type),
      type_properties_json: cdktf.stringToTerraform(this._typePropertiesJson),
      integration_runtime: cdktf.listMapper(dataFactoryLinkedCustomServiceIntegrationRuntimeToTerraform)(this._integrationRuntime),
      timeouts: dataFactoryLinkedCustomServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
