// https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationServiceEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#access_endpoint_type IntegrationServiceEnvironment#access_endpoint_type}
  */
  readonly accessEndpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#location IntegrationServiceEnvironment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#name IntegrationServiceEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#resource_group_name IntegrationServiceEnvironment#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#sku_name IntegrationServiceEnvironment#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#tags IntegrationServiceEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#virtual_network_subnet_ids IntegrationServiceEnvironment#virtual_network_subnet_ids}
  */
  readonly virtualNetworkSubnetIds: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#timeouts IntegrationServiceEnvironment#timeouts}
  */
  readonly timeouts?: IntegrationServiceEnvironmentTimeouts;
}
export interface IntegrationServiceEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#create IntegrationServiceEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#delete IntegrationServiceEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#read IntegrationServiceEnvironment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html#update IntegrationServiceEnvironment#update}
  */
  readonly update?: string;
}

function integrationServiceEnvironmentTimeoutsToTerraform(struct?: IntegrationServiceEnvironmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html azurerm_integration_service_environment}
*/
export class IntegrationServiceEnvironment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html azurerm_integration_service_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationServiceEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationServiceEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_integration_service_environment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessEndpointType = config.accessEndpointType;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._virtualNetworkSubnetIds = config.virtualNetworkSubnetIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_endpoint_type - computed: false, optional: false, required: true
  private _accessEndpointType: string;
  public get accessEndpointType() {
    return this.getStringAttribute('access_endpoint_type');
  }
  public set accessEndpointType(value: string) {
    this._accessEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndpointTypeInput() {
    return this._accessEndpointType
  }

  // connector_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get connectorEndpointIpAddresses() {
    return this.getListAttribute('connector_endpoint_ip_addresses');
  }

  // connector_outbound_ip_addresses - computed: true, optional: false, required: false
  public get connectorOutboundIpAddresses() {
    return this.getListAttribute('connector_outbound_ip_addresses');
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

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string ) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
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

  // virtual_network_subnet_ids - computed: false, optional: false, required: true
  private _virtualNetworkSubnetIds: string[];
  public get virtualNetworkSubnetIds() {
    return this.getListAttribute('virtual_network_subnet_ids');
  }
  public set virtualNetworkSubnetIds(value: string[]) {
    this._virtualNetworkSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdsInput() {
    return this._virtualNetworkSubnetIds
  }

  // workflow_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get workflowEndpointIpAddresses() {
    return this.getListAttribute('workflow_endpoint_ip_addresses');
  }

  // workflow_outbound_ip_addresses - computed: true, optional: false, required: false
  public get workflowOutboundIpAddresses() {
    return this.getListAttribute('workflow_outbound_ip_addresses');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IntegrationServiceEnvironmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IntegrationServiceEnvironmentTimeouts ) {
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
      access_endpoint_type: cdktf.stringToTerraform(this._accessEndpointType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._virtualNetworkSubnetIds),
      timeouts: integrationServiceEnvironmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
