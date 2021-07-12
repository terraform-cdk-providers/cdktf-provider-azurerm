// https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#api_management_id ApiManagementGateway#api_management_id}
  */
  readonly apiManagementId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#description ApiManagementGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#name ApiManagementGateway#name}
  */
  readonly name: string;
  /**
  * location_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#location_data ApiManagementGateway#location_data}
  */
  readonly locationData: ApiManagementGatewayLocationData[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#timeouts ApiManagementGateway#timeouts}
  */
  readonly timeouts?: ApiManagementGatewayTimeouts;
}
export interface ApiManagementGatewayLocationData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#city ApiManagementGateway#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#district ApiManagementGateway#district}
  */
  readonly district?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#name ApiManagementGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#region ApiManagementGateway#region}
  */
  readonly region?: string;
}

function apiManagementGatewayLocationDataToTerraform(struct?: ApiManagementGatewayLocationData): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    district: cdktf.stringToTerraform(struct!.district),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export interface ApiManagementGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#create ApiManagementGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#delete ApiManagementGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#read ApiManagementGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html#update ApiManagementGateway#update}
  */
  readonly update?: string;
}

function apiManagementGatewayTimeoutsToTerraform(struct?: ApiManagementGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html azurerm_api_management_gateway}
*/
export class ApiManagementGateway extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway.html azurerm_api_management_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementId = config.apiManagementId;
    this._description = config.description;
    this._name = config.name;
    this._locationData = config.locationData;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_id - computed: false, optional: false, required: true
  private _apiManagementId: string;
  public get apiManagementId() {
    return this.getStringAttribute('api_management_id');
  }
  public set apiManagementId(value: string) {
    this._apiManagementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementIdInput() {
    return this._apiManagementId
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

  // location_data - computed: false, optional: false, required: true
  private _locationData: ApiManagementGatewayLocationData[];
  public get locationData() {
    return this.interpolationForAttribute('location_data') as any;
  }
  public set locationData(value: ApiManagementGatewayLocationData[]) {
    this._locationData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationDataInput() {
    return this._locationData
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementGatewayTimeouts ) {
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
      api_management_id: cdktf.stringToTerraform(this._apiManagementId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      location_data: cdktf.listMapper(apiManagementGatewayLocationDataToTerraform)(this._locationData),
      timeouts: apiManagementGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
