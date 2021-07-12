// https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatGatewayPublicIpPrefixAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#nat_gateway_id NatGatewayPublicIpPrefixAssociation#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#public_ip_prefix_id NatGatewayPublicIpPrefixAssociation#public_ip_prefix_id}
  */
  readonly publicIpPrefixId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#timeouts NatGatewayPublicIpPrefixAssociation#timeouts}
  */
  readonly timeouts?: NatGatewayPublicIpPrefixAssociationTimeouts;
}
export interface NatGatewayPublicIpPrefixAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#create NatGatewayPublicIpPrefixAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#delete NatGatewayPublicIpPrefixAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#read NatGatewayPublicIpPrefixAssociation#read}
  */
  readonly read?: string;
}

function natGatewayPublicIpPrefixAssociationTimeoutsToTerraform(struct?: NatGatewayPublicIpPrefixAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html azurerm_nat_gateway_public_ip_prefix_association}
*/
export class NatGatewayPublicIpPrefixAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html azurerm_nat_gateway_public_ip_prefix_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatGatewayPublicIpPrefixAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NatGatewayPublicIpPrefixAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_nat_gateway_public_ip_prefix_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._natGatewayId = config.natGatewayId;
    this._publicIpPrefixId = config.publicIpPrefixId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId: string;
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId
  }

  // public_ip_prefix_id - computed: false, optional: false, required: true
  private _publicIpPrefixId: string;
  public get publicIpPrefixId() {
    return this.getStringAttribute('public_ip_prefix_id');
  }
  public set publicIpPrefixId(value: string) {
    this._publicIpPrefixId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPrefixIdInput() {
    return this._publicIpPrefixId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NatGatewayPublicIpPrefixAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NatGatewayPublicIpPrefixAssociationTimeouts ) {
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
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      public_ip_prefix_id: cdktf.stringToTerraform(this._publicIpPrefixId),
      timeouts: natGatewayPublicIpPrefixAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
