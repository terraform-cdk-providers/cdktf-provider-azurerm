// https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#authorization_key ExpressRouteConnection#authorization_key}
  */
  readonly authorizationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#enable_internet_security ExpressRouteConnection#enable_internet_security}
  */
  readonly enableInternetSecurity?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#express_route_circuit_peering_id ExpressRouteConnection#express_route_circuit_peering_id}
  */
  readonly expressRouteCircuitPeeringId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#express_route_gateway_id ExpressRouteConnection#express_route_gateway_id}
  */
  readonly expressRouteGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#name ExpressRouteConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#routing_weight ExpressRouteConnection#routing_weight}
  */
  readonly routingWeight?: number;
  /**
  * routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#routing ExpressRouteConnection#routing}
  */
  readonly routing?: ExpressRouteConnectionRouting[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#timeouts ExpressRouteConnection#timeouts}
  */
  readonly timeouts?: ExpressRouteConnectionTimeouts;
}
export interface ExpressRouteConnectionRoutingPropagatedRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#labels ExpressRouteConnection#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#route_table_ids ExpressRouteConnection#route_table_ids}
  */
  readonly routeTableIds?: string[];
}

function expressRouteConnectionRoutingPropagatedRouteTableToTerraform(struct?: ExpressRouteConnectionRoutingPropagatedRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.labels),
    route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.routeTableIds),
  }
}

export interface ExpressRouteConnectionRouting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#associated_route_table_id ExpressRouteConnection#associated_route_table_id}
  */
  readonly associatedRouteTableId?: string;
  /**
  * propagated_route_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#propagated_route_table ExpressRouteConnection#propagated_route_table}
  */
  readonly propagatedRouteTable?: ExpressRouteConnectionRoutingPropagatedRouteTable[];
}

function expressRouteConnectionRoutingToTerraform(struct?: ExpressRouteConnectionRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    associated_route_table_id: cdktf.stringToTerraform(struct!.associatedRouteTableId),
    propagated_route_table: cdktf.listMapper(expressRouteConnectionRoutingPropagatedRouteTableToTerraform)(struct!.propagatedRouteTable),
  }
}

export interface ExpressRouteConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#create ExpressRouteConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#delete ExpressRouteConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#read ExpressRouteConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#update ExpressRouteConnection#update}
  */
  readonly update?: string;
}

function expressRouteConnectionTimeoutsToTerraform(struct?: ExpressRouteConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html azurerm_express_route_connection}
*/
export class ExpressRouteConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html azurerm_express_route_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRouteConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRouteConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizationKey = config.authorizationKey;
    this._enableInternetSecurity = config.enableInternetSecurity;
    this._expressRouteCircuitPeeringId = config.expressRouteCircuitPeeringId;
    this._expressRouteGatewayId = config.expressRouteGatewayId;
    this._name = config.name;
    this._routingWeight = config.routingWeight;
    this._routing = config.routing;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: false, optional: true, required: false
  private _authorizationKey?: string;
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }
  public set authorizationKey(value: string ) {
    this._authorizationKey = value;
  }
  public resetAuthorizationKey() {
    this._authorizationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationKeyInput() {
    return this._authorizationKey
  }

  // enable_internet_security - computed: false, optional: true, required: false
  private _enableInternetSecurity?: boolean;
  public get enableInternetSecurity() {
    return this.getBooleanAttribute('enable_internet_security');
  }
  public set enableInternetSecurity(value: boolean ) {
    this._enableInternetSecurity = value;
  }
  public resetEnableInternetSecurity() {
    this._enableInternetSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetSecurityInput() {
    return this._enableInternetSecurity
  }

  // express_route_circuit_peering_id - computed: false, optional: false, required: true
  private _expressRouteCircuitPeeringId: string;
  public get expressRouteCircuitPeeringId() {
    return this.getStringAttribute('express_route_circuit_peering_id');
  }
  public set expressRouteCircuitPeeringId(value: string) {
    this._expressRouteCircuitPeeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitPeeringIdInput() {
    return this._expressRouteCircuitPeeringId
  }

  // express_route_gateway_id - computed: false, optional: false, required: true
  private _expressRouteGatewayId: string;
  public get expressRouteGatewayId() {
    return this.getStringAttribute('express_route_gateway_id');
  }
  public set expressRouteGatewayId(value: string) {
    this._expressRouteGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteGatewayIdInput() {
    return this._expressRouteGatewayId
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

  // routing_weight - computed: false, optional: true, required: false
  private _routingWeight?: number;
  public get routingWeight() {
    return this.getNumberAttribute('routing_weight');
  }
  public set routingWeight(value: number ) {
    this._routingWeight = value;
  }
  public resetRoutingWeight() {
    this._routingWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingWeightInput() {
    return this._routingWeight
  }

  // routing - computed: false, optional: true, required: false
  private _routing?: ExpressRouteConnectionRouting[];
  public get routing() {
    return this.interpolationForAttribute('routing') as any;
  }
  public set routing(value: ExpressRouteConnectionRouting[] ) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ExpressRouteConnectionTimeouts ) {
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
      authorization_key: cdktf.stringToTerraform(this._authorizationKey),
      enable_internet_security: cdktf.booleanToTerraform(this._enableInternetSecurity),
      express_route_circuit_peering_id: cdktf.stringToTerraform(this._expressRouteCircuitPeeringId),
      express_route_gateway_id: cdktf.stringToTerraform(this._expressRouteGatewayId),
      name: cdktf.stringToTerraform(this._name),
      routing_weight: cdktf.numberToTerraform(this._routingWeight),
      routing: cdktf.listMapper(expressRouteConnectionRoutingToTerraform)(this._routing),
      timeouts: expressRouteConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
