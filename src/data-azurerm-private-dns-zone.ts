// https://www.terraform.io/docs/providers/azurerm/d/private_dns_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPrivateDnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_dns_zone.html#name DataAzurermPrivateDnsZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_dns_zone.html#resource_group_name DataAzurermPrivateDnsZone#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_dns_zone.html#timeouts DataAzurermPrivateDnsZone#timeouts}
  */
  readonly timeouts?: DataAzurermPrivateDnsZoneTimeouts;
}
export interface DataAzurermPrivateDnsZoneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_dns_zone.html#read DataAzurermPrivateDnsZone#read}
  */
  readonly read?: string;
}

function dataAzurermPrivateDnsZoneTimeoutsToTerraform(struct?: DataAzurermPrivateDnsZoneTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/private_dns_zone.html azurerm_private_dns_zone}
*/
export class DataAzurermPrivateDnsZone extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/private_dns_zone.html azurerm_private_dns_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermPrivateDnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermPrivateDnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_number_of_record_sets - computed: true, optional: false, required: false
  public get maxNumberOfRecordSets() {
    return this.getNumberAttribute('max_number_of_record_sets');
  }

  // max_number_of_virtual_network_links - computed: true, optional: false, required: false
  public get maxNumberOfVirtualNetworkLinks() {
    return this.getNumberAttribute('max_number_of_virtual_network_links');
  }

  // max_number_of_virtual_network_links_with_registration - computed: true, optional: false, required: false
  public get maxNumberOfVirtualNetworkLinksWithRegistration() {
    return this.getNumberAttribute('max_number_of_virtual_network_links_with_registration');
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

  // number_of_record_sets - computed: true, optional: false, required: false
  public get numberOfRecordSets() {
    return this.getNumberAttribute('number_of_record_sets');
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPrivateDnsZoneTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermPrivateDnsZoneTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermPrivateDnsZoneTimeoutsToTerraform(this._timeouts),
    };
  }
}
