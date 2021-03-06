// https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedHostGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#automatic_placement_enabled DedicatedHostGroup#automatic_placement_enabled}
  */
  readonly automaticPlacementEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#location DedicatedHostGroup#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#name DedicatedHostGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#platform_fault_domain_count DedicatedHostGroup#platform_fault_domain_count}
  */
  readonly platformFaultDomainCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#resource_group_name DedicatedHostGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#tags DedicatedHostGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#zones DedicatedHostGroup#zones}
  */
  readonly zones?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#timeouts DedicatedHostGroup#timeouts}
  */
  readonly timeouts?: DedicatedHostGroupTimeouts;
}
export interface DedicatedHostGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#create DedicatedHostGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#delete DedicatedHostGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#read DedicatedHostGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html#update DedicatedHostGroup#update}
  */
  readonly update?: string;
}

function dedicatedHostGroupTimeoutsToTerraform(struct?: DedicatedHostGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html azurerm_dedicated_host_group}
*/
export class DedicatedHostGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_host_group.html azurerm_dedicated_host_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedHostGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DedicatedHostGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dedicated_host_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automaticPlacementEnabled = config.automaticPlacementEnabled;
    this._location = config.location;
    this._name = config.name;
    this._platformFaultDomainCount = config.platformFaultDomainCount;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._zones = config.zones;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_placement_enabled - computed: false, optional: true, required: false
  private _automaticPlacementEnabled?: boolean;
  public get automaticPlacementEnabled() {
    return this.getBooleanAttribute('automatic_placement_enabled');
  }
  public set automaticPlacementEnabled(value: boolean ) {
    this._automaticPlacementEnabled = value;
  }
  public resetAutomaticPlacementEnabled() {
    this._automaticPlacementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticPlacementEnabledInput() {
    return this._automaticPlacementEnabled
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

  // platform_fault_domain_count - computed: false, optional: false, required: true
  private _platformFaultDomainCount: number;
  public get platformFaultDomainCount() {
    return this.getNumberAttribute('platform_fault_domain_count');
  }
  public set platformFaultDomainCount(value: number) {
    this._platformFaultDomainCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformFaultDomainCountInput() {
    return this._platformFaultDomainCount
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DedicatedHostGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DedicatedHostGroupTimeouts ) {
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
      automatic_placement_enabled: cdktf.booleanToTerraform(this._automaticPlacementEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      platform_fault_domain_count: cdktf.numberToTerraform(this._platformFaultDomainCount),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      timeouts: dedicatedHostGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
