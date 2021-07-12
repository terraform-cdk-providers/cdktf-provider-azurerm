// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiOperationTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html#api_operation_id ApiManagementApiOperationTag#api_operation_id}
  */
  readonly apiOperationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html#display_name ApiManagementApiOperationTag#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html#name ApiManagementApiOperationTag#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html#timeouts ApiManagementApiOperationTag#timeouts}
  */
  readonly timeouts?: ApiManagementApiOperationTagTimeouts;
}
export interface ApiManagementApiOperationTagTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html#create ApiManagementApiOperationTag#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html#delete ApiManagementApiOperationTag#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html#read ApiManagementApiOperationTag#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html#update ApiManagementApiOperationTag#update}
  */
  readonly update?: string;
}

function apiManagementApiOperationTagTimeoutsToTerraform(struct?: ApiManagementApiOperationTagTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html azurerm_api_management_api_operation_tag}
*/
export class ApiManagementApiOperationTag extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_operation_tag.html azurerm_api_management_api_operation_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementApiOperationTagConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementApiOperationTagConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api_operation_tag',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiOperationId = config.apiOperationId;
    this._displayName = config.displayName;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_operation_id - computed: false, optional: false, required: true
  private _apiOperationId: string;
  public get apiOperationId() {
    return this.getStringAttribute('api_operation_id');
  }
  public set apiOperationId(value: string) {
    this._apiOperationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiOperationIdInput() {
    return this._apiOperationId
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementApiOperationTagTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementApiOperationTagTimeouts ) {
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
      api_operation_id: cdktf.stringToTerraform(this._apiOperationId),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      timeouts: apiManagementApiOperationTagTimeoutsToTerraform(this._timeouts),
    };
  }
}
