// https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteCircuitConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#address_prefix_ipv4 ExpressRouteCircuitConnection#address_prefix_ipv4}
  */
  readonly addressPrefixIpv4: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#address_prefix_ipv6 ExpressRouteCircuitConnection#address_prefix_ipv6}
  */
  readonly addressPrefixIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#authorization_key ExpressRouteCircuitConnection#authorization_key}
  */
  readonly authorizationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#name ExpressRouteCircuitConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#peer_peering_id ExpressRouteCircuitConnection#peer_peering_id}
  */
  readonly peerPeeringId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#peering_id ExpressRouteCircuitConnection#peering_id}
  */
  readonly peeringId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#timeouts ExpressRouteCircuitConnection#timeouts}
  */
  readonly timeouts?: ExpressRouteCircuitConnectionTimeouts;
}
export interface ExpressRouteCircuitConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#create ExpressRouteCircuitConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#delete ExpressRouteCircuitConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#read ExpressRouteCircuitConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#update ExpressRouteCircuitConnection#update}
  */
  readonly update?: string;
}

function expressRouteCircuitConnectionTimeoutsToTerraform(struct?: ExpressRouteCircuitConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html azurerm_express_route_circuit_connection}
*/
export class ExpressRouteCircuitConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html azurerm_express_route_circuit_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRouteCircuitConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRouteCircuitConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressPrefixIpv4 = config.addressPrefixIpv4;
    this._addressPrefixIpv6 = config.addressPrefixIpv6;
    this._authorizationKey = config.authorizationKey;
    this._name = config.name;
    this._peerPeeringId = config.peerPeeringId;
    this._peeringId = config.peeringId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefix_ipv4 - computed: false, optional: false, required: true
  private _addressPrefixIpv4: string;
  public get addressPrefixIpv4() {
    return this.getStringAttribute('address_prefix_ipv4');
  }
  public set addressPrefixIpv4(value: string) {
    this._addressPrefixIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixIpv4Input() {
    return this._addressPrefixIpv4
  }

  // address_prefix_ipv6 - computed: false, optional: true, required: false
  private _addressPrefixIpv6?: string;
  public get addressPrefixIpv6() {
    return this.getStringAttribute('address_prefix_ipv6');
  }
  public set addressPrefixIpv6(value: string ) {
    this._addressPrefixIpv6 = value;
  }
  public resetAddressPrefixIpv6() {
    this._addressPrefixIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixIpv6Input() {
    return this._addressPrefixIpv6
  }

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

  // peer_peering_id - computed: false, optional: false, required: true
  private _peerPeeringId: string;
  public get peerPeeringId() {
    return this.getStringAttribute('peer_peering_id');
  }
  public set peerPeeringId(value: string) {
    this._peerPeeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPeeringIdInput() {
    return this._peerPeeringId
  }

  // peering_id - computed: false, optional: false, required: true
  private _peeringId: string;
  public get peeringId() {
    return this.getStringAttribute('peering_id');
  }
  public set peeringId(value: string) {
    this._peeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringIdInput() {
    return this._peeringId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteCircuitConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ExpressRouteCircuitConnectionTimeouts ) {
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
      address_prefix_ipv4: cdktf.stringToTerraform(this._addressPrefixIpv4),
      address_prefix_ipv6: cdktf.stringToTerraform(this._addressPrefixIpv6),
      authorization_key: cdktf.stringToTerraform(this._authorizationKey),
      name: cdktf.stringToTerraform(this._name),
      peer_peering_id: cdktf.stringToTerraform(this._peerPeeringId),
      peering_id: cdktf.stringToTerraform(this._peeringId),
      timeouts: expressRouteCircuitConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
