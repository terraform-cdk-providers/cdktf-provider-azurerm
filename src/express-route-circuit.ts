// https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteCircuitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#allow_classic_operations ExpressRouteCircuit#allow_classic_operations}
  */
  readonly allowClassicOperations?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#bandwidth_in_gbps ExpressRouteCircuit#bandwidth_in_gbps}
  */
  readonly bandwidthInGbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#bandwidth_in_mbps ExpressRouteCircuit#bandwidth_in_mbps}
  */
  readonly bandwidthInMbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#express_route_port_id ExpressRouteCircuit#express_route_port_id}
  */
  readonly expressRoutePortId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#location ExpressRouteCircuit#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#name ExpressRouteCircuit#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#peering_location ExpressRouteCircuit#peering_location}
  */
  readonly peeringLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#resource_group_name ExpressRouteCircuit#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#service_provider_name ExpressRouteCircuit#service_provider_name}
  */
  readonly serviceProviderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#tags ExpressRouteCircuit#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#sku ExpressRouteCircuit#sku}
  */
  readonly sku: ExpressRouteCircuitSku[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#timeouts ExpressRouteCircuit#timeouts}
  */
  readonly timeouts?: ExpressRouteCircuitTimeouts;
}
export interface ExpressRouteCircuitSku {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#family ExpressRouteCircuit#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#tier ExpressRouteCircuit#tier}
  */
  readonly tier: string;
}

function expressRouteCircuitSkuToTerraform(struct?: ExpressRouteCircuitSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}

export interface ExpressRouteCircuitTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#create ExpressRouteCircuit#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#delete ExpressRouteCircuit#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#read ExpressRouteCircuit#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html#update ExpressRouteCircuit#update}
  */
  readonly update?: string;
}

function expressRouteCircuitTimeoutsToTerraform(struct?: ExpressRouteCircuitTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html azurerm_express_route_circuit}
*/
export class ExpressRouteCircuit extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html azurerm_express_route_circuit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRouteCircuitConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRouteCircuitConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowClassicOperations = config.allowClassicOperations;
    this._bandwidthInGbps = config.bandwidthInGbps;
    this._bandwidthInMbps = config.bandwidthInMbps;
    this._expressRoutePortId = config.expressRoutePortId;
    this._location = config.location;
    this._name = config.name;
    this._peeringLocation = config.peeringLocation;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceProviderName = config.serviceProviderName;
    this._tags = config.tags;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_classic_operations - computed: false, optional: true, required: false
  private _allowClassicOperations?: boolean;
  public get allowClassicOperations() {
    return this.getBooleanAttribute('allow_classic_operations');
  }
  public set allowClassicOperations(value: boolean ) {
    this._allowClassicOperations = value;
  }
  public resetAllowClassicOperations() {
    this._allowClassicOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClassicOperationsInput() {
    return this._allowClassicOperations
  }

  // bandwidth_in_gbps - computed: false, optional: true, required: false
  private _bandwidthInGbps?: number;
  public get bandwidthInGbps() {
    return this.getNumberAttribute('bandwidth_in_gbps');
  }
  public set bandwidthInGbps(value: number ) {
    this._bandwidthInGbps = value;
  }
  public resetBandwidthInGbps() {
    this._bandwidthInGbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInGbpsInput() {
    return this._bandwidthInGbps
  }

  // bandwidth_in_mbps - computed: false, optional: true, required: false
  private _bandwidthInMbps?: number;
  public get bandwidthInMbps() {
    return this.getNumberAttribute('bandwidth_in_mbps');
  }
  public set bandwidthInMbps(value: number ) {
    this._bandwidthInMbps = value;
  }
  public resetBandwidthInMbps() {
    this._bandwidthInMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInMbpsInput() {
    return this._bandwidthInMbps
  }

  // express_route_port_id - computed: false, optional: true, required: false
  private _expressRoutePortId?: string;
  public get expressRoutePortId() {
    return this.getStringAttribute('express_route_port_id');
  }
  public set expressRoutePortId(value: string ) {
    this._expressRoutePortId = value;
  }
  public resetExpressRoutePortId() {
    this._expressRoutePortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRoutePortIdInput() {
    return this._expressRoutePortId
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

  // peering_location - computed: false, optional: true, required: false
  private _peeringLocation?: string;
  public get peeringLocation() {
    return this.getStringAttribute('peering_location');
  }
  public set peeringLocation(value: string ) {
    this._peeringLocation = value;
  }
  public resetPeeringLocation() {
    this._peeringLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringLocationInput() {
    return this._peeringLocation
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

  // service_key - computed: true, optional: false, required: false
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }

  // service_provider_name - computed: false, optional: true, required: false
  private _serviceProviderName?: string;
  public get serviceProviderName() {
    return this.getStringAttribute('service_provider_name');
  }
  public set serviceProviderName(value: string ) {
    this._serviceProviderName = value;
  }
  public resetServiceProviderName() {
    this._serviceProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderNameInput() {
    return this._serviceProviderName
  }

  // service_provider_provisioning_state - computed: true, optional: false, required: false
  public get serviceProviderProvisioningState() {
    return this.getStringAttribute('service_provider_provisioning_state');
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

  // sku - computed: false, optional: false, required: true
  private _sku: ExpressRouteCircuitSku[];
  public get sku() {
    return this.interpolationForAttribute('sku') as any;
  }
  public set sku(value: ExpressRouteCircuitSku[]) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteCircuitTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ExpressRouteCircuitTimeouts ) {
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
      allow_classic_operations: cdktf.booleanToTerraform(this._allowClassicOperations),
      bandwidth_in_gbps: cdktf.numberToTerraform(this._bandwidthInGbps),
      bandwidth_in_mbps: cdktf.numberToTerraform(this._bandwidthInMbps),
      express_route_port_id: cdktf.stringToTerraform(this._expressRoutePortId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      peering_location: cdktf.stringToTerraform(this._peeringLocation),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_provider_name: cdktf.stringToTerraform(this._serviceProviderName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      sku: cdktf.listMapper(expressRouteCircuitSkuToTerraform)(this._sku),
      timeouts: expressRouteCircuitTimeoutsToTerraform(this._timeouts),
    };
  }
}
