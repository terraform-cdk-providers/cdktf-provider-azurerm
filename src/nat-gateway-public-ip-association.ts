// https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatGatewayPublicIpAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_association.html#nat_gateway_id NatGatewayPublicIpAssociation#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_association.html#public_ip_address_id NatGatewayPublicIpAssociation#public_ip_address_id}
  */
  readonly publicIpAddressId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_association.html#timeouts NatGatewayPublicIpAssociation#timeouts}
  */
  readonly timeouts?: NatGatewayPublicIpAssociationTimeouts;
}
export interface NatGatewayPublicIpAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_association.html#create NatGatewayPublicIpAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_association.html#delete NatGatewayPublicIpAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_association.html#read NatGatewayPublicIpAssociation#read}
  */
  readonly read?: string;
}

function natGatewayPublicIpAssociationTimeoutsToTerraform(struct?: NatGatewayPublicIpAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_association.html azurerm_nat_gateway_public_ip_association}
*/
export class NatGatewayPublicIpAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_association.html azurerm_nat_gateway_public_ip_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatGatewayPublicIpAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NatGatewayPublicIpAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_nat_gateway_public_ip_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._natGatewayId = config.natGatewayId;
    this._publicIpAddressId = config.publicIpAddressId;
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

  // public_ip_address_id - computed: false, optional: false, required: true
  private _publicIpAddressId: string;
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NatGatewayPublicIpAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NatGatewayPublicIpAssociationTimeouts ) {
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
      public_ip_address_id: cdktf.stringToTerraform(this._publicIpAddressId),
      timeouts: natGatewayPublicIpAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
